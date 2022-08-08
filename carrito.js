//Variables
const contadorCarrito = document.getElementById("contadorCarrito");
const contenedorCarrito = document.getElementById("carrito");
const botonVaciar = document.getElementById('vaciar-carrito');
const precioTotal = document.getElementById('precioTotal');
const carrito = [];
const productos = [];


//Funciones

//Renderizar/Mostrar productos usando DOM

function renderizarProductos() {
    let galeria = document.getElementById("galeria");
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
        
        //Boton agregado con DOM, evento click para añadir producto al carrito
        const boton = document.getElementById(`boton-aniadir`);
    
        boton.addEventListener('click', () => {
        agregarProductoAlCarrito(producto.id)
        })
    });
}

renderizarProductos();




//Agregar productos al carrito

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
        style: { 
            background: "#3f3f3f",
            color: "#fdd086"
        },
        
    }).showToast();

    //Operador Ternario
    productoEnCarrito ? productoEnCarrito.cantidad++ :  producto.cantidad = 1, carrito.push(producto)

    console.log(carrito);

    renderizarCarrito()
    guardarCarritoStorage()
}



//Función para renderizar/mostrar/actualizar el carrito

function renderizarCarrito(){

    contenedorCarrito.innerHTML = " ";

    carrito.forEach ((producto, id) => {
        const div = document.createElement("div")
        div.className = ("productoEnCarrito")

        div.innerHTML += `
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col"><img src=${producto.src} class="imagenEnCarrito"></th>                       
                    <th scope="col" class="nombre">${producto.producto}</th>
                    <th scope="col" class="card__price">$${producto.precio}</th>
                    <th scope="col" class="cantidad" id="cantidad">Cantidad: ${producto.cantidad}</th>
                </tr>
            </thead>  
        </table>
            <button class="btn btn-primary" id="eliminar-producto" onClick="eliminarProductoDelCarrito(${producto.id})">Eliminar del carrito</button>
        `

        contenedorCarrito.appendChild(div);
    });

    //Precio total en carrito
    precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0);

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

//Botón vaciar carrito

botonVaciar.addEventListener("click", () => {
    carrito.length = 0
    renderizarCarrito();
})






//Storage del carrito

const cantidad = document.getElementById('cantidad');
const precioTotalFinal = document.getElementById('precioTotal');

function guardarCarritoStorage() {
    const guardarCarritoEnLS = JSON.stringify(carrito);
    localStorage.setItem("carrito", guardarCarritoEnLS);
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        renderizarCarrito();
    }
})



//Fetch

const lista = document.querySelector("#listado")
fetch("./stock.json")
    .then( (response) => response.json() )
    .then( (resultado) => {
        resultado.forEach ((producto) => {
            productos.push(producto);
        })

        renderizarProductos()
})











