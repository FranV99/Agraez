// Obtener el formulario y el contenedor de parcelas
const formulario = document.getElementById("nuevoParcela");
const contenedorParcelas = document.getElementById("parcelas");
const contenedorTarjetas = contenedorParcelas.querySelector(".row"); // Obtener el contenedor de tarjetas dentro del contenedor de parcelas

// Agregar un evento de envío al formulario
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores del formulario
  const id = formulario.querySelector("#idParcela").value;
  const nombre = formulario.querySelector("#nombreParcela").value;
  const localizacion = formulario.querySelector("#localizacionParcela").value;
  const m2 = formulario.querySelector("#m2Parcela").value;
  const plantacion = formulario.querySelector("#plantacionParcela").value;
  let imagen = "parcela-m";
  if (nombre && localizacion && m2 && plantacion) {
    if (m2 <= 1000) {
      if (
        plantacion.toLowerCase() == "naranjas" ||
        plantacion.toLowerCase() == "naranja" ||
        plantacion.toLowerCase() == "naranjos"
      ) {
        imagen = "parcela-p-n";
      } else if (
        plantacion.toLowerCase() == "limones" ||
        plantacion.toLowerCase() == "limoneros" ||
        plantacion.toLowerCase() == "limon"
      ) {
        imagen = "parcela-p-l";
      } else if (
        plantacion.toLowerCase() == "granadas" ||
        plantacion.toLowerCase() == "granados" ||
        plantacion.toLowerCase() == "granada"
      ) {
        imagen = "parcela-p-g";
      } else if (
        plantacion.toLowerCase() == "varios" ||
        plantacion.toLowerCase() == "variado"
      ) {
        imagen = "parcela-p-h";
      } else {
        imagen = "parcela-p";
      }
    } else if (m2 > 1000 && m2 < 3000) {
      if (
        plantacion.toLowerCase() == "naranjas" ||
        plantacion.toLowerCase() == "naranja" ||
        plantacion.toLowerCase() == "naranjos"
      ) {
        imagen = "parcela-m-n";
      } else if (
        plantacion.toLowerCase() == "limones" ||
        plantacion.toLowerCase() == "limoneros" ||
        plantacion.toLowerCase() == "limon"
      ) {
        imagen = "parcela-m-l";
      } else if (
        plantacion.toLowerCase() == "granadas" ||
        plantacion.toLowerCase() == "granados" ||
        plantacion.toLowerCase() == "granada"
      ) {
        imagen = "parcela-m-g";
      } else if (
        plantacion.toLowerCase() == "varios" ||
        plantacion.toLowerCase() == "variado"
      ) {
        imagen = "parcela-m-h";
      } else {
        imagen = "parcela-m";
      }
    } else if (m2 >= 3000) {
      if (
        plantacion.toLowerCase() == "naranjas" ||
        plantacion.toLowerCase() == "naranja" ||
        plantacion.toLowerCase() == "naranjos"
      ) {
        imagen = "parcela-g-n";
      } else if (
        plantacion.toLowerCase() == "limones" ||
        plantacion.toLowerCase() == "limoneros" ||
        plantacion.toLowerCase() == "limon"
      ) {
        imagen = "parcela-g-l";
      } else if (
        plantacion.toLowerCase() == "granadas" ||
        plantacion.toLowerCase() == "granados" ||
        plantacion.toLowerCase() == "granada"
      ) {
        imagen = "parcela-g-g";
      } else if (
        plantacion.toLowerCase() == "varios" ||
        plantacion.toLowerCase() == "variado"
      ) {
        imagen = "parcela-g-h";
      } else {
        imagen = "parcela-p";
      }
    }
    // Crear una nueva tarjeta
    const nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.className = "col-lg-4 d-flex align-items-stretch";
    nuevaTarjeta.innerHTML = `
    <div class="card">
      <img class="card-img-top" src="../../img/parcelas/${imagen}.png" alt="Card image cap">
      <h5 class="card-title">${nombre}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>ID: </b>${id}</li>
        <li class="list-group-item"><b>Localización: </b>${localizacion}</li>
        <li class="list-group-item"><b>m2: </b>${m2}</li>
        <li class="list-group-item"><b>Plantación </b>${plantacion}</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link" id=""><i class="fa-solid fa-eye"></i></a>
        <a href="#" class="card-link" id=""><i class="fa-solid fa-edit"></i></a>
        <a href="#" class="card-link"><i class="fa-solid fa-trash-can"></i></a>
      </div>
    </div>
  `;

    // Agregar la nueva tarjeta al contenedor de tarjetas
    contenedorTarjetas.appendChild(nuevaTarjeta);
  } else {
    alert("Rellena todos los campos");
  }
});
