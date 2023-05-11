const formulario = document.querySelector(".sign-in-form");
const uNombre = document.querySelector("#nombre-usuario");
const uClave = document.querySelector("#clave-usuario");

// Login
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  if (uNombre.value && uClave.value) {
    if (uNombre.value === "admin" && uClave.value === "admin") {
      console.log("El nombre es:", uNombre.value);
      console.log("La clave es:", uClave.value);
      window.location.href = "../html/admin/index.html";
    } else if(uNombre.value === "peo" && uClave.value === "peo"){
        console.log("El nombre es:", uNombre.value);
        console.log("La clave es:", uClave.value);
        window.location.href = "../html/client/index.html";
    } else {
      alert("Los campos no son correctos");
    }
    
  } else{
    alert("Por favor rellena todos los campos");
  }

});

// Register
const formularioRegister = document.querySelector(".sign-up-form");
const uNombreR = document.querySelector("#nombre-usuario-register");
const uEmailR = document.querySelector("#email-usuario-register");
const uTelefonoR = document.querySelector("#telefono-usuario-register");
const uRepiteclaveR = document.querySelector("#repiteclave-usuario-register");
const uClaveR = document.querySelector("#clave-usuario-register");


formularioRegister.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if (uNombreR.value && uEmailR.value && uTelefonoR.value && uClaveR.value && uRepiteclaveR.value) {
    if (uTelefonoR.value.length < 9) {
      alert("Número de telefono no válido");
    } else if(uClaveR.value.length < 8 || uRepiteclaveR.value.length < 8){
      alert("La contrasña debe de tener al menos 8 caracteres.");
    } else if(uClaveR.value !== uRepiteclaveR.value){
      alert("Las contraseñas no coinciden");
    }
     else{
      alert("Te has registrado correctamente, ya puedes iniciar sesión!");
      window.location.href = "../html/login.html";
    }
    
  } else{
    alert("Por favor rellena todos los campos");
  }

});