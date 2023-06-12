const assert = require("chai").assert;
const resta = require("../resta");

describe("Resta", function () {
  it("debería restar dos números positivos correctamente", function () {
    const resultado = resta(5, 3);
    assert.equal(resultado, 2);
  });

  it("debería restar un número positivo y cero correctamente", function () {
    const resultado = resta(5, 0);
    assert.equal(resultado, 5);
  });

  it("debería restar dos números negativos correctamente", function () {
    const resultado = resta(-4, -2);
    assert.equal(resultado, -2);
  });
});
