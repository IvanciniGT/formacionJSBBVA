const JuegoAhorcado = require("../../juego-ahorcado");
const utilidades = require("../../utilidades");
const prompt = require('prompt-sync')();

class JuegoAhorcadoConsola extends JuegoAhorcado {

    constructor(fichero){
        super(fichero);
        this.leerAhorcado();
    }

    async leerAhorcado(){
        this.muñecote = await utilidades.leerFichero("resources/ahorcado.txt")
    }

    async mensajeBienvenida() {
        const mensaje = await utilidades.leerFichero("resources/bienvenida.txt")
        console.log(mensaje);
    }
    
    mostrarPantallaJuego(){
        console.log("Palabra a adivinar"+ this.estructura.map(infoCaracter => infoCaracter[2]).join(" "));
        console.log("Intentos restantes: " + this.vidas)
        
    }
    
    pedirLetra(){
        return prompt("Dame una letra: ");
    }
    
}

module.exports = JuegoAhorcadoConsola;