const boton = document.getElementById("botonHola");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {

    mensaje.textContent = "HOLA MUNDO";

});