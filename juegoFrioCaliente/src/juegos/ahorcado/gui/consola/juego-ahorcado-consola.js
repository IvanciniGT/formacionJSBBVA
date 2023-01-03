const JuegoAhorcado = require("../../juego-ahorcado");
const utilidades = require("../../utilidades");
const prompt = require('prompt-sync')();

class JuegoAhorcadoConsola extends JuegoAhorcado {

    constructor(fichero){
        super(fichero);
        this.leerAhorcado();
    }

    async leerAhorcado(){
        this.muñecote = (await utilidades.leerFichero("resources/ahorcado.txt")).split("\n")
    }

    async mensajeBienvenida() {
        console.clear()
        const mensaje = await utilidades.leerFichero("resources/bienvenida.txt")
        console.log(mensaje);
        return prompt("Pulsa enter para continuar... ");
    }
    
    mostrarPantallaJuego(){
        console.clear()
        console.log(this.muñecote[(6-this.vidas)*7])
        console.log(this.muñecote[(6-this.vidas)*7+1]+"     "+ "Palabra a adivinar: "+ this.estructura.map(infoCaracter => infoCaracter[2]).join(" "))
        console.log(this.muñecote[(6-this.vidas)*7+2]+"     "+"Intentos restantes: " + this.vidas)
        console.log(this.muñecote[(6-this.vidas)*7+3])
        console.log(this.muñecote[(6-this.vidas)*7+4])
        console.log(this.muñecote[(6-this.vidas)*7+5])
        console.log(this.muñecote[(6-this.vidas)*7+6])
        if(this.vidas==0){
            console.log("PERDISTE !!!!! pringao ;)")
            console.log("LA palabra era: "+ this.palabra)
        }else if (this.pendientes == 0){
            console.log("GANASTE !!!!! campeón :(")
            
        }

    }
    
    pedirLetra(){
        return prompt("Dame una letra: ");
    }
    
}

module.exports = JuegoAhorcadoConsola;