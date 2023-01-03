const Juego = require("../../juego");
var utilidadesAhorcado = require('./utilidades');

class JuegoAhorcado extends Juego {
    
    constructor(){
        // Elegir una palabra aleatoriamente de una colección
        // Preparar una estructura adecuada de representación de datos... para juagr
        this.estructura = utilidadesAhorcado.prepararEstructuraInicial(palabra);
    }
    
    jugar(){
        // saludar al usuario y explicarle de qué va esto
        // Mientras le queden vidas y no haya acertado:
            // mostrar Información relevante: La palabra enmascarada, intentos que le quedan
            // Pedirle una letra
            // Comprobar la letra -> Boolean
            // Ha acertado la letra: 
            // Si si? Si ya tiene todo descubierto?
            //          Si si? Partida acabada
            //        Si no? Otra ronda
            // Si no? 
            //  Descuento vida y a por otro intento
    }
    
    elegirPalabra(){
        
    }
    
    
///    

    mensajeBienvenida() {
        
    }
    
    mostrarPantallaJuego(){
        
    }
    
    pedirLetra(){
        
    }


    
    
}