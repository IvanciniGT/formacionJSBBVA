
// Importaciones
const prompt = require('prompt-sync');
const Juego = require('../../juego');
const estadoPartida = require("../../estado-partida");

class JuegoFrioCaliente extends Juego {
    
    obtenerNumeroDelUsuario(){ }
    notificarResultado(resultado){ }
    jugar(){
        
        // Generar un número aleatorio entre 1 y 20
        const numeroAAdivinar = Math.floor(Math.random()*19+1);
        var vidasDisponibles = 3;
        var acerto = false;
        // Hasta un máximo de 3 veces o hasta que acierte:
        while (vidasDisponibles > 0 && ! acerto) {
            // Preguntar al usuario un número
            var numeroPropuesto=this.obtenerNumeroDelUsuario();
            // Comprobar si acetó o no.
            const distanciaAlNumero = Math.abs(numeroAAdivinar - numeroPropuesto);
            var resultado;
            if (distanciaAlNumero == 0){
                acerto = true;
                continue;
            }else if (distanciaAlNumero <= 2){
                resultado="MuyCaliente"
            }else if(distanciaAlNumero <= 4){
                resultado="Caliente";
            }else if(distanciaAlNumero <= 6){
                resultado="Templado";
            }else if(distanciaAlNumero <= 8){
                resultado="Frio";
            }
            // Informar al usuario si no acertó
            this.notificarResultado(resultado);
            vidasDisponibles-=1;
        }
        // Devolver resultado de la partida
        if(acerto){
            return estadoPartida.GANADA;
        }else{    
            return estadoPartida.PERDIDA;
        }

    }
}
module.exports = JuegoFrioCaliente;