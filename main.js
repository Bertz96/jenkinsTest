function division(dividendo, divisor) {
  if (typeof dividendo === "number" && typeof divisor === "number") {
    if (divisor !== 0) {
      return dividendo / divisor;
    }

    throw new Error("No se puede dividir por 0");
  }

  throw new Error("Por favor ingrese un numero");
}

module.exports = division;
