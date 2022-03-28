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

//crear un elemento header
cabezal.insertAdjacentHTML("afterbegin", nuevoCabezal);
//añadirle contenido
