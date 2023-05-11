const form = document.getElementById("nuevoTrabajador");
const tableBody = document.querySelector("table tbody");


form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Recoger los datos del formulario
  const id = document.getElementById("idTrabajador").value;
  const nombre = document.getElementById("nombreTrabajador").value;
  const apellidos = document.getElementById("apellidosTrabajador").value;
  const telefono = document.getElementById("telefonoTrabajador").value;
  const correo = document.getElementById("correoTrabajador").value;
  const departamento = document.getElementById("departamentoTrabajador").value;
  const puesto = document.getElementById("puestoTrabajador").value;
  const estado = document.getElementById("estadoTrabajador").value;

  // Añadir celdas a la fila con los datos del formulario
  if (id && nombre && apellidos && telefono && correo && departamento && puesto && estado) {
    // Crear una nueva fila en la tabla
    const row = tableBody.insertRow();
    const idCell = row.insertCell();
    idCell.textContent = id;

    const nombreCell = row.insertCell();
    nombreCell.textContent = nombre;

    const apellidosCell = row.insertCell();
    apellidosCell.textContent = apellidos;

    const telefonoCell = row.insertCell();
    telefonoCell.textContent = telefono;

    const correoCell = row.insertCell();
    correoCell.textContent = correo;

    const departamentoCell = row.insertCell();
    departamentoCell.textContent = departamento;
    
    const puestoCell = row.insertCell();
    puestoCell.textContent = puesto;

    const estadoCell = row.insertCell();
    estadoCell.textContent = estado;

    estadoCell.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  } else {
    alert("Rellena todos los campos.");
  }
});
