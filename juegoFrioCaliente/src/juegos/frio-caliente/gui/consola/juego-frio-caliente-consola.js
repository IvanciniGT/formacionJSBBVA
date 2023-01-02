
// Importaciones
const prompt = require('prompt-sync');
const JuegoFrioCaliente = require('../../JuegoFrioCaliente');
const estadoPartida = require("../../../../estado-partida");

class JuegoFrioCalienteConsola extends JuegoFrioCaliente{
    
    obtenerNumeroDelUsuario(){
        prompt("Dame un numero: ");
    }
    notificarResultado(resultado){
        console.log(resultado);
    }
}

module.exports = JuegoFrioCalienteConsola;