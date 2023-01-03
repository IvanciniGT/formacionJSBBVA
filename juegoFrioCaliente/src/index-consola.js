const Partida = require('./gui/consola/partida-consola');
const JuegoFrioCaliente = require('./juegos/frio-caliente/gui/consola/juego-frio-caliente-consola')
const JuegoAhorcado = require('./juegos/ahorcado/gui/consola/juego-ahorcado-consola')
const JuegoPiedraPapelTijera = require('./juegos/piedra-papel-tijera/gui/consola/juego-piedra-papel-tijera-consola')


//new Partida(new JuegoFrioCaliente()).jugar();
//new Partida(new JuegoAhorcado("resources/paises.txt")).jugar();
new Partida(new JuegoPiedraPapelTijera()).jugar();



