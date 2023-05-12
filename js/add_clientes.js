const form = document.getElementById("nuevoCliente");
const tableBody = document.querySelector("table tbody");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Recoger los datos del formulario
  const id = document.getElementById("idCliente").value;
  const nombre = document.getElementById("nombreCliente").value;
  const apellidos = document.getElementById("apellidosCliente").value;
  const telefono = document.getElementById("telefonoCliente").value;
  const correo = document.getElementById("correoCliente").value;
  const descripcion = document.getElementById("descripcionCliente").value;

  // Añadir celdas a la fila con los datos del formulario
  if (id && nombre && apellidos && telefono && correo) {
    // Crear una nueva fila en la tabla
    const row = tableBody.insertRow();
    const idCell = row.insertCell();
    idCell.textContent = id;

    const nombreCell = row.insertCell();
    nombreCell.textContent = nombre;

    const apellidosCell = row.insertCell();
    apellidosCell.textContent = apellidos;

    const imagenCell = row.insertCell();
    const imagen = document.createElement("img");
    imagen.className = "avatarClienteImg";
    imagen.src = "../../img/user.webp";
    imagenCell.appendChild(imagen);

    const telefonoCell = row.insertCell();
    telefonoCell.textContent = telefono;

    const correoCell = row.insertCell();
    correoCell.textContent = correo;

    const descripcionCell = row.insertCell();
    descripcionCell.textContent = descripcion;

    descripcionCell.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  } else {
    const alertMensaje = document.querySelector(".alert");
    alertMensaje.classList.remove("d-none"); // muestra el mensaje

    setTimeout(() => {
      alertMensaje.classList.add("d-none"); // oculta el mensaje después de 5 segundos
    }, 5000);
  }
});
