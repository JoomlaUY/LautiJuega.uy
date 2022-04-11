// metodo abreviado
// const currentElement = Number(document.querySelector(".slider__body--show").dataset.id);
// value = currentElement;

// Probando obtener otro valor dataset, en html el atributo es data-name y lo obtengo en js como name
// muestro el elemento actual por su nombre
// name = currentElement.dataset.name;
// console.log(`Elemento actual 2: ${name}`);

// movimiento slides evaluo la condición del valor actual clickeado
// si el valor es cero || si el valor es mayor que el total de slides
// Si es cero, entonces estaba parado en el slide 1 y presiono #prev, navegar hacia atrás ,
// al no haber hay slide 0 tengo que dirigirlo hacia el último slide, con sliders.lenght
// Si en cambio está parado en el último slide, porque value > sliders.lenght entonces va para el slide 1
if (value === 0 || value == sliders.length + 1) {
  console.log("valor clickeado es ir al slide" + value);

  //accedo al indice de slider actual
  let indice = value === 0 ? sliders.length - 1 : 0;
  sliders[indice].classList.toggle("slider__body--show");

  // reasigno la variable value
  value = value === 0 ? sliders.length : 1;
  console.log("value despues de evaluada es " + value);

  sliders[value].classList.toggle("slider__body--show");

  console.log("El contenido de indice es ");
  console.log(indice);
  console.log("el valor del slider desborda");
  console.log(`Variable value: ${value}`);
} else {
  console.log("no es 0 ni mayor al lenght ahora es " + value);
  sliders[value - 1].classList.toggle("slider__body--show");
  sliders[value].classList.toggle("slider__body--show");
  // obtengo que flecha hizo click del usuario,  si presiona avance +1 y si presiona prev sera -1
  // y le asigno a la variable índice sumar 1 o restar 1
  // 1 es derecha -1  es izquierda
  // indice = change == 1 ? value - 1 : value + 1;
  // sliders[indice].classList.toggle("slider__body--show");
}
