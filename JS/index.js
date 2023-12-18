alert(
  `Inicialización de la aplicación\n============================================================`
);

// Definición de productos
const productos = [
  { nombre: "Hamburguesa Simple", precio: 300 },
  { nombre: "Doble Nic", precio: 500 },
  { nombre: "Super Nic", precio: 600 },
  { nombre: "Mega Pumper", precio: 700 },
  { nombre: "Tapa Arterias", precio: 650 },
  { nombre: "Paro Cardiaco", precio: 650 },
  { nombre: "Papas Fritas Grandes", precio: 250 },
  { nombre: "Papas Fritas Medianas", precio: 200 },
  { nombre: "Papas Fritas Pequeñas", precio: 150 },
  { nombre: "Bebida sabor Cola", precio: 100 },
  { nombre: "Bebida sabor Lima", precio: 100 },
  { nombre: "Bebida sabor naranja", precio: 100 },
];

// Función para mostrar el menú
function mostrarMenu() {
  alert("Menú:");
  alert("============================================================");
}

// Función para tomar la orden del cliente
function tomarOrden() {
  const orden = [];
  let continuar = true;

  while (continuar) {
    const opcion = parseInt(
      prompt(`Ingrese el número del producto que desea agregar:
      1-  Hamburguesa Simple, precio: 300 
      2-  Doble Nic, precio: 500 
      3-  Super Nic, precio: 600 
      4-  Mega Pumper, precio: 700 
      5-  Tapa Arterias, precio: 650 
      6-  Paro Cardiaco, precio: 650 
      7-  Papas Fritas Grandes, precio: 250 
      8-  Papas Fritas Medianas, precio: 200 
      9-  Papas Fritas Pequeñas, precio: 150 
      10- Bebida sabor Cola, precio: 100 
      11- Bebida sabor Lima, precio: 100 
      12- Bebida sabor naranja, precio: 100 
      0-  Para Finalizar la compra`)
    );

    if (opcion === 0) {
      continuar = false;
    } else if (opcion >= 1 && opcion <= productos.length) {
      orden.push(productos[opcion - 1]);
      alert(`${productos[opcion - 1].nombre} agregado al carrito.`);
    } else {
      alert("Opción no válida. Por favor, ingrese un número válido.");
    }
  }

  return orden;
}

// Función para calcular el total de la compra
function calcularTotal(orden) {
  let total = 0;
  orden.forEach((producto) => {
    total += producto.precio;
  });
  return total;
}

// Función para que el usuario elija el método de pago
function elegirMetodoPago() {
  const metodosDePago = ["Efectivo", "MercadoPago", "Crédito", "Débito"];
  const opcion = parseInt(
    prompt(
      `Seleccione el método de pago:
      1. Efectivo
      2. MercadoPago
      3. Crédito
      4. Débito`
    )
  );

  if (opcion >= 1 && opcion <= metodosDePago.length) {
    return metodosDePago[opcion - 1];
  } else {
    alert("Opción no válida. Seleccionando Efectivo por defecto.");
    return "Efectivo";
  }
}

// Lógica principal
mostrarMenu();
const ordenCliente = tomarOrden();
const totalCompra = calcularTotal(ordenCliente);

alert("Resumen de la orden:");
ordenCliente.forEach((producto) => {
  alert(`${producto.nombre} - $${producto.precio}`);
});
alert(`Total de la compra: $${totalCompra}`);

const metodoPago = elegirMetodoPago();
alert(`Gracias por tu compra, ${cliente.nombre}.\nDirección de entrega: ${cliente.direccion}.\nMétodo de pago seleccionado: ${metodoPago}`);