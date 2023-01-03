
// Importaciones
const prompt = require('prompt-sync');
const Juego = require('../../juego');
const estadoPartida = require("../../estado-partida");


const reglas = [
    [0,2,1],
    [1,0,2],
    [2,1,0]
]

class JuegoPiedraPapelTijera extends Juego {
    
    obtenerNumeroDeManos(){ }
    obtenerEleccionJugador(){ }
    notificarResultadoMano(resultado){ }
    notificarResultadoJuego(resultado){ }
    jugar(){
        
        var acumulado = [0,0,0]
        // Generar un número aleatorio entre 1 y 20
        var manos=this.obtenerNumeroDeManos();
        // Hasta un máximo de 3 veces o hasta que acierte:
        while (acumulado[1] ==manos || acumulado[2] ==manos) {
            const eleccionComputadora = Math.round(Math.random()*2);
            // Preguntar al usuario su opción
            var eleccionJugador=this.obtenerEleccionJugador();
            var ganadorMano= reglas[eleccionJugador][eleccionComputadora]
            acumulado[ganadorMano]+=1
            this.notificarResultadoMano(ganadorMano);
        }
        // Devolver resultado de la partida
        this.notificarResultadoJuego(acumulado[1]==manos);
        if(acumulado[1] ==manos){
            
            return estadoPartida.GANADA;
        }else{    
            return estadoPartida.PERDIDA;
        }

    }
}
module.exports = JuegoPiedraPapelTijera;