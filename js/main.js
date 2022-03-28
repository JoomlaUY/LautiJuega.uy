let nuevoCabezal = `

			<!-- NAVEGACION DESDE JAVA -->
			<nav class="menu-nav" id="menu-superior">
				<ul class="menu-nav-ul">
					<a href="#" class="menu-nav-active" id="inicio">
						<li class="menu-nav-li"> 
							<img src="icons/favicon-96x96.png" alt="inicio"><br>inicio
						</li>
					</a>
					<a href="#" class="menu-nav-pasive" id="ltv">
						<li class="menu-nav-li"><img src="icons/LTV-icon-96x96.png" alt=""><br>LTV ..s</li>
					</a>
					<a href="#" class="menu-nav-pasive" id="eltur">
						<li class="menu-nav-li"><img src="icons/ElTur-icon-96x96.png" alt=""><br> El Tur ..s</li>
					</a>
				</ul>
			</nav>

	 `;

// obtener el elemento con ide cabezal del DOM
const cabezal = document.getElementById("cabezal");
// const cabezal = menuSuperior.innerHTML;
// console.log("este es el menu Superior " + cabezal);

//crear un elemento header
cabezal.insertAdjacentHTML("afterbegin", nuevoCabezal);
//añadirle contenido

// Añadirlo como un nuevo elemento hijo

// nav.innerHTML = nuevoCabezal;

// let insertoCabezal = nuevoCabezal.innerHTML;
console.log("aquí nav" + nuevoCabezal);

// cabezalDiv = nuevoCabezal.innerHTML;
// document.body.innerHTML(nuevoCabezal);
// console.log("este es el nuevo cabezal  " + cabezalDiv);
