const precioBaseSiila = 4500.50;
const iva = 0.21;
const valorIva = precioBaseSiila * iva;
const precioFinal = precioBaseSiila + valorIva;
console.log(`Precio base de la silla:  ${precioBaseSiila}  IVA: ${valorIva}  Precio final de la silla: ${precioFinal}`);