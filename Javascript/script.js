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

let idiomaActual = "es"
function cambiarIdioma() {

  if (idiomaActual === "es") {

    titulo.textContent = "Hi!, I am";
    parrafo.textContent = "Full Stack Web Developer";
    btn.textContent = "Download my CV";
    Inicio.textContent = "Home";
    Sobremí.textContent = "About me";
    Habilidades.textContent = "Skills";
    Proyectos.textContent = "Projects";
    Contáctame.textContent = "Contact me";
    Idioma.textContent = "Language";
    Web.textContent = "Web developer";
    abouttitle.textContent = "About me";
    abouthead.textContent = "Hi!, I'll tell you a little about myself so you can get to know me!";
    abouttext.textContent = `I was born in Dolores, Buenos Aires, Argentina
    in September 1991. I am a Person who likes
    the computer, work in groups and always be helping
    in whatever is needed, I consider myself someone responsible, dedicated, who loves to participate in teamwork, and
    make decisions if necessary and at the same time I have assertive communication listening, also different points of view.`;
    skillstitle.textContent = "Skills";
    html.textContent = "It is a standard that defines a basic structure and a code for the content of a web page, such as text, images, videos, games, among others.";
    css.textContent = "It is the style language used to describe the presentation of HTML or XML (en-US) documents.";
    Javascript.textContent = "A programming language that is defined as object-oriented, prototype-based, imperative, weakly-typed, and dynamic.";
    React.textContent = "It is an open source Javascript library designed to create user interfaces to facilitate the development of single page applications.";
    Redux.textContent = "It is an open source JavaScript library for managing application state.";
    Express.textContent = "It is an open source web application framework for Node.js. It is used to develop web applications and APIs.";
    PostreSQL.textContent = "It is an open source, object-oriented relational database management system.";
    Tailwind.textContent = "It is an open source CSS framework for web page design.";
    Trello.textContent = "It is a project management software with web interface and client for iOS and android to organize projects.";
    Projectstitle.textContent = "My projects";
    LobbyLair.textContent = "Social network for gamers where players can meet in real time, socialize and join other games.";
    Dogs.textContent = "Henry's individual project on different breeds of dogs, their weights, heights and life expectancies.";
    Rick.textContent = "App where all the characters of the series are shown, as well as their different characteristics.";
    Contactme.textContent = "Contact Me";
    nombre.placeholder = "Full Name";
    correo.placeholder = "Email";
    telefono.placeholder = "Phone number";
    asunto.placeholder = "Subject";
    mensaje.placeholder = "Your Message";
    enviar.value = "Send Message";

    idiomaActual = "en";
  } else {

    titulo.textContent = "Hola!, soy";
    parrafo.textContent = "Desarrollador Web Full Stack";
    btn.textContent = "Descarga mi CV";
    Inicio.textContent = "Inicio";
    Sobremí.textContent = "Sobre mí";
    Habilidades.textContent = "Habilidades";
    Proyectos.textContent = "Proyectos";
    Contáctame.textContent = "Contáctame";
    Idioma.textContent = "Idioma";
    Web.textContent = "Desarrollador Web";
    abouttitle.textContent = "Sobre mí";
    abouthead.textContent = "Hola!, te cuento un poco de mi para que me conozcas!";
    abouttext.textContent = `Nací en Dolores, Buenos Aires, Argentina
    en Septiembre de 1991. Soy una Persona que le gusta
    la computación, trabajar en grupos y estar siempre ayudando
    en lo que se necesite, me considero alguien responsable, dedicado, que le encantar participar en trabajos de equipo, y
    tomar de decisiones de ser necesario y a su vez dispongo de comunicación asertiva escuchando, también diferentes puntos de vista.`;
    skillstitle.textContent = "Habilidades";
    html.textContent = "Es un estándar que sirve define una estructura básica y un código para el contenido de una página web, como texto, imágenes, videos, juegos, entre otros.";
    css.textContent = "Es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (en-US).";
    Javascript.textContent = "Un lenguaje de programación que se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico.";
    React.textContent = "Es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.";
    Redux.textContent = "Es una librería JavaScript de código abierto para el manejo del estado de las aplicaciones.";
    Express.textContent = "Es un entorno de trabajo de aplicaciones web para Node.js, de código abierto. Se utiliza para desarrollar aplicaciones web y APIs.";
    PostreSQL.textContent = "Es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto.";
    Tailwind.textContent = "Es un framework de CSS de código abierto​ para el diseño de páginas web.";
    Trello.textContent = "Es un software de administración de proyectos con interfaz web y con cliente para iOS y android para organizar proyectos.";
    Projectstitle.textContent = "Mis proyectos";
    LobbyLair.textContent = "Red social para gamers donde los jugadores pueden encontrarse en tiempo real, socializar y unirse a otras partidas.";
    Dogs.textContent = "Proyecto individual de henry sobre distintas razas de perros, sus pesos, alturas y esperanzas de vida.";
    Rick.textContent = "App donde se muestran todos los personajes de la serie, asi como tambien sus distintas caracteristicas.";
    Contactme.textContent = "Contáctame";
    nombre.placeholder = "Nombre completo";
    correo.placeholder = "Correo electrónico";
    telefono.placeholder = "Número de teléfono móvil";
    asunto.placeholder = "Asunto del email";
    mensaje.placeholder = "Tu mensaje";
    enviar.value = "Enviar Mensaje";

    idiomaActual = "es";
  }
}