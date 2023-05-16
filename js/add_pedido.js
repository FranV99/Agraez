// Obtener la tabla
  // Usar el valor de ultimoId en la creación del nuevo pedido
  
  const form = document.getElementById("nuevoPedido");
  const tableBody = document.getElementById("tbody-pedidos");

  let ultimoId = parseInt(tableBody.lastElementChild.firstElementChild.textContent);
  
  const idInput = document.getElementById("idPedido");
  idInput.placeholder = `${ultimoId + 1}`;
  
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe
  
    // Recoger los datos del formulario
    const id = ultimoId + 1;
    const parcela = document.getElementById('selectParcela').value;
    const fechaInicio = document.getElementById("fechaInicioPedido").value;
  
    const fechaI = new Date(fechaInicio);
    const diaI = fechaI.getDate();
    const mesI = fechaI.getMonth() + 1;
    const anioI = fechaI.getFullYear();
    const fechaFormateadaI = `${diaI}-${mesI}-${anioI}`;
  
    const serviciosCheckbox = document.querySelectorAll(
      "input[type=checkbox][name=servicios]:checked"
    );
  
    // Añadir celdas a la fila con los datos del formulario
    if (parcela && fechaInicio) {
      // Crear una nueva fila en la tabla
      const row = tableBody.insertRow();
      const idCell = row.insertCell();
      idCell.textContent = id;

      const parcelaCell = row.insertCell();
      parcelaCell.textContent = parcela;

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
  
      const fechaInicioCell = row.insertCell();
      fechaInicioCell.textContent = fechaFormateadaI;
  
      const fechaFinCell = row.insertCell();
      fechaFinCell.textContent = '';
  
      const estadoCell = row.insertCell();
      estadoCell.textContent = "Pendiente";
      // Actualizar el último ID
      ultimoId++;
      idInput.placeholder = `${ultimoId + 1}`;
      idInput.value = "";

    } else {
      const alertMensaje = document.querySelector(".alert");
      alertMensaje.classList.remove("d-none"); // muestra el mensaje
  
      setTimeout(() => {
        alertMensaje.classList.add("d-none"); // oculta el mensaje después de 5 segundos
      }, 5000);
    }
  });
  