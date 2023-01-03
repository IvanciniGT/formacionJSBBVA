const fs = require("fs");

async function leerFichero(fichero){
    var promesa=  fs.promises.readFile(fichero,'utf-8');
    console.log(promesa)
    console.log(promesa)
    console.log(promesa)
    console.log(promesa)
    return await promesa;
    console.log(promesa)
}

leerFichero("../resources/paises.txt");