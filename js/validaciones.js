
const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const mensaje = document.getElementById("mensaje");
// Mensajes de error
const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorTelefono = document.getElementById("errorTelefono");
const errorDireccion = document.getElementById("errorDireccion");
const errorMensaje = document.getElementById("errorMensaje");
// variable mensaje de exito
const mensajeExito = document.getElementById("mensajeExito");
 
 // funciones de validacion
function limpiarErrores() {
    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorTelefono.textContent = "";
    errorDireccion.textContent = "";
    errorMensaje.textContent = "";
}
function limpiarEstilos() {
    nombre.classList.remove("error", "correcto");
    email.classList.remove("error", "correcto");
    telefono.classList.remove("error", "correcto");
    direccion.classList.remove("error", "correcto");
    mensaje.classList.remove("error", "correcto");
}
function mostrarError(campo, elementoError, mensaje){
    elementoError.textContent = mensaje;

    campo.classList.remove("correcto");
    campo.classList.add("error");
}
function mostrarCorrecto(campo){
    campo.classList.remove("error");
    campo.classList.add("correcto");
}
function validarNombre() {
    if (nombre.value.trim() == ""){
        mostrarError( nombre, errorNombre, "Por favor, ingrese su nombre" );
        return false;
    }
    mostrarCorrecto(nombre);
    return true;
}
function validarEmail() {
    if (email.value.trim() == ""){
        mostrarError(email, errorEmail, "Por favor, ingrese su email");
        return false;
    }
    if (!email.value.includes("@")){
        errorEmail.textContent = "Por favor, ingrese un email valido";
        return false;
    }
    mostrarCorrecto(email);
    return true;
}
function validarTelefono() {
    if (telefono.value.trim() == ""){
        mostrarError(telefono, errorTelefono, "Por favor, ingrese su telefono");
        return false;
    }
    mostrarCorrecto(telefono);
    return true;
}
function validarDireccion() {
    if (direccion.value.trim() == ""){
        mostrarError(direccion, errorDireccion, "Por favor, ingrese su direccion");
        return false;
    }
    mostrarCorrecto(direccion);
    return true;
}
function validarMensaje() {
    if (mensaje.value.trim() == ""){
        mostrarError(mensaje, errorMensaje, "Por favor, ingrese su mensaje");
        return false;
    }
    mostrarCorrecto(mensaje);
    return true;
} 

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    limpiarErrores();
    
    if (!validarNombre()){
        return;
    }
    if (!validarEmail()){
        return;
    }
    if (!validarTelefono()){
        return;
    }
    if (!validarDireccion()){
        return;
    }
    if (!validarMensaje()){
        return;
    }
    mensajeExito.classList.remove("d-none");

    formulario.reset();
    limpiarErrores();
    limpiarEstilos();
    setTimeout(function() {
        mensajeExito.classList.add("d-none");
    }, 3000);
})