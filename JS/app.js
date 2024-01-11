let filtros = document.querySelector("#filtros");
let buscar = document.querySelector("#buscar");
let productos = document.querySelector("#productos");
let comprar = document.querySelector(".comprar");
let canvasBody = document.querySelector("#canvasBody");
let carritoPadre = document.querySelector("#carritoPadre");
let carritoContainer = document.querySelector("#carritoContainer");
let totalCarrito = document.querySelector("#totalCarrito");
let botonCarrito = document.querySelector("#botonCarrito");
let botonCarritoNotificacion = document.querySelector(
  "#botonCarritoNotificacion"
);


// Arrays

let productosFiltrados = [];
const productosData = [
  {
    id: "amate1",
    nombre: "Mate Imperial",
    precio: 20,
    categoria: "Mate",
    descripcion:
      "Mate Imperial con virola con relieve de acero, una calabaza seleccionada de alta calidad y forrado de Cuero Negro",
    imagen: "logo.png",
  },
  {
    id: "amate2",
    nombre: "Mate Torpedo Uruguayo",
    precio: 20,
    categoria: "Mate",
    descripcion:
      "Mate torpedo uruguayo con virola lisa de acero, su interior es de calabaza seleccionada, la misma está forrada en cuero.",
    imagen: "Torpedo.jpg",
  },
  {
    id: "amate3",
    nombre: "Mate de Acero",
    precio: 15,
    categoria: "Mate",
    descripcion:
      "Mate Stanley de Acero, Con este mate te vas a ahorrar el curado ya que llega listo para ser usado, lavalo y usalo!",
    imagen: "mateacero.jpg",
  },
  {
    id: "amate4",
    nombre: "Mate Camionero",
    precio: 18,
    categoria: "Mate",
    descripcion:
      "El Mate de Camionero es un mate grande y amplio por dentro, hecho de cuero virola de alpaca y una de nuestras calabaza seleccionada.",
    imagen: "camionero.png",
  },
  {
    id: "bbombi1",
    nombre: "Bombilla Pico de Loro",
    precio: 10,
    categoria: "Bombilla",
    descripcion:
      "Una de las bombillas mas elegidas por el publico. Hecha de alpaca, da mayor comodidad al tomar",
    imagen: "bombillapicodeloro.png",
  },
  {
    id: "bbombi2",
    nombre: "Bombilla Clásica",
    precio: 5,
    categoria: "Bombilla",
    descripcion:
      "La Bombilla Clásica esta hecha de alpaca para evitar que se oxide, es la mas recomendada para el mate de acero.",
    imagen: "bombillabasica.png",
  },
  {
    id: "bbombi3",
    nombre: "Bombilla Plana ",
    precio: 8.5,
    categoria: "Bombilla",
    descripcion:
      "La bombilla plana hecha de acero inoxidable y moldura en dorado, ideal para mates grandes. Producto de alta calidad. ",
    imagen: "bombillaplana.png",
  },

  {
    id: "bbombi4",
    nombre: "Bombillas de Colores",
    precio: 1,
    categoria: "Bombillas",
    descripcion:
      "Las Bombillas de colores son ideales para regalos, hechas de acero inoxidable.",
    imagen: "Bombillasdecolores.png",
  },
  {
    id: "ctermo1",
    nombre: "Termo Stanley",
    precio: 30,
    categoria: "Termos",
    descripcion:
      "Termo Stanley con tapa cebadora, aguanta 24hs con el agua caliente.",
    imagen: "Stanley.jpg",
  },
  {
    id: "ctermo2",
    nombre: "Termo de media Manija",
    precio: 27.5,
    categoria: "Termos",
    descripcion:
      "Termo Media manija con pico cebador, resiste el agua caliente durante 12hs",
    imagen: "termomediamanija.jpg",
  },
  {
    id: "ctermo3",
    nombre: "Termo Lumilagro",
    precio: 22.5,
    categoria: "Termos",
    descripcion:
      "Mate lumilagro de acero inxidable, pico cebador, termo ultra resistente",
    imagen: "lumilagro.png",
  },

  {
    id: "ctermo4",
    nombre: "Termo de Viajero",
    precio: 35,
    categoria: "Termos",
    descripcion:
      "Termo de Viajero, tiene 2 litros de aguas ideal para cuando vas a hacer distancias largas",
    imagen: "termo2lt.png",
  },
];
let carritoCompra = JSON.parse(localStorage.getItem("carrito")) || [];

const crearBoton = (texto, ...estilos) => {
  let button = document.createElement("button");
  button.innerText = texto;
  button.classList.add(...estilos);
  return button;
};

