window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
};
function enviarMensaje(event) {
  event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

  // Obtener los valores de los campos de entrada
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value;
  let asunto = document.getElementById("asunto").value;
  let mensaje = document.getElementById("mensaje").value;

  // Codificar los valores para incluirlos en la URL de Gmail
  let subject = encodeURIComponent(asunto);
  let body = encodeURIComponent("Nombre: " + nombre + "\nCorreo: " + correo + "\nTeléfono: " + telefono + "\nMensaje: " + mensaje);
  
  // Destinatario del mensaje
  let destinatario = "fervolpato1991@gmail.com";

  // Redirigir al usuario a Gmail con los campos prellenados
  window.location.href = "mailto:" + destinatario + "?subject=" + subject + "&body=" + body;
}