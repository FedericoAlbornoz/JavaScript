//Evento Input Nombre y Mail sección Contacto

const nombre = document.getElementById("nombre");
nombre.onchange = () => { console.log(nombre.value);}

const mail = document.getElementById("email");
mail.onchange = () => { console.log(mail.value);}


//Evento Input Textarea sección Contacto
const texto = document.getElementById("text");
texto.onchange = () => { console.log(texto.value);}


//Evento Botones sección Contacto
const boton = document.getElementById("boton-enviar");
boton.addEventListener("click", enviarFormulario);

function enviarFormulario() {
    console.log("Formulario enviado");
}

const boton2 = document.getElementById("boton-resetear");
boton2.addEventListener("click", borrarTodo);

function borrarTodo() {
    console.log("Borrar todo");
}



// Evento Submit + función para formulario sección Contacto

// const formulario = document.getElementById("form");
// formulario.addEventListener("submit", validarFormulario); 

// function validarFormulario(e) {
//     e.preventDefault();
    
//     const formulario = e.target;
//     console.log(formulario);

//     const nombre = document.getElementById("nombre").value;
//     const mail = document.getElementById("email").value;
//     const texto = document.getElementById("text").value;

//     console.log(nombre);
//     console.log(mail);
//     console.log(texto);
// }
