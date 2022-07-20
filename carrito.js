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
            <button class="btn btn-warning boton-aniadir" id="boton-aniadir" onClick="agregarProductoAlCarrito(${producto.id})">Agregar al carrito</button>
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

    //Librería
    Toastify({
        text: `Tu producto "${producto.producto}" se agregó al carrito.`,
        icon: "success",
        timer: 2500,
        gravity: "bottom",
        position: "center",
        backgroundColor: "linear-gradient(to right, #772323, #fdd086)"
        
    }).showToast();

    if (productoEnCarrito) {

        productoEnCarrito.cantidad++;

        console.log (carrito);

    }else {

        producto.cantidad = 1;
        carrito.push(producto);

        console.log(carrito);
    }

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
            <button class="btn btn-primary" id="eliminar-producto" onClick="eliminarProductoDelCarrito(${id})">Eliminar del carrito</button>
        </div>
        `

        carritoHTML.innerHTML = htmlCarrito;
    });
}




//Función para eliminar producto del carrito

function eliminarProductoDelCarrito(id) {

    carrito[id].cantidad--;
    
    //Librería

    swal({
        title: "¿Está seguro que quiere eliminar el producto de su carrito?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        timer: 1500

    }).then( result => {
        if (result) {
            swal({
                title: "¡Okay!",
                text: "Tu producto se eliminó del carrito.",
                icon: "success",
                confirm: "Ok",
            })
        }
    } )

    if (carrito[id].cantidad === 0) {

        carrito.splice(id, 1); //para que el número no se vaya menor a 0
    }


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