// Storage y JSON

//Guardar y Obtener Productos en Carrito

function guardarCarritoLS() {
    const guardarCarritoEnLS = JSON.stringify(carrito);
    localStorage.setItem("Carrito", guardarCarritoEnLS);

    const listaSeleccionados = JSON.parse(localStorage.getItem("Carrito"));

    console.log(listaSeleccionados);
    
}