const mostrarProductos = (listaproductos) => {
  productos.innerHTML = " ";
  listaproductos.forEach((producto) => {
    let card = document.createElement("div");
    card.className = "card col-4 g-4 text-center";
    card.style.width = "18rem";
    card.innerHTML = `
      <img src="../image/${producto.imagen}" class="card-img-top mt-2">
      <div class="card-body">
        <h5 class="card-title fs-4">${producto.nombre}</h5>
        <p class="card-text fs-5">${producto.descripcion}</p>
        <p class="card-text fs-4 badge bg-success">$ ${producto.precio} USD</p>
      </div>
    `;
    let botonCompraContainer = document.createElement("div");
    botonCompraContainer.className = "text-center pt-2";
    card.appendChild(botonCompraContainer);
    let botonCompra = crearBoton(
      "Comprar",
      "btn",
      "btn-primary",
      "shadow",
      "fs-4",
      "mb-3",
      "comprar"
    );
    botonCompraContainer.appendChild(botonCompra);
    productos.appendChild(card);
    botonCompra.onclick = () => agregarAlCarrito(producto.id);
  });
};

const verCarrito = (carritoCompra) => {
  if (carritoCompra.length > 0) {
    canvasBody.classList.remove("text-center");
    carritoContainer.innerHTML = " ";
    carritoCompra.forEach((producto) => {
      let cardCarrito = document.createElement("li");
      cardCarrito.className = "cardCanvasCarrito list-group-item";
      cardCarrito.innerText = `${producto.nombre}`;
      let cardCarritoPrecioyEliminar = document.createElement("div");
      cardCarritoPrecioyEliminar.className = "row";
      cardCarritoPrecioyEliminar.innerHTML = `<p class="card-text col-6"> $ ${producto.precio} USD</p>`;
      cardCarrito.appendChild(cardCarritoPrecioyEliminar);
      let botonEliminarCarrito = crearBoton(
        "Eliminar",
        "btn",
        "col-3",
        "btn-danger"
      );
      cardCarritoPrecioyEliminar.appendChild(botonEliminarCarrito);
      carritoContainer.appendChild(cardCarrito);
      botonEliminarCarrito.onclick = () =>{
        eliminarProductoCarrito(producto.index);
      }
    });
  }else{
    canvasBody.className = "offcanvas-body text-center"
    carritoContainer.innerHTML = `<h3 class="offcanvas-title text-center" >¡Tu Carrito está Vacío!</h3>   
    <h4 class="offcanvas-title text-center">¿Por qué no revisas nuestra tienda y agregas algunos productos?</h4>`;
  }
};

const agregarAlCarrito = (productoID) => {
  const productoAgregado = productosData.find(
    (producto) => producto.id === productoID
  );
  productoAgregado.index = Date.now().toString(36);

  let confirmado = confirm(`se agregará objeto ${productoAgregado.nombre} al carrito`);
  if (confirmado){
  carritoCompra.push(productoAgregado);
  localStorage.setItem("carrito", JSON.stringify(carritoCompra));
  verCarritoNotificacion();
  verTotal(carritoCompra);
  }
};

const verTotal = (carrito) => {
  const total = carrito.reduce((acumulador, producto) => {
    return acumulador + producto.precio;
  }, 0);

  if(carrito.length >0 ){
  totalCarrito.innerText = `Total a Pagar: $${total} USD`;
}else{totalCarrito.innerText = " ";}
};

const eliminarProductoCarrito = (productoIndex) => {
  let index = carritoCompra.findIndex(
    (producto) => producto.index === productoIndex
  );

  if (index !== -1) {
    carritoCompra.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carritoCompra));
    verCarrito(carritoCompra);
    verTotal(carritoCompra);
    verCarritoNotificacion();
  }
};

const verCarritoNotificacion = () => {
  botonCarritoNotificacion.innerHTML = " ";

  if (carritoCompra !== undefined) {
    let notificacion = document.createElement("div");
    notificacion.className = "notificacionCarrito";
    notificacion.innerText = `${carritoCompra.length}`;

    if (carritoCompra.length > 0) {
      console.log("hay objetos en el carrito");
      botonCarritoNotificacion.appendChild(notificacion);
    }
  }
};

const filtrarProductos = (categoriaProducto) => {
  switch (categoriaProducto) {
    case "Yerbas":
      productosFiltrados = productosData.filter(
        (producto) => producto.categoria === "Yerbas"
      );
      mostrarProductos(productosFiltrados);
      break;
    case "Termos":
      productosFiltrados = productosData.filter(
        (producto) => producto.categoria === "Termos"
      );
      mostrarProductos(productosFiltrados);
      break;
    case "Bombillas":
      productosFiltrados = productosData.filter(
        (producto) => producto.categoria === "Bombillas"
      );
      mostrarProductos(productosFiltrados);
      break;
    case "Mates":
      productosFiltrados = productosData.filter(
        (producto) => producto.categoria === "Mates"
      );
      mostrarProductos(productosFiltrados);
      break;
    case "Todo":
      mostrarProductos(productosData);
      break;
    default:
      mostrarProductos(productosData);
  }
};

verCarritoNotificacion();
mostrarProductos(productosData);
verCarrito(carritoCompra);

buscar.oninput = (event) => {
  if (event.target.value === " ") {
    mostrarProductos(productosData);
  } else {
    productosFiltrados = productosData.filter((producto) =>
      producto.nombre.toLowerCase().includes(event.target.value)
    );
    mostrarProductos(productosFiltrados);
  }
};

filtros.onchange = () => {
    filtrarProductos(filtros.value);
  };

botonCarrito.onclick = () => {
  verCarrito(carritoCompra);
  verTotal(carritoCompra);
};
