const form = document.getElementById("form");
const nombreContacto = document.getElementById("nombre");
const mailContacto = document.getElementById("email");
const textoContacto = document.getElementById("text");

form.addEventListener("submit", validarFormulario); 

function validarFormulario(e) {
    e.preventDefault();
    
    const formulario = e.target;
    console.log(formulario);

    // console.log(nombreContacto.value);
    // console.log(mailContacto.value);
    // console.log(textoContacto.value);

    guardarFormLS();
}


// //Creación de objeto para storage

const datosContacto = {
    nombre: nombreContacto.value,
    mail: mailContacto.value,
    texto: textoContacto.value

}

console.log(datosContacto);

//Storage form

const guardarFormLS = (datosContacto) => {
   localStorage.setItem("Formulario", JSON.stringify(datosContacto));
};

const obtenerFormLS = () => {
    const formStorage = JSON.parse(localStorage.getItem("Formulario"));

};



