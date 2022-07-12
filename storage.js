// Storage y JSON

const guardarLS = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

//Guardado de todo el array en una clave
guardarLS("Carrito", JSON.stringify(productos));

//Guardado de los objetos de un array individualmente
for (const producto of productos) {
    guardarLS(producto.producto, JSON.stringify(producto));
}

//Obtener array/productos almacenados

const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productosAlmacenados = [];

for (const almacenado of almacenados)
    productosAlmacenados.push(new Producto(almacenado));


//Recuperar datos previos

let recuperarCarrito = [];
let carritoEnLS = JSON.stringify(localStorage.getItem("recuperarCarrito"))

if (carritoEnLS) {
    recuperarCarrito = carritoEnLS
}

renderizarCarrito(recuperarCarrito);