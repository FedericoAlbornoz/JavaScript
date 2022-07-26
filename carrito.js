//Fetch - Ruta relativa

const lista = document.getElementById("listado");
let stock;

fetch("./stock.json")
    .then ((resp) => resp.json())
    .then ((stock) => {

        stock.forEach ((unStock) => {
            const li = document.createElement ("li")
            li.innerHTML = `
            <div>
                <img src=${unStock.src}>    
                <p class="nombre">${unStock.producto}</p>
                <p class="card__price">$${unStock.precio}</p>
                <button class="btn btn-warning boton-aniadir" id="boton-aniadir" onClick="agregarProductoAlCarrito(${unStock.id})">Agregar al carrito</button>
            </div>
            `

            lista.append(li)
        });
    })

    .catch ((error) => {
        console.log(error);
    });



//Variables
const carrito = [];
const vaciarCarrito = document.querySelector("#vaciar")

    
//Función para renderizar productos

function renderizarProductos() {

    let galeria = document.getElementById("galeria");
    // let especiales = document.getElementById("especiales");


    stock.forEach((unStock) => {

        let productoHTML = `
        <div>
            <img src=${unStock.src}>    
            <p class="nombre">${unStock.producto}</p>
            <p class="card__price">$${unStock.precio}</p>
            <button class="btn btn-warning boton-aniadir" id="boton-aniadir" onClick="agregarProductoAlCarrito(${unStock.id})">Agregar al carrito</button>
        </div>
        `

        galeria.innerHTML += productoHTML;
        
    });


}

renderizarProductos();






//Función para agregar productos al carrito

function agregarProductoAlCarrito (id){

    //Compara que los elementos de mi array Productos coincidan con los id donde yo hago click
    let unStock = stock.find(unStock => unStock.id === id);

    let productoEnCarrito = carrito.find(productoEnCarrito => productoEnCarrito.id === id);

    //Librería
    Toastify({
        text: `Tu producto "${unStock.producto}" se agregó al carrito.`,
        icon: "success",
        timer: 2500,
        gravity: "bottom",
        position: "center",
        style: { 
            background: "#3f3f3f",
            color: "#fdd086"
        },
        
    }).showToast();

    //Operador Ternario
    productoEnCarrito ? productoEnCarrito.cantidad++ :  unStock.cantidad = 1, carrito.push(unStock)


    //Acá LS para carrito. Chequear devolución "Segunda Entrega Proyecto Final". Ojo con el storage.js
    // localStorage.setItem("Carrito de Compras", JSON.stringify(carrito))

    console.log(carrito);


    renderizarCarrito();
    guardarCarritoLS();
}


//Función para renderizar carrito

function renderizarCarrito(){

    let carritoHTML = document.getElementById("carrito");
    console.log(carritoHTML);

    let htmlCarrito = " ";

    carrito.forEach ((unStock, id) => {

        htmlCarrito += `
        <div>
            <img src=${unStock.src}>    
            <p class="nombre">${unStock.producto}</p>
            <p class="card__price">$${unStock.precio}</p>
            <p class="cantidad">Cantidad: ${unStock.cantidad}</p>
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

  //Operador Lógico AND
    carrito[id].cantidad === 0 && carrito.splice(id, 1); //para que el número no se vaya menor a 0
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






















