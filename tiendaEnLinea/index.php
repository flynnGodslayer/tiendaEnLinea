<?php
include 'conexion.php';
?>
<!DOCTYPE html>
<html lang="es">
<head>
        <title>+Playeras</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/main.css"/>
</head>
<body>

	<div class="pagina">
		<header class="">
			<nav class="nav_static nav_disp_block" >
				<a href="index.html" class="nav_logo" ><img src="img/logo.png" class="img_logo" alt="Inicio"></a>
				
				<ul class="lista_menu">
		            <li class="link"><a href="" aria-label="Pagina de inicio">Inicio</a></li>
					<li class="link"><a href="" aria-label="Pagina de CSS">CSS</a></li>
		            <li class="link"><a href="" aria-label="Pagina de componentes">Componentes</a></li>
				</ul>
			</nav>
	</header>
	<article>
		<div class="fila">
			<div class="carrusel">
				<div class=" contenedor_carrusel columna_m_8 imaginario_m_2 columna_l_8 imaginario_l_2 columna_xl_8 imaginario_xl_2 alinear_centro">
					<section class="contenido_carrusel ">
						<h1 class="alinear_centro titulo_carrusel" >Barcelona</h1>
						<img class="imagen_carrusel borde img-enlazada" tabindex="0" alt="Playera" src="img/barcelona.jpg" aria-expanded="false">
						<p class="alinear_centro texto_carrusel">
							$890
						</p>
					</section>
						<section class="contenido_carrusel ">
						<h1 class="alinear_centro titulo_carrusel" >Pumas</h1>
						<img class="imagen_carrusel" alt="" src="img/pumas.jpg">
						<p class="alinear_centro texto_carrusel">
							$560
						</p>
					</section>
					<section class="contenido_carrusel ">
						<h1 class="alinear_centro titulo_carrusel" >Tigres</h1>
						<img class="imagen_carrusel" alt="codigo QR quemandose" src="img/tigres.jpg">
						<p class="alinear_centro texto_carrusel">
							$760
						</p>
					</section>
				</div>
				<div class="contenedor_navegador_carrusel columna_m_8 imaginario_m_2 columna_l_8 imaginario_l_2 columna_xl_8 imaginario_xl_2 alinear_centro">
				</div>
			</div>
		</div>
	</article>
		<section class="playeras">
			<article class="filtro">
				<div class="acordeon" aria-multiselectable="true"> 
					<div class="acordeon_panel ">
	
						<button class="acordeon_titulo boton"  href="#acordeon-1" data-parent="#acordeon"  aria-expanded="false" aria-controls="collapseExample">Marca</button>
						<div id="acordeon-1" class="acordeon_contenido" >
							<ul aria-label="Contenido panel 1" tabindex="0">
								<li tabindex="0">Nike</li>
								<li tabindex="0">Adidas</li>
								<li tabindex="0">Pirma</li>
								<li tabindex="0">Charly</li>
							</ul>
						</div>
					</div>
				<div class="acordeon_panel ">
					<button class="acordeon_titulo boton"  href="#acordeon-2" data-parent="#acordeon"  aria-expanded="false" aria-controls="collapseExample">Temporada</button>
					<div id="acordeon-2" class="acordeon_contenido" >
						<ul aria-label="Contenido panel 1" tabindex="0">
									<li tabindex="0">2017A</li>
									<li tabindex="0">2017C</li>
									<li tabindex="0">2018A</li>
									<li tabindex="0">2018C</li>
						</ul>
					</div>
				</div>
				<div class="acordeon_panel ">
					<button class="acordeon_titulo boton"  href="#acordeon-3" data-parent="#acordeon"  aria-expanded="false" aria-controls="collapseExample">Precio</button>
					<div id="acordeon-3" class="acordeon_contenido" >
						<ul aria-label="Contenido panel 1" tabindex="0">
									<li tabindex="0">$500 a $800</li>
									<li tabindex="0">$800 a $1200</li>
									<li tabindex="0">$1200 a $1600</li>
									<li tabindex="0">$1600 a $2000</li>
						</ul>
					</div>
				</div>
				<div class="acordeon_panel ">
					<button class="acordeon_titulo boton"  href="#acordeon-4" data-parent="#acordeon"  aria-expanded="false" aria-controls="collapseExample" id="mostrar">Mostrar playeras</button>

				</div>	
				</div>
			</article>

		<section id="playeras">
			
		</section>
	</div>
	
	<div role="dialog" class="modal draggable" aria-hidden="true" >
    <button id="cerrar" type="button" class="boton cerrar">X</button>

    <h1 class="titulo_responsivo alinear_izquierda">Playera  Barcelona</h1>
    <div class="contenido_modal">
   	<div class="form_grupo"> 
		<label class="form_label" for="select">Talla</label>
			<select class="form_control_chico" id="select" aria-expanded="true">
				<option>Chica</option>
				<option>Mediana</option>
				<option>Grande</option>
			</select>
	</div>
	<div class="form_grupo">
		<label class="form_label" for="numerico" aria-expanded="false">Cantidad</label>
			<input type="number" class="form_control_chico" aria-label="valornumerico" id="numerico" name="numerico" value="1" max="10" min="1" step="1" aria-expanded="true">
	</div>
    </div>
    

    
     
    </div>
    <div class="modal_overlay" tabindex="-1"></div>

	<script src = "lib/jquery-3.1.1.min.js"></script>
	<script src='js/main.js' ></script>
	<script src="peticion_ajax.js"></script>
</body>
</html>