
// Importaciones
const prompt = require('prompt-sync')();
const JuegoPiedraPapelTijera = require('../../juego-piedra-papel-tijera');
const estadoPartida = require("../../../../estado-partida");

const ganador = ["Quedamos empate", "Has ganado tu", "He ganado yo"]
const opcion = ["Piedra", "Papel", "Tijera"]
const resultado = ["Eres un pringao XD", "Eres una máquina !!!"]

class JuegoPiedraPapelTijeraConsola extends JuegoPiedraPapelTijera{
    
    obtenerNumeroDelUsuario(){
    }
    notificarResultado(resultado){
        console.log(resultado);
    }
    
    
    obtenerNumeroDeManos(){ 
        return parseInt(prompt("Al que gane cuántas? "));
    }
    obtenerEleccionJugador(){
        return parseInt("Qué eliges (0: Piedra, 1: Papel, 2: Tijera) ?");

    }
    notificarResultadoMano(eleccionComputadora,resultado){
        console.log("Yo elegí: "+opcion[eleccionComputadora])
        console.log(ganador[resultado])
    }
    notificarResultadoJuego(ganoJugador){ 
        console.log(resultado[ganoJugador])
    }
    
}

module.exports = JuegoPiedraPapelTijeraConsola;