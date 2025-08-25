function aplicarDescuento(precio, porcentajeDescuento){
    const descuento = (precio * porcentajeDescuento) / 100;
    const precioFinal = precio - descuento;
    return precioFinal;
}

const precioMesa = 20000;
const precioSofa = 80000;

const nuevoPrecioMesa = aplicarDescuento(precioMesa, 10); 
const nuevoPrecioSofa = aplicarDescuento(precioSofa, 25);

console.log(`Precio origninal de la mesa: $${precioMesa} Descuento: 10% Precio final: $${nuevoPrecioMesa}`);
console.log(`Precio origninal del sofá: $${precioSofa} Descuento: 25% Precio final: $${nuevoPrecioSofa}`);
