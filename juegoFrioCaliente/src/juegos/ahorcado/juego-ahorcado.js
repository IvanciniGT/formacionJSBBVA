const Juego = require("../../juego");
var utilidadesAhorcado = require('./utilidades');
const estadoPartida = require("../../estado-partida");

class JuegoAhorcado extends Juego {
    
    constructor(fichero){
        super()
        this.fichero=fichero
    }
    
    async jugar(){
        // Elegir una palabra aleatoriamente de una colección
        this.palabra = await utilidadesAhorcado.elegirPalabra(this.fichero);
        // Preparar una estructura adecuada de representación de datos... para juagr
        this.estructura = utilidadesAhorcado.prepararEstructuraInicial(this.palabra);
        this.pendientes = this.palabra.length
        this.vidas=6

        var acertado = false;
        // saludar al usuario y explicarle de qué va esto
        await this.mensajeBienvenida();
        
        // Mientras le queden vidas y no haya acertado:
        while (this.vidas >0 && ! acertado){
            // mostrar Información relevante: La palabra enmascarada, intentos que le quedan
            this.mostrarPantallaJuego();
            // Pedirle una letra
            const letra = this.pedirLetra().toUpperCase();
            // Comprobar la letra -> Boolean
            const resultado = utilidadesAhorcado.comprobarNuevaLetra(letra,this.estructura, this.pendientes);
            this.estructura = resultado.estructura
            this.pendientes = resultado.pendientes
            // Ha acertado la letra: 
            if (resultado.encontrada){
            // Si si? Si ya tiene todo descubierto?
                if (resultado.pendientes == 0){
                    //          Si si? Partida acabada
                    this.mostrarPantallaJuego();
                    return estadoPartida.GANADA;
                }else
                    //        Si no? Otra ronda
                    continue
            }else{    
                this.vidas-=1;
            }
            // Si no? 
            //  Descuento vida y a por otro intento
        }
        return estadoPartida.PERDIDA;
    }
    
    
    
///    

    mensajeBienvenida() {
        
    }
    
    mostrarPantallaJuego(){
        
    }
    
    pedirLetra(){
        
    }


    
    
}

module.exports = JuegoAhorcado;