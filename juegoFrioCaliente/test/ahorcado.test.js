var assert = require('assert');
var utilidadesAhorcado = require('../src/juegos/ahorcado/utilidades');

describe('Probar la generación de la estructura inicial', function () {
    it('Al pasar la palabra camión, debe devolver la estructutra adecuada', function () {
      
      const estructura = utilidadesAhorcado.prepararEstructuraInicial("Camión");
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
});


