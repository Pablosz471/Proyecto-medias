const form = document.querySelector(".login form");
const usuario = document.querySelector(".login input[type='text']");
const password = document.querySelector(".login input[type='password']");

form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (usuario.value === "" || password.value === "") {
        alert("Completá todos los campos");
    }else{
        alert("Inicio de sesión exitoso");
        form.reset();
    }
});