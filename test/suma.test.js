const assert = require("chai").assert;
const suma = require("../suma");

describe("Suma", function () {
  it("debería sumar dos números positivos correctamente", function () {
    const resultado = suma(2, 3);
    assert.equal(resultado, 5);
  });

  it("debería sumar un número positivo y cero correctamente", function () {
    const resultado = suma(5, 0);
    assert.equal(resultado, 5);
  });

  it("debería sumar dos números negativos correctamente", function () {
    const resultado = suma(-4, -2);
    assert.equal(resultado, -6);
  });
});
