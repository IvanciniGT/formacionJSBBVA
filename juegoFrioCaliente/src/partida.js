const estadoPartida = require("./estado-partida");

class Partida {
    
    constructor(juegoAJugar){
        this.juego = juegoAJugar;
        this.estadoActual = estadoPartida.PENDIENTE;
    }
    
    jugar(){
        // TODO: Para poder jugar, el estadoActual debe ser: PENDIENTE
        // Y lanzar error si no es así
        this.estadoActual = estadoPartida.JUGANDO;
        this.estadoActual = this.juego.jugar();
        this.mostrarResultadoPartida(this.estadoActual);
    }
}
module.exports = Partida;