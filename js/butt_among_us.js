// creo un array con todos los elementos de la clase
const pulsadorStatus = [
  ...document.querySelectorAll(".slider__button--status"),
];
console.log(pulsadorStatus);

// obtengo el mario bros
const marioBros = document.getElementById("mario-animado");

pulsadorStatus[0].classList.add("encendido");
pulsador.addEventListener("mouseenter", () => cambiarBoton(1, "mouse enter"));
pulsador.addEventListener("mousedown", () => cambiarBoton(2, "mouse down"));
pulsador.addEventListener("mouseup", () => cambiarBoton(0, "mouse up"));
pulsador.addEventListener("mouseleave", () => cambiarBoton(0, "mouse leave"));

function cambiarBoton(indice, texto) {
  pulsadorStatus[0].classList.remove("encendido");
  pulsadorStatus[1].classList.remove("encendido");
  pulsadorStatus[2].classList.remove("encendido");
  pulsadorStatus[indice].classList.add("encendido");
  console.log("indice: " + indice, texto);

  if (indice == 2) {
    marioBros.classList.add("saltar");
  } else {
    setTimeout(() => {
      marioBros.classList.remove("saltar");
    }, 500);
  }
}

// SALTO DE MARIO

// marioBros.classList.add("saltar");
