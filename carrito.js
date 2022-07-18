//Variables
const carrito = [];
const vaciarCarrito = document.querySelector("#vaciar")

    
//Función para renderizar productos

function renderizarProductos() {

    let galeria = document.getElementById("galeria");
    // let especiales = document.getElementById("especiales");

    productos.forEach((producto) => {

        let productoHTML = `
        <div>
            <img src=${producto.src}>    
            <p class="nombre">${producto.producto}</p>
            <p class="card__price">$${producto.precio}</p>
            <button class="btn btn-warning" id="boton-aniadir" onClick="agregarProductoAlCarrito(${producto.id})">Agregar al carrito</button>
        </div>
        `

        galeria.innerHTML += productoHTML;
    });
}

renderizarProductos();






//Función para agregar productos al carrito

function agregarProductoAlCarrito (id){

    //Compara que los elementos de mi array Productos coincidan con los id donde yo hago click
    let producto = productos.find(producto => producto.id === id);

    let productoEnCarrito = carrito.find(productoEnCarrito => productoEnCarrito.id === id);


    //Operador avanzado: Ternario (if...else)

    productoEnCarrito ? productoEnCarrito.cantidad++ : producto.cantidad = 1, carrito.push(producto), console.log(carrito);

    renderizarCarrito();
    guardarCarritoLS();
}


//Función para renderizar carrito

function renderizarCarrito(){

    let carritoHTML = document.getElementById("carrito");
    console.log(carritoHTML);

    let htmlCarrito = " ";

    carrito.forEach ((producto, id) => {

        htmlCarrito += `
        <div>
            <img src=${producto.src}>    
            <p class="nombre">${producto.producto}</p>
            <p class="card__price">$${producto.precio}</p>
            <p class="cantidad">Cantidad: ${producto.cantidad}</p>
            <button class="btn btn-primary" onClick="eliminarProductoDelCarrito(${id})">Eliminar del carrito</button>
        </div>
        `

        carritoHTML.innerHTML = htmlCarrito;
    });
}




//Función para eliminar producto del carrito

function eliminarProductoDelCarrito(id) {

    carrito[id].cantidad--;

    //Operador Lógico AND

    carrito[id].cantidad === 0 && carrito.splice(id, 1);

    renderizarCarrito();
}




//Función eliminar TODOS los productos del carrito

function eliminarTodosLosProductos() {

    //Evento Borrar de Carrito sección Productos
    const botonVaciar = document.getElementById("Vaciar-carrito");
    botonVaciar.addEventListener("click", eliminarTodosLosProductos);
        
    carrito = [];
    console.log(carrito);
}
















