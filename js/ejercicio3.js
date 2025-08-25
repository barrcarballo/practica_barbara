let totalCompra = 0;
let seguirComprando = true;

while (seguirComprando) {
  const respuesta = confirm("¿Desea agregar un producto al carrito?");
  if (respuesta === true) {
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto"));
    totalCompra += precioProducto;
  } else {
    alert("Gracias por su compra");
    seguirComprando = false;
  }
}

alert(`El total de su compra es: ${totalCompra}`);
