

//paso uno
var input_nombre = document.getElementById("nombre_form");//RECORDAR USAR EL NAME DE ID
var input_email = document.getElementById("email_form");
var input_plataforma = document.getElementById("plataforma_form");
var input_submit = document.getElementById("boton_enviar");

//se refleja en la consola, goty

console.log (input_nombre);
console.log (input_email);
console.log (input_plataforma);
console.log (input_submit);

//paso dos, cuando se envie el form

input_submit.addEventListener("click", enviarFormulario );

function enviarFormulario(event){

event.preventDefault();

console.log("esto se esta ejecutando");

var valor_nombre = input_nombre.value;
var valor_email = input_email.value;
var valor_plataforma = input_plataforma.value;

console.log(valor_nombre);
console.log(valor_email);
console.log(valor_plataforma);

var placeholder_nombre = document.getElementById("nombre-placeholder");
var placeholder_email = document.getElementById("email-placeholder");

placeholder_nombre.innerHTML = valor_nombre;
placeholder_email.innerHTML = valor_email;

//modo sigilo feedback
elemento_feedback = document.getElementById("feedback");
elemento_feedback.classList.remove("oculto");
}



//NO BORRAR, CARRUSEL
 document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );
