const Partida = require('./gui/consola/partida-consola');
const JuegoFrioCaliente = require('./juegos/frio-caliente/gui/consola/juego-frio-caliente-consola')


new Partida(new JuegoFrioCaliente()).jugar();


