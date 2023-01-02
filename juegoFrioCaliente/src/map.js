
const lista = [1,2,3,5];
const resultado = lista.map(x=>x*2);
console.log(resultado)

/////
function doblar(numero){
    return numero*2;
}

const resultado2 = lista.map(doblar);
console.log(resultado2)
////
const palabra = "Camión";

// Para cada letra ["ó" , "O", "_"]

function transformado(caracter){
    return caracter.toUpperCase();
}

const estructura = [...palabra].map(caracter => 
                        [caracter, transformado(caracter), "_" ])
                        
console.log(estructura);
var letra = 'M'
var nuevaEstructura=estructura.map(infoCaracter => [    infoCaracter[0] , 
                                                        infoCaracter[1], 
                                                        infoCaracter[1]==letra?infoCaracter[0]:"_" ] )
console.log(nuevaEstructura);
console.log(nuevaEstructura.map(infoCaracter => infoCaracter[2]).join(" "));
console.log(nuevaEstructura.map(infoCaracter => infoCaracter[2]=="_"?1:0));
console.log(nuevaEstructura.map(infoCaracter => infoCaracter[2]=="_"?1:0).reduce((a,b)=>a+b));


//"A" -> 5?

////

var lista1 = [1,2,3,4]
var lista2 = [...lista1, 7,8]

console.log(lista2)

///

var usuario = { 
    "nombre": "Ivan",
    "apellidos": "Osuna Ayuste",
    "edad": 44
}

console.log( {...usuario, "edad": 45} )


