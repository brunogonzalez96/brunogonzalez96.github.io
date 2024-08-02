
   /* let Bienvenida = "Bienvenido a BEBIDAS GONZALEZ";
    alert (Bienvenida)
    let IngresoDatosClientes = (prompt("Por favor ingrese su nombre y apellido"));
    let IngresoEdad = parseInt(prompt("Por favor ingrese su edad"));
    if (IngresoEdad >= 18) {
        alert("Puedes comprar bebidas alcoholicas");
    } else if (IngresoEdad < 18){
    alert("No puedes comprar bebidas alcoholicas");
}
    

    let BebidasGin = "Ingrese marca del Gin que desea";
    let BebidasVodka = "Ingrese marca del Vodka que desea";
    let BebidasCerveza = "Ingrese marca de la Cerveza que desea";
    let BebidasVino = "Ingrese marca del Vino que desea";
    let BebidasRon = "Ingrese marca del Ron que desea";
    let BebidasWhisky = "Ingrese marca del Whisky que desea";
    
    let IngresoBebidas = prompt("Ingrese bebida que desee:\n1-gin\n2-vodka\n3-cerveza\n4-vino\n5-ron\n6-whisky");
    let ValoresGinHeredero = "Heredero: $10.285";
    let ValoresGinBrighton = "Brighton: $5.885";
    let ValoresGinTanqueray = "Tanqueray: $27.885";
    let TiposDeGin1 = prompt(ValoresGinHeredero);
    let TiposDeGin2 = prompt(ValoresGinBrighton);
    let TiposDeGin3 = prompt(ValoresGinTanqueray);

    const personal = { ValoresGinBrighton, ValoresGinHeredero, ValoresGinTanqueray };

    if (IngresoBebidas == "1") {
        if (TiposDeGin1 == "1") {
            alert(ValoresGinHeredero);
        } else if (TiposDeGin2 == "2") {
            alert(ValoresGinBrighton);
        } else if (TiposDeGin3 == "3") {
            alert(ValoresGinTanqueray);
        }

    } else if (IngresoBebidas == "vodka") {
        BebidasVodka = prompt(BebidasVodka);
    } else if (IngresoBebidas == "cerveza") {
        BebidasCerveza = prompt(BebidasCerveza);
    } else if (IngresoBebidas == "vino") {
        BebidasVino = prompt(BebidasVino);
    } else if (IngresoBebidas == "ron") {
        BebidasRon = prompt(BebidasRon);
    } else if (IngresoBebidas == "whisky") {
        BebidasWhisky = prompt(BebidasWhisky);
    }

   

console.log(IngresoDatosClientes);
console.log(IngresoEdad);
console.log(IngresoBebidas);
console.log(BebidasGin);
//console.log(BebidasVodka);
//console.log(BebidasCerveza);
//console.log(BebidasVino);
//console.log(BebidasRon);
//console.log(BebidasWhisky);

/* Variables necesarias
const bebidas = [
    { nombre: "Cerveza", tipo: "Fermentada", alcohol: 5 },
    { nombre: "Vino", tipo: "Fermentada", alcohol: 12 },
    { nombre: "Whisky", tipo: "Destilada", alcohol: 40 },
    { nombre: "Tequila", tipo: "Destilada", alcohol: 38 },
    { nombre: "Ron", tipo: "Destilada", alcohol: 35 }
];

const listaBebidas = document.getElementById('lista-bebidas');
const inputBusqueda = document.getElementById('search');

// Función para mostrar todas las bebidas
function mostrarBebidas(bebidas) {
    listaBebidas.innerHTML = 'Cerveza';
    bebidas.forEach(bebida => {
        const li = document.createElement('li');
        li.textContent = `${bebida.nombre} (${bebida.tipo}) - ${bebida.alcohol}%`;
        listaBebidas.appendChild(li);
    });
}

// Función para filtrar bebidas
function filtrarBebidas() {
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    const bebidasFiltradas = bebidas.filter(bebida =>
        bebida.nombre.toLowerCase().includes(textoBusqueda)
    );
    mostrarBebidas(bebidasFiltradas);
}

// Mostrar todas las bebidas al cargar la página
mostrarBebidas(bebidas);*/

