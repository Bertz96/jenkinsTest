const assert = require("assert");
const should = require("chai").should();
const expect = require("chai").expect;
const division = require("../division.js");

describe("Prueba funcionalidad division", function () {
  it("Retorna el cociente de dos numeros", () => {
    assert.equal(division(10, 2), 5);
    expect(division(15, 3)).to.equal(5);
    division(8, 4).should.equal(2);
  });

  it("Division por cero", function () {
    assert.throws(() => {
      division(5, 0);
    }, Error);

    should.throw(() => {
      division(23, 0);
    }, "No se puede dividir por 0");

    expect(() => {
      division(203, 0);
    }).to.throw("No se puede dividir por 0");
  });

  it("Division por negativos", () => {
    assert.equal(division(-14, 2), -7);
    division(-18, -3).should.equal(6);
    expect(division(-10, 2)).to.equal(-5);
  });

  it("Division por decimales", () => {
    assert.equal(division(5, 2), 2.5);
    division(8, 3.2).should.equal(2.5);
    expect(division(9.4, 3.8)).to.equal(2.473684210526316);
  });

  it("Dividir 0 por un numero", () => {
    assert.equal(division(0, 5), 0);
    division(0, 33).should.equal(0);
    expect(division(0, 23)).to.equal(0);
  });

  it("Ingresar un valor no numerico a la funcion", () => {
    assert.throws(() => {
      division(30, "15");
    }, Error);
    should.throw(() => {
      division("20", "10");
    }, "Por favor ingrese un numero");
    expect(() => {
      division("diez", 2);
    }).to.throw("Por favor ingrese un numero");
  });
});
