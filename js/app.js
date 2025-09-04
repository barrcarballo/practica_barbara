const catalogoMuebles = [
  {
    id: "1",
    nombre: "Silla",
    precio: 50,
    imagen:
      "https://i.pinimg.com/1200x/65/a3/d6/65a3d60d80fb6c8fa774480da0e2a9b7.jpg",
  },
  {
    id: "2",
    nombre: "Mesa",
    precio: 50,
    imagen:
      "https://i.pinimg.com/736x/01/38/06/0138062d698023cdcc7b767ec9e9572c.jpg",
  },
  {
    id: "3",
    nombre: "Sillón",
    precio: 50,
    imagen:
      "https://i.pinimg.com/736x/a0/63/31/a06331e612928736004d6921ab40fb8d.jpg",
  },
];

const contenedorProductos = document.getElementById("product-container");

function mostrarProductos() {
  catalogoMuebles.forEach((producto) => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("product-card");
    productoDiv.innerHTML = `
      <h3 class="product-name">${producto.nombre}</h3>
      <p class="product-price">$${producto.precio}</p>
    <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
    `;
    contenedorProductos.appendChild(productoDiv);
  });
}

mostrarProductos();

// ejercicio 2 - button add to favorite
const favButton = document.querySelector("button");
favButton.addEventListener("click", () => {
  favButton.classList.toggle("favorito");
  if (favButton.classList.contains("favorito")) {
    favButton.textContent = "⭐ Quitar de Favoritos";
  } else {
    favButton.textContent = "❤️Add to fav";
  }
});

// ejercicio 3 - Guardar y Cargar Preferencias con JSON

const preferenciasUsuario = {
  tema: "oscuro",
  idioma: "es",
  notificaciones: true,
};

const btnGuardar = document.getElementById("btn-guardar");
btnGuardar.addEventListener("click", () => {
  const preferenciasJSON = JSON.stringify(preferenciasUsuario);
  localStorage.setItem("misPreferencias", preferenciasJSON);
  alert("Preferencias guardadas");
});

const btnCargar = document.getElementById("btn-cargar");
btnCargar.addEventListener("click", () => {
  const preferenciasJSON = localStorage.getItem("misPreferencias");
  if (preferenciasJSON) {
    const preferenciasRecuperadas = JSON.parse(preferenciasJSON);
    console.log(preferenciasRecuperadas);
  } else {
    console.log("No hay preferencias guardadas");
  }
});

// ejercicio en clase
// escribir un programa que pida al usuario 5 nombres y apellidos
// los apellidos deben gurdarse en mayus y los nombres capitalizados
// GARCIA Juan Carlos
//Debemos guardarlos en un array
// Ordenados alfabeticamente

const nombresCompletos = [];

for (let i = 0; i < 5; i++) {
  let nombre = prompt("Ingrese el nombre:");
  let apellido = prompt("Ingrese el apellido:");

  nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
  apellido = apellido.toUpperCase();

  nombresCompletos.push(`${apellido} ${nombre}`);
}

nombresCompletos.sort();

console.log("Nombres y apellidos ordenados:");
nombresCompletos.forEach((nombreCompleto) => {
  console.log(nombreCompleto);
});

// ejercicio en clase 2
// pedir al usuario que ingrese el nickname (todo en minus)
// Generar un numero aleatorio de 5 cifras
// ironman12345
// Cuando reciba '0' termino de pedir

const nicknames = [];

while (true) {
  let nickname = prompt("Ingrese su nickname (o '0' para terminar):");
  if (nickname === "0") {
    break;
  }
  nickname = nickname.toLowerCase();
  const numeroAleatorio = Math.round(Math.random() * 100000);
  const nicknameCompleto = `${nickname}${numeroAleatorio}`;
  nicknames.push(nicknameCompleto);
}

console.log("Nicknames generados:");

nicknames.forEach((nick) => {
  console.log(nick);
});

// ejercicio en clase 3
// crear un array de objetos
// los objetos representan productos de un comercio
// cada objeto tiene nombre, precio, disponible en stock, caracteristicas []
// cada producto calcula su precio en dolares = this.precio de acuerdo a la cotizacion del dia

// consulta para el usuario en forma de menú
// 0 -> termina el programa
// 1 -> Buscar producto por nombre
// 2 -> Muestre todos los productos disponibles
// 3 -> Todos los productos con stos > 5 unidades

const productosComercio = [
  {
    nombre: "Producto A",
    precio: 100,
    stock: 10,
    caracteristicas: ["Caracteristica 1", "Caracteristica 2"],
    precioEnDolares: function (cotizacion) {
      return this.precio * cotizacion;
    },
  },
  {
    nombre: "Producto B",
    precio: 200,
    stock: 3,
    caracteristicas: ["Caracteristica 3", "Caracteristica 4"],
    precioEnDolares: function (cotizacion) {
      return this.precio * cotizacion;
    },
  },
  {},
];

const cotizacionDolar = 1345; 
let opcion;

do {
  opcion = prompt(
    "Ingrese una opción:\n1 - Buscar producto por nombre\n2 - Mostrar productos disponibles\n3 - Mostrar productos con stock > 5\n0 - Salir"
  );

  switch (opcion) {
    case "1":
      const nombreBusqueda = prompt("Ingrese el nombre del producto a buscar:");
      const productoEncontrado = productosComercio.find(
        (prod) =>
          prod.nombre.toLowerCase() === nombreBusqueda.toLowerCase()
      );
      if (productoEncontrado) {
        console.log("Producto encontrado:", productoEncontrado);
        console.log(
          `Precio en dólares: $${productoEncontrado.precioEnDolares(
            cotizacionDolar
          )}`
        );
      } else {
        console.log("Producto no encontrado");
      }
        break;
        case "2":
        const productosDisponibles = productosComercio.filter(
            (prod) => prod.stock > 0
        );
        console.log("Productos disponibles:", productosDisponibles);
        break;
        case "3":
        const productosConStockAlto = productosComercio.filter(
            (prod) => prod.stock > 5
        );
        console.log("Productos con stock > 5:", productosConStockAlto);
        break;
        case "0":
        console.log("Saliendo del programa...");
        break;
        default:
        console.log("Opción no válida, intente nuevamente.");
    }
} while (opcion !== "0"); 