// Simulador de compra para Pekitas Ecotienda

// Definición de productos y precios
/*let productos = [
    { nombre: "Vodka Absolut", precio: 45000 },
    { nombre: "Gin Tanqueray", precio: 27885 },
    { nombre: "Whisky Jack Daniels", precio: 55000 },
    { nombre: "Cerveza Goose Island", precio: 12000 },
    { nombre: "Ron Bacardi", precio: 22000 },
    { nombre: "Vino Rutini", precio: 10000 },
    { nombre: "Licor Amarula", precio: 30000 },
    { nombre: "Pisco Mistral", precio: 17000 },
];


function usuario (texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// mensaje de bienvenida y obtener el nombre del usuario
function NombreCompleto() {
    console.log("Inicio de obtenerNombreCompleto");
    alert("¡Hola! Bienvenidos a BEBIDAS GONZALEZ");
    let nombre = prompt("Ingrese su Nombre").trim();
    while (!nombre) {
        alert("Debe agregar un nombre");
        nombre = prompt("Ingrese su Nombre").trim();
    }

    let apellido = prompt("Ingrese su Apellido").trim();
    while (!apellido) {
        alert("Debe agregar un apellido");
        apellido = prompt("Ingrese su Apellido").trim();
    }

    nombre = usuario(nombre);
    apellido = usuario(apellido);

    alert(`Su nombre es ${nombre} ${apellido}`);
    console.log("Fin de obtenerNombreCompleto");
}


function seleccionarProducto() {
    console.log("Inicio de seleccionarProducto");
    let mensaje = "¿Qué producto desea?\n" +
        productos.map((producto, i) => `${i + 1}. ${producto.nombre} - $${producto.precio}`).join('\n') +
        "\n0. Finalizar compra";
    
    let compra = parseInt(prompt(mensaje), 10);
    if (Number.isInteger(compra) && compra > 0 && compra <= productos.length) {
        let productoSeleccionado = productos[compra - 1];
        alert(`Producto: ${productoSeleccionado.nombre}\nPrecio: $${productoSeleccionado.precio}\nProducto agregado correctamente!`);
    } else if (compra !== 0) {
        alert("Opción no válida, intente de nuevo.");
    }
    console.log("Producto seleccionado:", compra);
    return compra;
}

// total de la compra
function calcularTotalCompra(seleccion) {
    console.log("Inicio de calcularTotalCompra con selección:", seleccion);
    if (seleccion >= 1 && seleccion <= productos.length) {
        return productos[seleccion - 1].precio;
    }
    return 0;
}

// descuentos y cuotas
function calcularDescuentosYCuotas(totalCompra) {
    console.log("Inicio de calcularDescuentosYCuotas con totalCompra:", totalCompra);
    if (totalCompra >= 100000) return { cuotas: 6, descuento: 15 };
    if (totalCompra >= 80000) return { cuotas: 6, descuento: 10 };
    if (totalCompra >= 40000) return { cuotas: 3, descuento: 10 };
    if (totalCompra >= 30000) return { cuotas: 3, descuento: 0 };

    alert("No hay descuento ni cuotas disponibles para este monto.");
    return { cuotas: 0, descuento: 0 };
}

//  descuentos
const aplicarDescuento = (total, descuento) => total - (total * descuento / 100);

//  productos comprados y las cantidades
function mostrarResumenCompra(cantidades) {
    return productos.map((producto, i) => cantidades[i] > 0 ? `${i + 1}. ${producto.nombre}: ${cantidades[i]} unidad(es)` : '')
        .filter(linea => linea)
        .join('\n');
}

// compra
function realizarCompra() {
    console.log("Inicio de realizarCompra");
    
    obtenerNombreCompleto();
    
    alert(`En Pekitas Ecotienda tenemos diferentes descuentos para vos:\n
    - Si tu compra es igual o superior a $100000: 15% de descuento y 6 cuotas\n
    - Si tu compra es igual o superior a $80000: 10% de descuento y 6 cuotas\n
    - Si tu compra es igual o superior a $40000: 10% de descuento y 3 cuotas\n
    - Si tu compra es igual o superior a $30000: 3 cuotas sin interes\n
    - Si tu compra es menor a $30000: No tienes descuento ni cuotas disponibles`);

    let seguirComprando = true;
    let totalCompra = 0;
    let cantidades = Array(productos.length).fill(0);

    while (seguirComprando) {
        let seleccion = seleccionarProducto();
        
        if (seleccion === 0) {
            let confirmacion = prompt("¿Desea finalizar la compra? Tipee 'Si'  o 'No'");
            if (confirmacion && confirmacion.toLowerCase() === 'si') {
                seguirComprando = false;
            } else if (confirmacion && confirmacion.toLowerCase() === 'no') {
                let borrarProducto = prompt(`¿Qué producto desea borrar?\n${mostrarResumenCompra(cantidades)}\nIngrese el número del producto para borrar (Ej. 1 para Vodka Absolut):`);
                borrarProducto = parseInt(borrarProducto, 10);
                if (Number.isInteger(borrarProducto) && borrarProducto > 0 && borrarProducto <= productos.length && cantidades[borrarProducto - 1] > 0) {
                    totalCompra -= productos[borrarProducto - 1].precio;
                    cantidades[borrarProducto - 1]--;
                    alert(`Producto ${productos[borrarProducto - 1].nombre} borrado correctamente.`);
                } else {
                    alert("Opción no válida o producto no encontrado.");
                }
            } else {
                alert("Opción no válida, intente de nuevo.");
            }
        } else {
            totalCompra += calcularTotalCompra(seleccion);
            cantidades[seleccion - 1]++;
            alert(`Total acumulado de la compra: $${totalCompra}`);
        }
    }

    let { cuotas, descuento } = calcularDescuentosYCuotas(totalCompra);
    let montoFinal = aplicarDescuento(totalCompra, descuento);

    let resumenCompra = `Resumen de la compra:\n${mostrarResumenCompra(cantidades)}\n\nTotal de la compra: $${totalCompra}\nDescuento: ${descuento}%\nTotal con descuento: $${montoFinal}\nCantidad de cuotas sin interés: ${cuotas}`;

    alert(resumenCompra);
    console.log("Resumen de la compra:", resumenCompra);
    
    console.log("Fin de realizarCompra");
}

// Inicio de compra
realizarCompra();*/

