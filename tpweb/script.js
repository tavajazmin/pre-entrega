//paso uno
var input_nombre = document.getElementById("nombre-form");//RECORDAR USAR EL NAME DE ID
var input_email = document.getElementById("email-form");
var input_submit = document.getElementById("boton-enviar")

console.log (input_nombre);
console.log(input_submit);

//paso dos
input_submit.addEventListener("click",enviarFormulario);

function enviarFormulario(event) {
    
event.preventDefault();


//paso tres

var valor_email = input_email.value;
var valor_nombre = input_nombre.value;
console.log(valor_nombre);
console.log(valor_email);
}


