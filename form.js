'use strict'
let form = document.querySelector('#form');
form.addEventListener('submit', agregar);


function agregar(e){
  e.preventDefault();
  
  // se obtienen todos los datos del form
  let formData = new FormData(form);
  
  //obtengo los datos ingresados en el form segun name de cada input
  let email = formData.get('email');
  let nombre = formData.get('nombre');
  let mensaje = formData.get('mensaje');
  console.log(email, nombre, mensaje)
  document.querySelector("#ingreso").innerHTML
  form.reset()
}