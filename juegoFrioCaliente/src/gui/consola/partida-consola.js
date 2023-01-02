const estadoPartida = require("./estado-partida");
const Partida = require("./partida");

class PartidaConsola extends Partida{
    mostrarResultadoPartida(resultado){
        if(resultado === estadoPartida.GANADA)
            console.log( "Has ganado");
        else if(resultado === estadoPartida.PERDIDA)
            console.log( "Has perdido");
        else if(resultado === estadoPartida.EMPATADA)
            console.log( "Has empatado");
    }
}
module.exports = PartidaConsola;