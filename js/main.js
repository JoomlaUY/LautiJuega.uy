// ENCIERO LA FUNCION ENTRE () PARA QUE LAS VARIABLES NO CONTAMINEN LOS ENTORNOS DE EJECUCI脫N
(function () {
  // ARRAY CON TODOS LOS ELEMENTOS .slider_body
  const sliders = [...document.querySelectorAll(".slider__body")];

  // selecciono el elemento activo
  let elementoActual = document.querySelector(".slider__body--show");

  // obtengo la ID
  let dataID = Number(elementoActual.dataset.id);

  // obtengo el boton pulsador
  const pulsador = document.getElementById("pulsador");

  // obtengo el audio del pulsador
  let audioJump = document.getElementById("audio__jump");

  // defino el 铆ndice inicial
  let indice = 0;
  pulsador.addEventListener("click", () => cambiarSlide2());

  // 馃憠馃徏 nueva versi贸n abreviada de la funci贸n cambiarSlide2
  // Abreviaci贸n con el OPERADOR CONDICIONAL (ternario)
  function cambiarSlide2() {
    sliders[indice].classList.toggle("slider__body--show");
    indice >= 3 ? (indice = 0) : (indice += 1);
    sliders[indice].classList.toggle("slider__body--show");
    audioJump.play();
  }
})();

// ------------------------------------------------------------------------

// 馃憞馃徏 SEGUNDA VERSION  DE LA FUNCION cambiarSlide
// function cambiarSlide() {
//   // cuando llego al 煤ltimo slide
//   if (indice >= 3) {
//     // cambio el estado del elemento activo a inactivo
//     sliders[indice].classList.toggle("slider__body--show");
//     // avanzo al pr贸ximo 铆ndice
//     indice = 0;
//     // cambio el estado del elemento inactivo a activo
//     sliders[indice].classList.toggle("slider__body--show");
//   } else {
//     // cambio el elemento activo y lo pongo inactivo
//     sliders[indice].classList.toggle("slider__body--show");

//     // avanzo al pr贸ximo 铆ndice
//     indice += 1;

//     // cambio el elemento inactivo del indice y lo pongo activo
//     sliders[indice].classList.toggle("slider__body--show");
//   }
// }

// obtengo y muestro el elemento actual por su nombre
// const elementoActual = document.querySelector(".slider__body--show");
// let dataName = elementoActual.dataset.name;
// let dataID = Number(elementoActual.dataset.id);
// console.log(`elemento inicial es ${dataID}`);
// console.log(`Elemento actual: ${dataName}`);
// elementoActual.addEventListener("click", () => clickea(1));

// ------------------------------------------------------------------------

// 馃憞馃徏 VERSION INICIAL DE LA FUNCION  QUE CAMBIA EL SLIDE (clickea)
// TIENE PROBLEMAS CUANDO LLEGA AL ULTIMO SLIDE
// const clickea = function (paramID) {
//   console.log(`elemento a modificar es ${dataID}`);

//   sliders[indice].classList.toggle("slider__body--show");
//   // console.log(`desactivo el Slider n煤mero  ${indice}`);
//   indice += 1;
//   sliders[indice].classList.toggle("slider__body--show");
//   // console.log(`activ贸 el Slider n煤mero  ${dataID}`);
//   console.log("activ茅 el elemento", sliders[indice]);

//   // obtengo el elemento actual de nuevo
//   const elementoActual = sliders[indice];
//   // obtengo la ID del elemento actual
//   dataID = Number(elementoActual.dataset.id);
//   console.log(`dataID actual es ${dataID}`);
//   // console.log(`sliders.lenght aca es  ${sliders.length}`);

//   if (dataID == sliders.length) {
//     dataID = 1;
//     indice = 0;
//     console.log("entre en el if y puse dataID en " + dataID);
//     elementoActual.addEventListener("click", () => clickea(1));
//     return console.log("final if");
//   } else {
//     dataID = dataID;
//     elementoActual.addEventListener("click", () => clickea(1));
//   }
//   console.log("estoy escuchando el clik");
//   console.log("indice es" + indice);
// };
