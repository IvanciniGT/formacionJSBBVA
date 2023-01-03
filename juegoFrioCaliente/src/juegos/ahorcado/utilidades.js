const fs = require("fs");
function transformado(caracter){
    return caracter.toUpperCase();
}


function prepararEstructuraInicial(palabra){
    return [...palabra].map(caracter => 
                        [caracter, transformado(caracter), "_" ])
}


function comprobarNuevaLetra(letra, estructura, pendientesAntes){ // -> Boolean

    const nuevaEstructura=estructura.map(infoCaracter => [    infoCaracter[0] , 
                                                            infoCaracter[1], 
                                                            infoCaracter[2]!='_'||infoCaracter[1]==letra?infoCaracter[0]:"_" ] )
    const pendientesDespues = contarPendientes(nuevaEstructura)

    return {encontrada: pendientesAntes != pendientesDespues, estructura: nuevaEstructura, pendientes: pendientesDespues }
}

function contarPendientes(estructura){
    return estructura.map(infoCaracter => infoCaracter[2]=="_"?1:0).reduce((a,b)=>a+b);
}

async function leerFichero(fichero){
    return fs.promises.readFile(fichero,'utf-8');
}

async function elegirPalabra(fichero){
    // Leer el fichero
    const contenido= await leerFichero(fichero);
    // Split del fichero por lineas
    const lista = contenido.split("\n")
    // Calcular numero aleatorio entre 0 y longitud de la lista -1
    const numero = parseInt(Math.random() * (lista.length-1))
    // devolverde la lista la posicion correspondiente
    return lista[numero]
}


module.exports = {prepararEstructuraInicial,comprobarNuevaLetra, leerFichero,elegirPalabra}

