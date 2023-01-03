var assert = require('assert');
var utilidadesAhorcado = require('../src/juegos/ahorcado/utilidades');

describe('Probar la generación de la estructura inicial', function () {
    it('Al pasar la palabra camión, debe devolver la estructutra adecuada', function () {
      
      const estructura = utilidadesAhorcado.prepararEstructuraInicial("Camion");
      const esperada = [
                            ["C", "C", "_"],
                            ["a", "A", "_"],
                            ["m", "M", "_"],
                            ["i", "I", "_"],
                            ["o", "O", "_"],
                            ["n", "N", "_"]
                        ]
      assert.equal(JSON.stringify(estructura) , JSON.stringify(esperada));
    });
    it('Al pasar la palabra elefante, debe devolver la estructutra adecuada', function () {
      
      const estructura = utilidadesAhorcado.prepararEstructuraInicial("Elefante");
      const esperada = [
                            ["E", "E", "_"],
                            ["l", "L", "_"],
                            ["e", "E", "_"],
                            ["f", "F", "_"],
                            ["a", "A", "_"],
                            ["n", "N", "_"],
                            ["t", "T", "_"],
                            ["e", "E", "_"]
                        ]
      assert.equal(JSON.stringify(estructura) , JSON.stringify(esperada));
    });
});


describe('Probar la comprobarción de una letra', function () {
    var resultado;
    const estructuraEsperadaDevuelta2 = [
        ["C", "C", "C"],
        ["a", "A", "a"],
        ["m", "M", "_"],
        ["i", "I", "_"],
        ["o", "O", "_"],
        ["n", "N", "_"]
    ]
    const estructuraEsperadaDevuelta = [
        ["C", "C", "C"],
        ["a", "A", "_"],
        ["m", "M", "_"],
        ["i", "I", "_"],
        ["o", "O", "_"],
        ["n", "N", "_"]
    ]

    it('Al usar la palabra camión, la letra "c" debe reconocerse', function () {
      const estructuraInicial = utilidadesAhorcado.prepararEstructuraInicial("Camion");
      resultado = utilidadesAhorcado.comprobarNuevaLetra("C",estructuraInicial, 6);
      assert.equal(JSON.stringify(resultado.estructura) , JSON.stringify(estructuraEsperadaDevuelta));
      assert.equal(resultado.encontrada, true);
      assert.equal(resultado.pendientes, 5);
    });
    it('Al usar la palabra camión, la letra "A" debe reconocerse', function () {

      resultado = utilidadesAhorcado.comprobarNuevaLetra("A",resultado.estructura,resultado.pendientes);
      assert.equal(JSON.stringify(resultado.estructura) , JSON.stringify(estructuraEsperadaDevuelta2));
      assert.equal(resultado.encontrada, true);
      assert.equal(resultado.pendientes, 4);
    });
    it('Al usar la palabra camión, la letra "P" no debe reconocerse', function () {

      resultado = utilidadesAhorcado.comprobarNuevaLetra("P",resultado.estructura,resultado.pendientes);
      assert.equal(JSON.stringify(resultado.estructura) , JSON.stringify(estructuraEsperadaDevuelta2));
      assert.equal(resultado.encontrada, false);
      assert.equal(resultado.pendientes, 4);
  
    });
});


