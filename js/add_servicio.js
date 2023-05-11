const form = document.getElementById("nuevoServicio");
const tableBody = document.querySelector("table tbody");

let lastId = parseInt(tableBody.lastElementChild.firstElementChild.textContent);

const idInput = document.getElementById("id");
idInput.placeholder = `${lastId + 1}`;

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Recoger los datos del formulario
  const id = lastId + 1;
  const nombre = document.getElementById("nombre").value;
  const minimo = document.getElementById("minimo").value;
  const descripcion = document.getElementById("descripcion").value;

  // Añadir celdas a la fila con los datos del formulario
  if (nombre && minimo && descripcion) {
    // Crear una nueva fila en la tabla
    const row = tableBody.insertRow();
    const idCell = row.insertCell();
    idCell.textContent = id;

    const nombreCell = row.insertCell();
    nombreCell.textContent = nombre;

    const minimoCell = row.insertCell();
    minimoCell.textContent = minimo;

    const descripcionCell = row.insertCell();
    descripcionCell.textContent = descripcion;

    descripcionCell.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    // Actualizar el último ID
    lastId = id;
    idInput.value = "";
    idInput.placeholder = `${lastId + 1}`;

  } else {
    alert("Rellena todos los campos.");
  }
});
