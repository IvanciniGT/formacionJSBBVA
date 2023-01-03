
// Importaciones
const prompt = require('prompt-sync')();
const JuegoFrioCaliente = require('../../juego-frio-caliente');
const estadoPartida = require("../../../../estado-partida");

class JuegoFrioCalienteConsola extends JuegoFrioCaliente{
    
    obtenerNumeroDelUsuario(){
        return prompt("Dame un numero: ");
    }
    notificarResultado(resultado){
        console.log(resultado);
    }
}

module.exports = JuegoFrioCalienteConsola;