const productos = [
	{ nombre: 'Lata Cerveza Quilmes x1', precio: 1100, imagen: 'preEntrega3Gonzalez/Imagenes/latacervezaquilmes.jpg' },
	{ nombre: 'Vino Toro', precio: 900, imagen: 'preEntrega3Gonzalez/Imagenes/vinotoro.jpg' },
    { nombre: 'Manaos Pomelo Blanco 3l', precio: 1100, imagen: 'preEntrega3Gonzalez/Imagenes/manaospomelo.jpeg' },
	// Agrega más productos aquí
];

const carrito = [];

document.querySelectorAll('.agregar').forEach((boton) => {
  boton.addEventListener('click', (e) => {
    const producto = productos.find((p) => p.nombre === e.target.closest('.producto').querySelector('h2').textContent);
    carrito.push(producto);
    actualizarCarrito();
  });
});

function actualizarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  listaCarrito.innerHTML = '';
  carrito.forEach(({ nombre, precio }) => {
    const elemento = document.createElement('li');
    elemento.textContent = `${nombre} - $${precio}`;
    listaCarrito.appendChild(elemento);
  });
  const total = carrito.reduce((acc, { precio }) => acc + precio, 0);
  const descuento = total > 5000 ? ' (10% de descuento)' : '';
  document.getElementById('total').textContent = `Total: $${total}${descuento}`;
}

document.getElementById('comprar').addEventListener('click', () => {
  alert('Gracias por su compra!');
  carrito.length = 0;
  actualizarCarrito();
});



