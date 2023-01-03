const Partida = require('./gui/consola/partida-consola');
const JuegoFrioCaliente = require('./juegos/frio-caliente/gui/consola/juego-frio-caliente-consola')
const JuegoAhorcado = require('./juegos/ahorcado/gui/consola/juego-ahorcado-consola')


//new Partida(new JuegoFrioCaliente()).jugar();
new Partida(new JuegoAhorcado("../resources/paises.txt")).jugar();



