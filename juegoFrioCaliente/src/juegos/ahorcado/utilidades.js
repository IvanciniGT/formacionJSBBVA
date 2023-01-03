
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

module.exports = {prepararEstructuraInicial,comprobarNuevaLetra}