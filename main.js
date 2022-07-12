
// // Primer Entrega Proyecto Final

// // Variables
// let precio = 0;
// let cantidadProductos = 0;
// let inicio = false;
// const carritoDeCompras = [];

// //Arrow Function para multiplicar valor de producto por cantidad seleccionada //Método reduce para sumar todos los valores de los productos seleccionados

// // const compra = (carritoDeCompras) => carritoDeCompras.reduce ( ( acc, producto ) => acc + producto.precio * producto.cantidad, 0 );



// // let welcome = alert("¡Bienvenidx a Miss Brownie! ¿Qué desea comprar? Chequeá nuestra selección de productos:\n - Brownies y Alfajores \n - Cookies \n - Tartas y Lingotes");


// //Bucle do.. while para selección de productos + cantidad deseada + mensajes para usuario

// // do {
// //     let elegirProducto = prompt("Ingrese el número del producto que desea comprar:\n 1. Brownie con Dulce de Leche y Merengue x12u $1100.\n 2. Brownie de Chocolate con Oreo y Dulce de Leche x12u $1200.\n 3. Brownie de Chocolate Blanco con Oreo x12u $1100.\n 4. Alfajores de Maicena x12u $650.\n 5. Alfajor con Ganache y Nueces x10u $800.\n 6. Alfajor Marroc x10u $800.\n 7. Cookies Americanas con Chips $740.\n 8. Cookies Rellenas de Nutella $980.\n 9. Red Velvet Cookies $850.\n 10. Lingote de Chocolate y Frambuesa $2900.\n 11. Lingote de Limón $2900.\n 12. Crumble de Manzana $2500.\n 13. Pastafrola $2000.\n 14. Lemon Pie $2300.\n 15. Red Velvet $3300.");

// //     let cantidadProductos = prompt("¿Cuántos querés comprar? Recordá que algunos productos se venden por docena. Leé atentamente los ítems.");

// //  //Busca el producto en el array
// //     const producto = productos.find (producto => producto.id == elegirProducto);
// //  //Agrega cantidad seleccionada
// //     producto.cantidad = cantidadProductos;
// // //Pushea al carrito
// //     carritoDeCompras.push(producto);

// //     inicio = confirm("¿Querés seguir comprando algún producto?")

// // } while (inicio);

// //Se calcula la multiplicación de la cantidad de productos con el precio de los productos en el carrito
// // const total = compra(carritoDeCompras)

// // alert (`El total de tu compra es $${total}. ¡Esperamos verte pronto de nuevo por aquí!`)
    

// // console.log(carritoDeCompras);



// //Método filter para filtrar elementos


// const resultado = productos.filter ( elementos => elementos.precio < 1000 );
// const resultado2 = productos.filter ( elementos => elementos.precio > 1000 );
// const resultado3 = productos.filter ( elementos => elementos.cantidad > 10 );

// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);



// //Método map para suma de envío --> recorre array, modifica valores y devuelve nuevo array

// const precioConEnvio = productos.map ((elementos) => {
//     return {
//         producto: elementos.producto,
//         precio: elementos.precio + 150
//     }
// }) 

// console.log (precioConEnvio)



// DOM - Agregado de productos en sección Productos usando DOM

// const mostrarProductos = () => {

//     const contenedor = document.getElementById("galeria");

//     productos.forEach ( producto => {
//         const div = document.createElement("div");
//         div.innerHTML = `<div>
//                             <img src=${producto.src}>    
//                             <p class="nombre">${producto.producto}</p>
//                             <p class="card__price">$${producto.precio}</p>
//                             <a href="#" class="boton" data-id=${producto.id}>Agregar al carrito</a>
//                         </div>
//                         `
//         contenedor.appendChild(div);
//     } );
// };

// mostrarProductos();



// DOM - Agregado de productos en sección Ediciones Especiales usando DOM

// const mostrarProductosEspeciales = () => {

//     const contenedor2 = document.getElementById("especiales");

//     productosEspeciales.forEach ( productoEspecial => {
//         const cards = document.createElement("div");
//         cards.innerHTML = `<div class="especiales__galeria" id="especiales__galeria">
//                             <div class="card">
//                                 <div class="card__image-container">
//                                     <img src=${productoEspecial.src}>
//                                 </div>
//                                 <div class="card__content">
//                                     <p class="card__title">
//                                         ${productoEspecial.producto}
//                                     </p>
//                                     <div class="card__info">
//                                         <p class="card__text">${productoEspecial.info}</p>
//                                         <p class="card__price">$${productoEspecial.precio}</p>
//                                     </div>
//                                     <a href="#" class="boton" data-id=${productoEspecial.id}>Agregar al carrito</a>
//                                 </div>
//                             </div>
//                         </div>
//                         `
//         contenedor2.appendChild(cards);
//     } );
// };

// mostrarProductosEspeciales();

















