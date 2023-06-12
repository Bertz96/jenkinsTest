const assert = require("chai").assert;
const multiplicacion = require("../multiplicacion.js");

describe("Multiplicación", function () {
  it("debería multiplicar dos números positivos", function () {
    const resultado = multiplicacion(2, 3);
    assert.equal(resultado, 6);
  });

  it("debería multiplicar un número positivo y cero", function () {
    const resultado = multiplicacion(5, 0);
    assert.equal(resultado, 0);
  });

  it("debería multiplicar un número positivo y negativo", function () {
    const resultado = multiplicacion(-4, 2);
    assert.equal(resultado, -8);
  });
});
