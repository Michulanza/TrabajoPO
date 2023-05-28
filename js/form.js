const nombre = document.getElementById("myname");
const apellidos = document.getElementById("surname");
const correo = document.getElementById("email");
const celular= document.getElementById("mobile");
const contrasenia = document.getElementById("password");
const contrasenia2 = document.getElementById("repitePassword");
const terminosYcondiciones = document.getElementById("termsAndConditions");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion == true) {
      enviarFormulario();
    }  
});

    function validacionForm() {
        form.lastElementChild.innerHTML = "";
        let condicion = true
    listInputs.forEach(element=> {
        element.lastElementChild.innerHTML = "";
    } );

    if(nombre.value.length < 1 || nombre.value.trim() == "") {
        let elemento = document.querySelector(".myname");
        elemento.lastElementChild.innerHTML = "Nombre no válido";
        condicion = false;
    }

    if(apellidos.value.length <1 ||apellidos.value.trim() == "" ) {
        let elemento = document.querySelector(".surname");
        elemento.lastElementChild.innerHTML = "Apellido no válido";
        condicion = false;
    }
    if(apellidos.value.length <1 ||apellidos.value.trim() == "" ) {
        let elemento = document.querySelector(".email");
        elemento.lastElementChild.innerHTML = "Correo no válido";
        condicion = false;
    }
    if(apellidos.value.length <1 ||apellidos.value.trim() == "" ) {
        let elemento = document.querySelector(".mobile");
        elemento.lastElementChild.innerHTML = "Número no válido";
        condicion = false;
    }
    if(apellidos.value.length <1 ||apellidos.value.trim() == "" ) {
        let elemento = document.querySelector(".password");
        elemento.lastElementChild.innerHTML = "Contraseña no válida";
        condicion = false;
    }
    if(apellidos.value.length <1 ||apellidos.value.trim() == "" ) {
        let elemento = document.querySelector(".repeatPassword");
        elemento.lastElementChild.innerHTML = "No coinciden las contraseñas";
        condicion = false;

    }
    if(apellidos.value.length <1 ||apellidos.value.trim() == "" ) {
        let elemento = document.querySelector(".termsAndConditions");
        elemento.lastElementChild.innerHTML = "Este campo es obligatorio para continuar";
        condicion = false;
    } else {
        let elemento = document.querySelector(".termsAndConditions");
        elemento.lastElementChild.innerHTML = "Este campo es obligatorio para continuar";
        
        }
        return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
    form.reset();
    form.lastElementChild.innerHTML = "enviado con éxito";
}