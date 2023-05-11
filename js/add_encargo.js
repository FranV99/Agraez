// Obtener todas las tablas
const tablasEncargos = document.querySelectorAll(
  'table[id^="tabla-encargos-"]'
);

// Inicializar el último id a cero
let ultimoId = 4;

// Recorrer todas las tablas
tablasEncargos.forEach((tablaEncargos) => {
  // Recorrer todas las filas de la tabla
  const filas = tablaEncargos.querySelectorAll("tbody tr");
  filas.forEach((fila) => {
    // Obtener el valor de la celda de id
    const id = Number(fila.querySelector("td:first-child").textContent);
    // Actualizar el último id si el id de la fila actual es mayor que el último id
    if (id > ultimoId) {
      ultimoId = id;
    }
  });
});

// Incrementar el último id para obtener el siguiente id disponible
ultimoId++;

// Usar el valor de ultimoId en la creación del nuevo encargo

const form = document.getElementById("nuevoEncargo");
const tableBody = document.getElementById("tbody-encargos-pendientes");

const idInput = document.getElementById("idEncargo");
idInput.placeholder = `${ultimoId}`;

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Recoger los datos del formulario
  const id = ultimoId;
  const idCliente = document.getElementById("idClienteEncargo").value;
  const nombre = document.getElementById("nombreClienteEncargo").value;
  const apellidos = document.getElementById("apellidosClienteEncargo").value;
  const fechaInicio = document.getElementById("fechaInicioEncargo").value;

  const fechaI = new Date(fechaInicio);
  const diaI = fechaI.getDate();
  const mesI = fechaI.getMonth() + 1;
  const anioI = fechaI.getFullYear();
  const fechaFormateadaI = `${diaI}-${mesI}-${anioI}`;

  const fechaFin = document.getElementById("fechaFinEncargo").value;

  const fechaF = new Date(fechaFin);
  const diaF = fechaF.getDate();
  const mesF = fechaF.getMonth() + 1;
  const anioF = fechaF.getFullYear();
  const fechaFormateadaF = `${diaF}-${mesF}-${anioF}`;

  const estado = document.getElementById("estadoEncargo").value;

  const serviciosCheckbox = document.querySelectorAll(
    "input[type=checkbox][name=servicios]:checked"
  );
  const trabajadoresCheckbox = document.querySelectorAll(
    "input[type=checkbox][name=trabajadores]:checked"
  );

  // Añadir celdas a la fila con los datos del formulario
  if (idCliente && nombre && apellidos && fechaInicio) {
    // Crear una nueva fila en la tabla
    const row = tableBody.insertRow();
    const idCell = row.insertCell();
    idCell.textContent = id;

    const idClienteCell = row.insertCell();
    idClienteCell.textContent = idCliente;

    const nombreCell = row.insertCell();
    nombreCell.textContent = nombre;

    const apellidosCell = row.insertCell();
    apellidosCell.textContent = apellidos;

    const serviciosCell = row.insertCell();
    const serviciosSeleccionados = Array.from(serviciosCheckbox)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    const serviciosList = document.createElement("ul");
    serviciosSeleccionados.forEach((servicio) => {
      const servicioItem = document.createElement("li");
      servicioItem.textContent = servicio;
      serviciosList.appendChild(servicioItem);
    });
    serviciosCell.appendChild(serviciosList);

    const idTrabajadoresCell = row.insertCell();
    const trabajadoresSeleccionados = Array.from(trabajadoresCheckbox)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    const trabajadoresList = document.createElement("ul");
    trabajadoresSeleccionados.forEach((trabajador) => {
      const trabajadorItem = document.createElement("li");
      trabajadorItem.textContent = trabajador;
      trabajadoresList.appendChild(trabajadorItem);
    });
    idTrabajadoresCell.appendChild(trabajadoresList);

    const fechaInicioCell = row.insertCell();
    fechaInicioCell.textContent = fechaFormateadaI;

    const fechaFinCell = row.insertCell();
    if (fechaFinCell.textContent !== "") {
      fechaFinCell.textContent = fechaFormateadaF;
    } else {
      fechaFinCell.textContent = "";
    }

    const estadoCell = row.insertCell();
    estadoCell.textContent = "Pendiente";

    const accionesCell = row.insertCell();
    const aceptarEncargoLink = document.createElement("a");
    const aceptarEncargoIcon = document.createElement("i");
    aceptarEncargoIcon.classList.add("fa-solid", "fa-check");
    aceptarEncargoIcon.setAttribute("id", "aceptarEncargo");
    aceptarEncargoLink.appendChild(aceptarEncargoIcon);
    aceptarEncargoLink.href = "#";

    aceptarEncargoLink.addEventListener("click", (event) => {
      const fila = event.target.closest("tr");
      // Crear una nueva fila en la tabla de encargos-aceptados
      const nuevaFila = document.createElement("tr");
      nuevaFila.innerHTML = `
    <td>${id}</td>
    <td>${idCliente}</td>
    <td>${nombre}</td>
    <td>${apellidos}</td>
    <td>
    <ul>
      ${serviciosSeleccionados
        .map((servicio) => `<li>${servicio}</li>`)
        .join("")}
    </ul>
    </td>
    <td>
    <ul>
    ${trabajadoresSeleccionados
      .map((trabajador) => `<li>${trabajador}</li>`)
      .join("")}
    </ul>
    </td>
    <td>${fechaInicio}</td>
    <td>${fechaFin}</td>
    <td>Aceptado</td>
  `;
      const tablaAceptados = document.getElementById(
        "tabla-encargos-aceptados"
      );
      tablaAceptados.appendChild(nuevaFila);
      const tbodyAceptados = tablaAceptados.querySelector("tbody");

      tbodyAceptados.appendChild(nuevaFila);

      // Eliminar la fila original de la tabla de encargos-pendientes
      fila.remove();
    });
    accionesCell.appendChild(aceptarEncargoLink);

    const rechazarEncargoLink = document.createElement("a");
    const rechazarEncargoIcon = document.createElement("i");
    rechazarEncargoIcon.classList.add("fa-solid", "fa-xmark");
    rechazarEncargoIcon.setAttribute("id", "rechazarEncargo");
    rechazarEncargoLink.appendChild(rechazarEncargoIcon);
    rechazarEncargoLink.href = "#";

    rechazarEncargoLink.addEventListener("click", (event) => {
      alert("rechazado");
    });
    accionesCell.appendChild(rechazarEncargoLink);

    estadoCell.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    // Actualizar el último ID
    ultimoId++;
    idInput.placeholder = `${ultimoId}`;
    idInput.value = "";
  } else {
    alert("Rellena todos los campos.");
  }
});
