/************************************************************************************************************************************
Código para dropdowns (Menús desplegables)
************************************************************************************************************************************/
$(".boton_menu_desplegable").each(function(){
  $(this).attr("aria-expanded", "false");
});

$("*").click(function(e){
    e.stopPropagation();
    if($(this).hasClass("boton_menu_desplegable")){ //Comprueba que el elemento es un botón
    
        if($(this).hasClass("cerrado")){ //Si el menú desplegable está cerrado

            $(".menu_desplegable").css("display", "none"); //Oculta todos los menús desplegables
            $(".boton_menu_desplegable").attr("aria-expanded", "false"); //Comunica al lector de pantalla que el resto de submenús fueron cerrados
            $(this).next(".menu_desplegable").css("display", "block"); //Muestra el submenú desplegable del botón que fue clickeado
            $(this).attr("aria-expanded", "true"); //Comunica al lector de pantalla que el menú del botón que fue clickeado ha sido abierto
            $(this).toggleClass("cerrado");
        } else { //Si el menú desplegable está abierto

            $(this).next(".menu_desplegable").css("display", "none"); //Muestra el submenú desplegable
            $(this).attr("aria-expanded", "false"); //Comunica al lector de pantalla que el menú ha sido abierto
            $(this).toggleClass("cerrado");
        } 
    } else if($(this).attr("class") == "menu_flecha"){ //Comprueba que el click fue a la flecha contenida al botón
        var menu = $(this).parent("button.boton_menu_desplegable").attr("aria-expanded");
    
        if(menu === "false"){ //Si el menú desplegable está cerrado

            $(".menu_desplegable").css("display", "none"); //Oculta todos los menús desplegables
            $(".boton_menu_desplegable").attr("aria-expanded", "false"); //Comunica al lector de pantalla que el resto de submenús fueron cerrados
            $(this).parent("button.boton_menu_desplegable").next(".menu_desplegable").css("display", "block"); //Muestra el submenú desplegable del botón que fue clickeado
            $(this).parent("button.boton_menu_desplegable").attr("aria-expanded", "true"); //Comunica al lector de pantalla que el menú del botón que fue clickeado ha sido abierto
        } else { //Si el menú desplegable está abierto

            $(this).parent("button.boton_menu_desplegable").next(".menu_desplegable").css("display", "none"); //Muestra el submenú desplegable
            $(this).parent("button.boton_menu_desplegable").attr("aria-expanded", "false"); //Comunica al lector de pantalla que el menú ha sido abierto
        } 
    } else { //Comprueba que el elemento es otra cosa que no es el botón
        $(".menu_desplegable").css("display", "none"); //Oculta todos los submenús desplegables
        $(".boton_menu_desplegable").attr("aria-expanded", "false"); //Comunica al lector de pantalla que el resto de submenús fueron cerrados
    }
});

$(".menu_desplegable").children("li").children("a").click(function(){ //Si el enlace va a la misma página, el menú se cierra

    $(this).parent().parent().css("display", "none"); //desaparece el menú desplegabe del tabulador y de la vista
});

$("li.menu_titulo").each(function(){ //Para cada elemento que tenga la clase menu_titulo
    var menuTitulo = $(this).text(); //Toma el texto en e contenido de la lista 
    $(this).attr("aria-label", 'Del submenú '.concat(menuTitulo)); //El lector de pantalla leerá los titulos de manera lógica
});


$("li.menu_deshabilitado").children("a").attr("aria-label", "deshabilitado"); //Asegura que los elementos deshabilitados sean comunicados al lector de pantalla
$("li.menu_deshabilitado").children("a").attr("href", ""); //Asegura que los elementos deshabilitados sean comunicados al lector de pantalla
/************************************************************************************************************************************ 
Fin del código para dropdowns (Menús desplegables)
************************************************************************************************************************************/

/*::::::::::::::::::::INICIO CODIGO FORMS::::::::::::::::*/
$( ".checkboxjs" ).focusin(function() {
              $(this).parent().addClass('focus');
            });

            $( ".checkboxjs" ).focusout(function() {
              $(this).parent().removeClass('focus');
            });
            
            

$( ".radiojs" ).focusin(function() {
              $(this).parent().addClass('focus');
            });

            $( ".radiojs" ).focusout(function() {
              $(this).parent().removeClass('focus');
            });


$( ".checkboxl" ).focusin(function() {
              $(this).addClass('focus');
            });

            $( ".checkboxl" ).focusout(function() {
              $(this).removeClass('focus');
            });

$( ".radiol" ).focusin(function() {
              $(this).addClass('focus');
            });

            $( ".radiol" ).focusout(function() {
              $(this).removeClass('focus');
            });

$( ".cbexito" ).focusin(function() {
              $(this).parent().addClass('focus_exito');
            });

            $( ".cbexito" ).focusout(function() {
              $(this).parent().removeClass('focus_exito');
            });

$( ".cbalerta" ).focusin(function() {
              $(this).parent().addClass('focus_alerta');
            });

            $( ".cbalerta" ).focusout(function() {
              $(this).parent().removeClass('focus_alerta');
            });

$( ".cberror" ).focusin(function() {
              $(this).parent().addClass('focus_error');
            });

            $( ".cberror" ).focusout(function() {
              $(this).parent().removeClass('focus_error');
            });
          

/*::::::::::::::::::::FIN CODIGO FORMS:::::::::::::::::.*/


/*-----------INICIA SECCIÓN PARA NAVTAB---------*/
var menu_disp=1; /*Esta variable es para conocer el estado de despliegue del menu
1=cerrado
0=abierto*/
/*----------NAVEGACION CON MOUSE---------*/
    $(".boton_hamburguesa, .icono_boton").click(function(){ /*Esta función despliega el menú*/
        if(menu_disp==1){
            $(".link").css("display", "block");
            $(".boton_hamburguesa").attr("aria-expanded", "true");
            menu_disp=0;
            if($(".nav_disp_block").hasClass(".nav")){ /*si el navtab va con el flujo normal de la pagina recorre el texto*/
              var tamMenu= $("ul.lista_menu").height();
              $("main").css("margin-top", tamMenu);
            }
        }
        else{
            $(".link").css("display", "none");
            $(".boton_hamburguesa").attr("aria-expanded", "false");
            menu_disp=1;
            if($(".nav_disp_block").hasClass(".nav")){ 
              var tamMenu= $("ul.lista_menu").height();
              $("main").css("margin-top", -tamMenu);
            }
        }
    });


    
/*----------NAVEGACION CON TECLADO---------*/
    $(".boton_hamburguesa").keyup(function(e){ /*Esta función despliega el menú si se presiona ENTER*/
        if(e.keyCode == 13 && menu_disp == 0){ 
            $(".link").css("display", "block");
            $(".boton_hamburguesa").attr("aria-expanded", "true");
            menu_disp=0;
            if($(".nav_disp_block").hasClass(".nav")){ /*si el navtab va con el flujo normal de la pagina recorre el texto*/
              var tamMenu= $("ul.lista_menu").height();
              $("main").css("margin-top", tamMenu);
            }
        }
        else{
           if(e.keyCode == 13){
            $(".link").css("display", "none");
            $(".boton_hamburguesa").attr("aria-expanded", "false");
            menu_disp=1;
            if($(".nav_disp_block").hasClass(".nav")){ 
              var tamMenu= $("ul.lista_menu").height();
              $("main").css("margin-top", -tamMenu);
            }
          }
        }
    });

    $("li.link a:not(.in-a)").focusin(function(){/*Esta función despliega el menú si se navega en algun enlace*/
            /*in-a es una clase de los enlaces, con el se pasa el foco a los enlaces dentro de un elemento de lista */
        $("li.sublink").parent().css("display", "none");
        $(this).next("ul.submenu").css("display", "block");
    });
    

$(window).resize(function(){ /*Esta función despliega o esconde el menú al cambiar el tamaño de la pantalla*/
  var size=$(window).width();
  if (size > 768) {
    $(".link").css("display", "inline-block");
    $(".boton_hamburguesa").attr("aria-expanded", "true");
    menu_disp=0;
  }
  else {
    $(".link").css("display", "none");
    $(".boton_hamburguesa").attr("aria-expanded", "false");
    menu_disp=1;
  }
});

$( ".boton_hamburguesa" ).click(function() {
  $("ul.lista_menu > li > a").first().focus(); 
});

/*-----------FIN SECCIÓN PARA NAVTAB---------*/

/*-----------INICIA SECCIÓN PARA AUMENTOS Y DECREMENTOS---------*/
var elem_doc=document.all;
var elem_array = new Array ();
var j =0;
$(window).ready(function(){
	var ready=$("div").hasClass("aum_dec");
	if (ready) {
		for (var i = 0; i < elem_doc.length; i++) {
			if (elem_doc[i].tagName != "HTML"){ 
			if (elem_doc[i].tagName != "HEAD" ){ 
			if (elem_doc[i].tagName != "TITLE"){ 
			if (elem_doc[i].tagName != "META"){ 
			if (elem_doc[i].tagName != "LINK"){ 
			if (elem_doc[i].tagName != "BODY"){ 
			if (elem_doc[i].tagName != "HTML"){ 
			if (elem_doc[i].tagName != "BR"){ 
			if (elem_doc[i].tagName != "SCRIPT"){
			if (elem_doc[i].tagName != "OPTION"){
			if (elem_doc[i].tagName != "DIV"){
			if (elem_doc[i].tagName != "HEADER"){
			if (elem_doc[i].tagName != "FOOTER"){
			if (elem_doc[i].tagName != "UL"){
			if (elem_doc[i].tagName != "NAV"){	
			 	elem_array[j] = i;
			 	j++;
			}}}}}}}}}}}}}}}
		}
		for (var i = 0; i < elem_array.length; i++) {
			elem_array[i]=elem_doc[elem_array[i]].tagName;
		}
		elem_array.sort();
		elem_array=$.unique(elem_array);
	}
	var elem_filrto = new Array ();
	for (var i = 0; i < elem_array.length; i++) {

		if(elem_array[i] == 'SPAN'){ $(".pag_elem_aum").append("<option value='"+elem_array[i].toLowerCase()+"'>Renglones</option>");}
		if(elem_array[i] == 'P'){ $(".pag_elem_aum").append("<option value='"+elem_array[i].toLowerCase()+"'>P&aacute;rrafos</option>");}
		if(elem_array[i] == 'OPTION'){ $(".pag_elem_aum").append("<option value='"+elem_array[i].toLowerCase()+"'>Opciones</option>");}
		if(elem_array[i] == 'LI'){ $(".pag_elem_aum").append("<option value='"+elem_array[i].toLowerCase()+"'>Elementos de lista</option>");}
		if(elem_array[i] == 'SELECT'){ $(".pag_elem_aum").append("<option value='"+elem_array[i].toLowerCase()+"'>Seleccionables</option>");}
		if(elem_array[i] == 'BUTTON'){ $(".pag_elem_aum").append("<option value='"+elem_array[i].toLowerCase()+"'>Botones</option>");}
		if(elem_array[i] == 'A'){ $(".pag_elem_aum").append("<option value='"+elem_array[i].toLowerCase()+"'>Enlaces</option>");}
		if(elem_array[i] == 'LABEL'){ $(".pag_elem_aum").append("<option value='"+elem_array[i].toLowerCase()+"'>Etiquetas</option>");}
		if(elem_array[i] == 'H5'){ $(".pag_elem_aum").append("<option value='"+elem_array[i].toLowerCase()+"'>Subtitulo de nivel 5</option>");}
		if(elem_array[i] == 'H6'){ $(".pag_elem_aum").append("<option value='"+elem_array[i].toLowerCase()+"'>Subtitulo de nivel 6</option>");}
	}
});


var tamLetra= 14;
$(".aum").click(function(){

	if ($(".aum_dec")) {
		a="*";
		if ($("select").hasClass("pag_elem_aum")) {
			a= $(".pag_elem_aum").val();
		}
		tamActual= $(a).css("font-size");
		tamActual=tamActual.substring(0,2);
		tamActual=parseInt(tamActual)+2;
		$("#desc_letra").html("Tama&ntilde;o de letra actual "+tamActual+" pixeles");
		tamLetra=tamActual+"px";
		$(a).css("font-size", tamLetra);
		
	

}
	
});
$(".dec").click(function(){
	if ($(".aum_dec")) {
		a="*";
		if ($("select").hasClass("pag_elem_aum")) {
			a= $(".pag_elem_aum").val();
		}
		tamActual= $(a).css("font-size");
		tamActual=tamActual.substring(0,2);
		if (tamActual>14) {
			tamActual=parseInt(tamActual)-2;
			$("#desc_letra").html("Tama&ntilde;o de letra actual "+tamActual+" pixeles");
			tamLetra=tamActual+"px";
			$(a).css("font-size", tamLetra);
		}
}
	
});


/*-----------FIN SECCIÓN PARA AUMENTOS Y DECREMENTOS---------*/
/*-----------INICIO SECCIÓN PARA CALIFICACIONES---------*/
 $(".cal_1").click(function(){
 	$(".cal_1").css("border-color", "#f1c40f");
 	$(".cal_2").css("border-color", "#000");
 	$(".cal_3").css("border-color", "#000");
 	$(".cal_4").css("border-color", "#000");
 	$(".cal_5").css("border-color", "#000");
        var cal = $(".cal_1").data("value");
        console.log(cal);
 })

 $(".cal_2").click(function(){
 	$(".cal_1").css("border-color", "#f1c40f");
 	$(".cal_2").css("border-color", "#f1c40f");
 	$(".cal_3").css("border-color", "#000");
 	$(".cal_4").css("border-color", "#000");
 	$(".cal_5").css("border-color", "#000");
        var cal = $(".cal_2").data("value");
  console.log(cal);
 })

 $(".cal_3").click(function(){
 	$(".cal_1").css("border-color", "#f1c40f");
 	$(".cal_2").css("border-color", "#f1c40f");
 	$(".cal_3").css("border-color", "#f1c40f");
 	$(".cal_4").css("border-color", "#000");
 	$(".cal_5").css("border-color", "#000");
        var cal = $(".cal_3").data("value");
        console.log(cal);
 })

 $(".cal_4").click(function(){
 	$(".cal_1").css("border-color", "#f1c40f");
 	$(".cal_2").css("border-color", "#f1c40f");
 	$(".cal_3").css("border-color", "#f1c40f");
 	$(".cal_4").css("border-color", "#f1c40f");
 	$(".cal_5").css("border-color", "#000");
        var cal = $(".cal_4").data("value");
        console.log(cal);
 })

 $(".cal_5").click(function(){
 	$(".cal_1").css("border-color", "#f1c40f");
 	$(".cal_2").css("border-color", "#f1c40f");
 	$(".cal_3").css("border-color", "#f1c40f");
 	$(".cal_4").css("border-color", "#f1c40f");
 	$(".cal_5").css("border-color", "#f1c40f");
        var cal = $(".cal_5").data("value");
        console.log(cal);
 })


 $(".cal_1").focus(function(){
 	$(".cal_1").css("border-color", "#f1c40f");
 	$(".cal_2").css("border-color", "#000");
 	$(".cal_3").css("border-color", "#000");
 	$(".cal_4").css("border-color", "#000");
 	$(".cal_5").css("border-color", "#000");
  $(".cal_1").keyup(function(e){
      if (e.keyCode == 13) {
        var cal = $(".cal_1").data("value");
        console.log(cal);
        }})
 })

 $(".cal_2").focus(function(){
 	$(".cal_1").css("border-color", "#f1c40f");
 	$(".cal_2").css("border-color", "#f1c40f");
 	$(".cal_3").css("border-color", "#000");
 	$(".cal_4").css("border-color", "#000");
 	$(".cal_5").css("border-color", "#000");
  $(".cal_2").keyup(function(e){
      if (e.keyCode == 13) {
        var cal = $(".cal_2").data("value");
        console.log(cal);
        }})

 })
 $(".cal_3").focus(function(){
 	$(".cal_1").css("border-color", "#f1c40f");
 	$(".cal_2").css("border-color", "#f1c40f");
 	$(".cal_3").css("border-color", "#f1c40f");
 	$(".cal_4").css("border-color", "#000");
 	$(".cal_5").css("border-color", "#000");
  $(".cal_3").keyup(function(e){
      if (e.keyCode == 13) {
        var cal = $(".cal_3").data("value");
        console.log(cal);
        }})

 })
 $(".cal_4").focus(function(){
 	$(".cal_1").css("border-color", "#f1c40f");
 	$(".cal_2").css("border-color", "#f1c40f");
 	$(".cal_3").css("border-color", "#f1c40f");
 	$(".cal_4").css("border-color", "#f1c40f");
 	$(".cal_5").css("border-color", "#000");
  $(".cal_4").keyup(function(e){
      if (e.keyCode == 13) {
        var cal = $(".cal_4").data("value");
        console.log(cal);
        }})

 })
 $(".cal_5").focus(function(){
 	$(".cal_1").css("border-color", "#f1c40f");
 	$(".cal_2").css("border-color", "#f1c40f");
 	$(".cal_3").css("border-color", "#f1c40f");
 	$(".cal_4").css("border-color", "#f1c40f");
 	$(".cal_5").css("border-color", "#f1c40f");
  $(".cal_5").keyup(function(e){
      if (e.keyCode == 13) {
        var cal = $(".cal_5").data("value");
        console.log(cal);
        }})
 })
/*-----------FIN SECCIÓN PARA CALIFICACIONES---------*/
/*carrusel*/
var timer = 7000;
var contador_carrusel = 0;
	
	$(".carrusel").each(function(){
		contador_carrusel ++
		$(this).addClass('carrusel'+contador_carrusel)
	});
	
	var total_carrusel= contador_carrusel;
	i=0
	do{
		i++
		contador_carrusel = i;
	var actual = '.carrusel'+contador_carrusel;
	carrusel= $(actual)
	
	var contador_contenido = 0;
	
	var texto = {};
	var titulo = {};
	var imagen = {};
		
	var elemento_actual = 1;
	var elementos = 0;
	
	elementos = carrusel.children().children().length;
	
	carrusel.children().children().each(function(){
		contador_contenido ++;
		$(this).addClass(""+ contador_contenido);
		if(contador_contenido != 1){
			$(this).addClass('oculto');
		}
		titulo[contador_contenido] = $(this).children('.titulo_carrusel').html()
		texto[contador_contenido] = $(this).children('.texto_carrusel').html()
		imagen[contador_contenido] = $(this).children('.imagen_carrusel').attr('src')
	});
	
	carrusel.each(function(){
		texto;
		titulo;
		imagen;
		elemento_actual;
		elementos;
		pinta_carrusel();
		play();
	});

	function contenido_actual(elemento_actual) {
		carrusel.children('.contenedor_carrusel').children().children('.titulo_carrusel').html(titulo[elemento_actual]);
		carrusel.children('.contenedor_carrusel').children().children('.imagen_carrusel').attr('src',imagen[elemento_actual]);
		carrusel.children('.contenedor_carrusel').children().children('.texto_carrusel').html(texto[elemento_actual]);
		
		numero(elemento_actual);
	}
	
	function anterior() {
		stop();
		if (elemento_actual == 1) {
			elemento_actual = elementos;
		}
		else{
			elemento_actual-=1;
		}			
		contenido_actual(elemento_actual);
	}
	
	function reproducir() {
		
		contenido_actual(elemento_actual);
		
		if (elemento_actual == elementos) {
			elemento_actual = 1;
		}
		else{
			elemento_actual+=1;
		}
	}
	
	function siguiente() {		  
		stop();
		if (elemento_actual == elementos) {
			elemento_actual = 1;
		}
		else{
			elemento_actual+=1;
		}
			contenido_actual(elemento_actual);      
	}

	function pinta_carrusel() {	

		var navega = '<nav aria-label="Navegador del carrusel"><ul class="paginacion_carrusel"><li><a aria-label="Imagen anterior" tabindex="0" href="javascript:anterior();">Anterior</a></li>';
		navega += '<li class="li_cambio_carrusel"> <a class="elemento_cambio_carrusel" aria-label="" tabindex="0" href=""></a></li>';
		for(var numeros = 1 ; numeros <= elementos ; numeros++ ){
			if(numeros == 1){
				navega += '<li class="'+numeros+' activo"><a class="numero_carrusel" aria-label="'+texto[numeros]+'" tabindex="0" href="javascript:contenido_actual('+numeros+');">'+numeros+'</a><li>';
			}else{	
				navega += '<li class="'+numeros+'"><a class="numero_carrusel" aria-label="'+texto[numeros]+'" tabindex="0" href="javascript:contenido_actual('+numeros+');">'+numeros+'</a><li>';
			}
		}
		navega += '<li><a aria-label="Imagen siguiente" tabindex="0" href="javascript:siguiente();">Siguiente</a></li>';
		navega += '</ul></nav>';

		carrusel.children('.contenedor_navegador_carrusel').html(navega);
	}
		
	function numero(numero){
		carrusel.children('.contenedor_navegador_carrusel').children().children().children().removeClass('activo');
		carrusel.children('.contenedor_navegador_carrusel').children().children().children('.'+numero).addClass('activo');
	}
		
	function play() {
		intervalo =     setInterval(function() {
						reproducir();
					}, timer);
		carrusel.children('.contenedor_navegador_carrusel').children('nav').children('ul').children().children('.elemento_cambio_carrusel').html('Pausar');
		carrusel.children('.contenedor_navegador_carrusel').children('nav').children('ul').children().children('.elemento_cambio_carrusel').attr('href','javascript:stop();');
		carrusel.children('.contenedor_navegador_carrusel').children('nav').children('ul').children('.li_cambio_carrusel').removeClass('activo');
	}
		
	function stop() {
		clearInterval(intervalo);
		carrusel.children('.contenedor_navegador_carrusel').children('nav').children('ul').children().children('.elemento_cambio_carrusel').html('Reproducir');
		carrusel.children('.contenedor_navegador_carrusel').children('nav').children('ul').children().children('.elemento_cambio_carrusel').attr('href','javascript:play();');
		carrusel.children('.contenedor_navegador_carrusel').children().children().children().removeClass('activo');
		carrusel.children('.contenedor_navegador_carrusel').children('nav').children('ul').children('.li_cambio_carrusel').addClass('activo');
	}
	}while(i < total_carrusel);
/*fin carrusel*/

/*carrusel_imagen*/
var timer_imagen = 6000;
var contador_carrusel_imagen = 0;
	
	$(".carrusel_imagen").each(function(){
		contador_carrusel_imagen ++
		$(this).addClass('carrusel_imagen'+contador_carrusel_imagen)
	});
	
	var total_carrusel_imagen= contador_carrusel_imagen;
	i=0
	do{
		i++
		contador_carrusel_imagen = i;
	var actual = '.carrusel_imagen'+contador_carrusel_imagen;
	carrusel_imagen= $(actual)
	
	var contador_contenido = 0;
	
	var texto_imagen = {};
	var imagen_imagen = {};
	var elemento_actual_imagen = 1;
	var elementos_imagen = 0;
	
	elementos_imagen = carrusel_imagen.children().children().length;
	
	carrusel_imagen.children().children().each(function(){
		contador_contenido ++;
		$(this).addClass(""+ contador_contenido);
		if(contador_contenido != 1){
			$(this).addClass('oculto');
		}
		texto_imagen[contador_contenido] = $(this).children('.imagen_carrusel').attr('alt')
		imagen_imagen[contador_contenido] = $(this).children('.imagen_carrusel').attr('src')
	});
	
	carrusel_imagen.each(function(){
		texto_imagen;
		imagen_imagen;
		elemento_actual_imagen;
		elementos_imagen;
		pinta_carrusel_imagen();
		play_imagen();
	});

	function contenido_actual_imagen(elemento_actual_imagen) {
		carrusel_imagen.children('.contenedor_carrusel_imagen').children().children('.imagen_carrusel').attr('src',imagen_imagen[elemento_actual_imagen]);
		
		numero_imagen(elemento_actual_imagen);
	}
	
	function anterior_imagen() {	
		stop_imagen();
		if (elemento_actual_imagen == 1) {
			elemento_actual_imagen = elementos_imagen;
		}
		else{
			elemento_actual_imagen-=1;
		}			
		contenido_actual_imagen(elemento_actual_imagen);
	}
	
	function reproducir_imagen() {
		
		contenido_actual_imagen(elemento_actual_imagen);
		
		if (elemento_actual_imagen == elementos_imagen) {
			elemento_actual_imagen = 1;
		}
		else{
			elemento_actual_imagen+=1;
		}
	}
	
	function siguiente_imagen() {		  
		stop_imagen();
		if (elemento_actual_imagen == elementos_imagen) {
			elemento_actual_imagen = 1;
		}
		else{
			elemento_actual_imagen+=1;
		}
			contenido_actual_imagen(elemento_actual_imagen);      
	}

	function pinta_carrusel_imagen() {	

		var navega = '<nav aria-label="Navegador del carrusel"><ul class="paginacion_carrusel"><li><a aria-label="Imagen anterior" tabindex="0" href="javascript:anterior_imagen();">Anterior</a></li>';
		navega += '<li class="li_cambio_carrusel"> <a class="elemento_cambio_carrusel" aria-label="" tabindex="0" href=""></a></li>';
		for(var numeros = 1 ; numeros <= elementos_imagen ; numeros++ ){
			if(numeros == 1){
				navega += '<li class="'+numeros+' activo"><a class="numero_carrusel" aria-label="'+texto_imagen[numeros]+'" tabindex="0" href="javascript:contenido_actual_imagen('+numeros+');">'+numeros+'</a><li>';
			}else{	
				navega += '<li class="'+numeros+'"><a class="numero_carrusel" aria-label="'+texto_imagen[numeros]+'" tabindex="0" href="javascript:contenido_actual_imagen('+numeros+');">'+numeros+'</a><li>';
			}
		}
		navega += '<li><a aria-label="Imagen siguiente" tabindex="0" href="javascript:siguiente_imagen();">Siguiente</a></li>';
		navega += '</ul></nav>';

		carrusel_imagen.children('.contenedor_navegador_carrusel_imagen').html(navega);
	}
		
	function numero_imagen(numero){
		carrusel_imagen.children('.contenedor_navegador_carrusel_imagen').children().children().children().removeClass('activo');
		carrusel_imagen.children('.contenedor_navegador_carrusel_imagen').children().children().children('.'+numero).addClass('activo');
	}
		
	function play_imagen() {
		intervalo =     setInterval(function() {
						reproducir_imagen();
					}, timer_imagen);
		carrusel_imagen.children('.contenedor_navegador_carrusel_imagen').children('nav').children('ul').children().children('.elemento_cambio_carrusel').html('Pausar');
		carrusel_imagen.children('.contenedor_navegador_carrusel_imagen').children('nav').children('ul').children().children('.elemento_cambio_carrusel').attr('href','javascript:stop();');
		carrusel_imagen.children('.contenedor_navegador_carrusel_imagen').children('nav').children('ul').children('.li_cambio_carrusel').removeClass('activo');
	}
		
	function stop_imagen() {
		clearInterval(intervalo);
		carrusel_imagen.children('.contenedor_navegador_carrusel_imagen').children('nav').children('ul').children().children('.elemento_cambio_carrusel').html('Reproducir');
		carrusel_imagen.children('.contenedor_navegador_carrusel_imagen').children('nav').children('ul').children().children('.elemento_cambio_carrusel').attr('href','javascript:play();');
		carrusel_imagen.children('.contenedor_navegador_carrusel_imagen').children().children().children().removeClass('activo');
		carrusel_imagen.children('.contenedor_navegador_carrusel_imagen').children('nav').children('ul').children('.li_cambio_carrusel').addClass('activo');
	}
	}while(i < total_carrusel_imagen);
/*fin carrusel_imagen*/

//Codigo acordeon//
jQuery(document).ready(function() {
	function close_acordeon_section() {
		jQuery('.acordeon .acordeon_titulo').removeClass('active');
		jQuery('.acordeon .acordeon_contenido').slideUp(300).removeClass('open');
	}

	jQuery('.acordeon_titulo').click(function(e) {
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_acordeon_section();
		}else {
			close_acordeon_section();
			jQuery(this).addClass('active');
			jQuery('.acordeon ' + currentAttrValue).slideDown(300).addClass('open'); 
		}
		e.preventDefault();
	});
});


$(".acordeon_titulo").each(function(){
  $(this).attr("aria-expanded", "false");
});

$("*").click(function(e){
    e.stopPropagation();
       
        var acor = $(this).attr("aria-expanded");
    
        if(acor === "false"){ //Si el panel está cerrado

            $(this).attr("aria-expanded", "true"); //Comunica al lector de pantalla que el panel ha sido abierto
        } else { //Si el panel está abierto

            $(this).attr("aria-expanded", "false"); //Comunica al lector de pantalla que el panel ha sido cerrado
        } 
});
//Fin codigo acordeon//

/*Modals*/
/*$( ".modal" ).resizable().draggable();*/
var focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
var elementoFocusPrincipal;

$(document).ready(function() {
      jQuery('.abrir_modal').click(function(e) {
		  var contenido = $('.contenido_modal').children('p').html();
		  console.log(contenido)
		  $('.cerrar').attr('aria-label',''+contenido);
          mostrarModal($('.modal'));
      });
      jQuery('.alertas').click(function(e) {
          mostrarModal($('.ventanaAlertas'));
      });
      jQuery('.cerrar').click(function(e) {
          ocutarModal();
      });
      jQuery('.aceptar').click(function(e) {
          ocutarModal();
      });
      jQuery('.cerrarAlertas').click(function(e) {
          ocutarModal();
      });
      jQuery('.modal_overlay').click(function(e) {
          ocutarModal();
      });
      jQuery('.modal').keydown(function(event) {
          trapTabKey($(this), event);
      });
      jQuery('.modal').keydown(function(event) {
          cerrarEsc($(this), event);
      });
      jQuery('.ventanaAlertas').keydown(function(event) {
          trapTabKey($(this), event);
      });
      jQuery('.ventanaAlertas').keydown(function(event) {
          cerrarEsc($(this), event);
      });
  });



  function cerrarEsc(obj, evt) {

     
      if (evt.which == 27) {

          var o = obj.find('*');
          ocutarModal();
          
      }

  }
   function trapTabKey(obj, evt) {

      // if tab or shift-tab pressed
      if (evt.which == 9) {

          // get list of all children elements in given object
          var o = obj.find('*');

          // get list of focusable items
          var elementosFocus;
          elementosFocus = o.filter(focusableElementsString).filter(':visible')

          // get currently focused item
          var elementoFocusActual;
          elementoFocusActual = jQuery(':focus');

          // get the number of focusable items
          var numeroElementosFocus;
          numeroElementosFocus = elementosFocus.length

          // get the index of the currently focused item
          var indexElementosFocus;
          indexElementosFocus = elementosFocus.index(elementoFocusActual);

          if (evt.shiftKey) {
              //back tab
              // if focused on first item and user preses back-tab, go to the last focusable item
              if (indexElementosFocus == 0) {
                  elementosFocus.get(numeroElementosFocus - 1).focus();
                  evt.preventDefault();
              }

          } else {
              //forward tab
              // if focused on the last item and user preses tab, go to the first focusable item
              if (indexElementosFocus == numeroElementosFocus - 1) {
                  elementosFocus.get(0).focus();
                  evt.preventDefault();
              }
          }
      }

  }


  function setFocusInicialModal(obj) {
      
      var o = obj.find('*');


      var elementosFocus;
      elementosFocus = o.filter(focusableElementsString).filter(':visible').first().focus();

  }

function mostrarModal(obj) {
      jQuery('.principal').attr('aria-hidden', 'true');
      jQuery('.modal_overlay').css('display', 'block');
      jQuery('.modal').css('display', 'block'); 
      jQuery('.modal').attr('aria-hidden', 'false'); 
      jQuery('.ventanaAlertas').css('display', 'block'); 
      jQuery('.ventanaAlertas').attr('aria-hidden', 'false'); 
           
      elementoFocusPrincipal = jQuery(':focus');

      
      var o = obj.find('*');

      o.filter(focusableElementsString).filter(':visible').first().focus();


  }
   function ocutarModal() {
      jQuery('.modal_overlay').css('display', 'none');
      jQuery('.modal').css('display', 'none'); 
      jQuery('.modal').attr('aria-hidden', 'true'); 
      jQuery('.principal').attr('aria-hidden', 'false'); 
      jQuery('.ventanaAlertas').css('display', 'none'); 
      jQuery('.ventanaAlertas').attr('aria-hidden', 'true'); 

      elementoFocusPrincipal.focus();
  }
    
/*Fin de Modals*/


/*Inicio acordeon*/
$(".panel_titulo").click(function(){
    
   var contenido=$(this).next(".panel_contenedor");
      
   if(contenido.css("display")=="none"){ //abierto    
      contenido.slideDown(250);     
      $(this).addClass("abierto");
   }
   else{ //close    
      contenido.slideUp(250);
      $(this).removeClass("abierto"); 
  }
              
});
/*Fin acordeon*/

/**********************************************************************************
Cambio de contenido en Pestañas
************************************************************************************/
/*Contenido default*/
$( ".pestañas-contenido div").hide();
$( ".pestañas-contenido div.1").show();


/*esta funcion recibe un atributo que es el target que registro el evento "e" al dar clik en uno de los li de la lista horizontal
*/
var pestanaFoco = function(elemento){
	//se pasa a una variable el valor de data_target del li que le dieron click o enter
	var numPestana = $(elemento).attr("data_target");

	//elemento es igual al elemnto que inicio el evento(li.pestaña)
	
	var contenedor= $(elemento).parent();//aqui el contenedor es el ul
	//contenedor= contenedor.parent();//aqui el contenedor es el div pestaña

	contenedor = contenedor.next();//aqui es pestañasContenido

	contenedor.focus();//
	
	/*$( ".pestañas-contenido div").hide();
	$( "."+numPestana).show();*/

	contenedor.children().hide();
	contenedor.children("div."+numPestana).show();
};
/*
De nuestro ul especificamente en los li que contengan la clase pestaña al hacer click en cualquiera de estos, le asignara un evento  
al ocurrir esto llamaremos a la funcion pestanaFoco y le paseremos al evento e con sus atributos
*/
$(".horizontal li.pestaña").click(function(e){
	pestanaFoco(e.target);//hacia quien lanzo el evento
});
/*

*/
$( ".horizontal" ).keypress(function(e){
  if(e.which == 13){
	pestanaFoco(e.target);            
    
              
     }
});

/*......SALTO DE BLOQUE......*/

inicializar_salto('salto_ejemplo');
    
  function inicializar_salto(id_contenedor) {
    var altura_inicial = $('#'+id_contenedor).height(); 
	closeid_contenedor(id_contenedor);
	verificar_salto = null;
    //closeid_contenedor(id_contenedor); 

	$('#'+id_contenedor+ ' a').bind('focus',function(e){	
	if ( !$('#'+id_contenedor).hasClass('activo') ) {
		$('#'+id_contenedor).addClass('activo');
		$('#'+id_contenedor).animate({"height":altura_inicial},{duration:"medium"}); 
	}
		$(e.target).addClass('nav-focused');
	});
	
	$('#'+id_contenedor+ ' a').bind('focusout',function(e){
		$(e.target).removeClass('nav-focused');
		
		if( !verificar_salto ){
			verificar_salto = setTimeout( function() { 
			  if ( $('#'+id_contenedor+' .nav-focused').length == 0 ) { 
				closeid_contenedor(id_contenedor);
			  }
			  verificar_salto = null;
			}, 500 );
		}	
	});
    
    function closeid_contenedor(id_contenedor) {
      $('#'+id_contenedor).animate( {"height": '1px'}, 'medium', 'linear', function()
	  {
		 $(this).removeClass('activo'); 
		});
	}
    
}

/*...... FIN DE SALTO DE BLOQUE......*/

/************************************************************************************************************************************
Código para tooltips
************************************************************************************************************************************/
$(".tooltip").focusin(function(e){
    e.stopPropagation();
});
$(".tooltip_definicion").focusout(function(e){
    e.stopPropagation();
});
$(".tooltip").focusout(function(e){
    e.stopPropagation();
});
$(".tooltip_definicion").focusin(function(e){
    e.stopPropagation();
});
$(".tooltip").focus(function(e){
    e.stopPropagation();
});
$(".tooltip_definicion").focus(function(e){
    e.stopPropagation();
});
$(".tooltip").mouseenter(function(e){
    e.stopPropagation();
});
$(".tooltip_definicion").mouseleave(function(e){
    e.stopPropagation();
});
$(".tooltip").mouseleave(function(e){
    e.stopPropagation();
});
$(".tooltip_definicion").mouseenter(function(e){
    e.stopPropagation();
});
$(".tooltip").hover(function(e){
    e.stopPropagation();
});
$(".tooltip_definicion").hover(function(e){
    e.stopPropagation();
});

$(".tooltip_definicion").mouseenter(function(e){
    e.stopPropagation();
    if($(this).hasClass("tooltip_definicion_activo")){

        var tooltip = $(this).children("span.tooltip");
        ocultar_tooltip(tooltip);
        
    } else {
        
        mostrar_tooltip(this);

    }
});

$(".tooltip_definicion").focusin(function(e){
    e.stopPropagation();
    if($(this).hasClass("tooltip_definicion_activo")){
        
        var tooltip = $(this).children("span.tooltip");
        ocultar_tooltip(tooltip);
        
    } else {

        mostrar_tooltip(this);

    }
});

$(".tooltip").mouseleave(function(e){
    e.stopPropagation();
    ocultar_tooltip(this);
});

$(".tooltip").focusout(function(e){
    e.stopPropagation();
    ocultar_tooltip(this);
});
$(".tooltip").focusin(function(e){
    e.stopPropagation();
    $(this).attr("aria-hidden", "false");
});
function mostrar_tooltip(e_tooltip){
    
    $(".tooltip_activo").removeClass("tooltip_activo");
    $(".tooltip_definicion_activo").attr("title", "" + $(".tooltip_definicion_activo").children("span.tooltip").text());
    $(".tooltip_definicion_activo").children("span.tooltip").text("");
    $(".tooltip_definicion_activo").removeClass("tooltip_definicion_activo");

    var texto = $(e_tooltip).attr("title");

    $(e_tooltip).addClass("tooltip_definicion_activo");
    $(e_tooltip).children("span.tooltip").text("" + texto);
    $(e_tooltip).children("span.tooltip").attr("aria-label", "Significa " + texto);
    $(e_tooltip).attr("title", "");
    $(e_tooltip).children("span.tooltip").attr("tabindex", "0");
    $(e_tooltip).children("span.tooltip").addClass("tooltip_activo");
    /*$(e_tooltip).children("span.tooltip").attr("aria-hidden", "false");*/
}

function ocultar_tooltip(e_tooltip){
    
    var texto = $(e_tooltip).text();

    $(e_tooltip).parent("span.tooltip_definicion").attr("title", "" + texto);
    $(e_tooltip).text("");
    $(e_tooltip).attr("tabindex", "-1");
    $(e_tooltip).removeClass("tooltip_activo");
    $(e_tooltip).parent("span.tooltip_definicion").removeClass("tooltip_definicion_activo");
}
/************************************************************************************************************************************ 
Fin del código para tooltips
************************************************************************************************************************************/


/********INICIO CUENTA REGRESIVA***************/
function cuenta_atras(){ 
        //convertí el valor de texto a numeros para poder evaluar su magintud con el "<" y ">"
	var contador_m = Number($('.minutos').html());
	var contador_s = Number($('.segundos').html());
	var abrir_alerta = Number($('.abrir_alerta').html());
	var s = $('.segundos');
	var m = $('.minutos');
	var c = $('.texto_contador');
	var alerta = abrir_alerta;
	var texto_seg = 0;
	console.log(contador_m)
	if(contador_m <= 9){
		texto = "0" + contador_m;
		if(contador_s <= 9){
		 texto_seg = ":0" +contador_s;
		}else{
			texto_seg =":" + contador_s;
		}
	}else{
		texto = contador_m;
		if(contador_s <= 9){
		 texto_seg =":0" +contador_s;
		}else{
			texto_seg =":" + contador_s;
		}
	}
	c.html(texto + texto_seg);
	
	window.setInterval(
		function(){      
			if(contador_s <= 0 && contador_m > 0){        
				contador_s = 59;
				--contador_m ;
				if(contador_m <=9){
				m.html("0" + contador_m);
				texto = "0" + contador_m;
				}else{
					m.html(contador_m);	
					texto = contador_m;
				}
			}
			if (contador_m <= 0 && contador_s <= 0){
				alert("su tiempo a acabado")
				location.reload()
			}
			if(contador_s <=9){
				s.html("0" + contador_s);
				texto_seg = ":0" + contador_s;
			}else{
				s.html(contador_s);
				texto_seg = ":" + contador_s;
			}
			$('.cerrar').attr('aria-label','le restan'+texto +' minutos con '+ (s.html()-4)+' segundos, bonton aceptar');
			c.html(texto + texto_seg);
			
			contador_s --;
			alerta --;
			console.log(alerta);
			if(alerta == 0){
				alerta = abrir_alerta;
				mostrarModal($('.ventanaAlertas'));
			}
		},
		1000);
}

$(".cuenta_atras").each(cuenta_atras)
/********FIN CUENTA REGRESIVA***************/


/*Codigo calendario
var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado ","Domingo" ]
var dia = ["L","M","Mc","J","V","S","D" ]

function crearTabla(){
	var tabla= $("<table></table>");
	for(i=0: i=5; i++){
		tabla.append("<tr></tr>")
			for(i=0; i=7; i++){

			tabla.append("<td>" +i+"</td> ")	
		}
	}

}

if($("div").hasClass("calendario")){
}

Fin*/


/************************************************************************************************************************************
Código para transcript
************************************************************************************************************************************/
$(".boton_transcript").click(function(){
    var direccion_track = $(this).siblings(".transcript").children("track").attr("src");
    $(".contenido_transcript").attr("data", direccion_track+".txt");
});

transcripts = 1;

$(".transcript").each(function(transcripts){
    var botones = '<button onclick="togglePlay(transcript'+transcripts+')" aria-label="Reproducir" class = "boton transcript_play_stop">&gt;</button>';
    botones += '<button onclick="transcript'+transcripts+'.currentTime-=0.5" aria-label="Rebobinar" class = "boton">Rebobinar</button>';
    botones += '<button onclick="transcript'+transcripts+'.currentTime+=0.5" aria-label="Avanzar" class = "boton">Avanzar</button>';
    botones += '<button onclick="transcript'+transcripts+'.muted=true" aria-label="Desactivar sonido" class = "boton">Muted</button>';
    botones += '<button onclick="transcript'+transcripts+'.muted=false" aria-label="Activar sonido" class = "boton">Sonido</button>';
    botones += '<button onclick="transcript'+transcripts+'.volume+=0.01" aria-label="Subir volumen" class = "boton">Subir volumen</button>';
    botones += '<button onclick="transcript'+transcripts+'.volume-=0.01" aria-label="Bajar volumen" class = "boton">Bajar volumen</button>';
    $(this).siblings(".transcript_controles").html(botones);
    $(this).attr("id", "transcript"+transcripts);
    transcripts ++;
});

//$(".transcript_controles").html(botones);

function togglePlay(id) {
  return id.paused ? id.play() : id.pause();
};

$(".transcript_play_stop").click(function(){
    var boton = $(this).text();
    if(boton == '&gt;' || boton == '>'){
        $(this).text("||");
        $(this).attr("aria-label", "Pausar");
    }
    if(boton == '||'){
        $(this).text(">");
        $(this).attr("aria-label", "Reproducir");
    }
});
/************************************************************************************************************************************
Fin del código para transcript
************************************************************************************************************************************/

/*-----------INICIA SECCIÓN PARA CAMBIO DE COLOR FONDO Y LETRA---------*/

  
/*-----------FIN SECCIÓN PARA CAMBIO DE COLOR FONDO Y LETRA---------*/
/*Fecha*/

function validarBisiesto(anio){
if ((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400 == 0))){

return true;
}
return false;
}


function llenarAnio() {

var a = "Año";
  $(".fecha_anio").append(new Option(a, 0,true,true));

	for (var j = 1997; j < 2018 ; j++) {
		$(".fecha_anio").append(new Option(j, j,true,true));
	
	
}
$(".fecha_anio").val(0);
}

function llenarMes() {
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];


var a = "Mes";
  $(".fecha_mes").append(new Option(a, 0,true,true));

	for (var j = 0; j < meses.length ; j++) {
		$(".fecha_mes").append(new Option(meses[j], meses[j],true,true));
	
	
}
$(".fecha_mes").val(0);
}

function llenarDia(dias,fechas) {

  var a = "Día";
  $(".fecha_dia").append(new Option(a, 0,true,true));

for (i=0; i<fechas;i++){

	for (var j = 1; j < dias+1 ; j++) {

		$(".fecha_dia")[i].append(new Option(j, j,false,true));
			}
	}

  $(".fecha_dia").val(0);
	
}

llenarAnio();
llenarMes();
llenarDia(31,$(".fecha").length);

$(".fecha_mes").change(function(event) {

  $(".fecha_dia").empty();
	
var dias=31;

	var indice= $(".fecha_mes").index(this);
	var bisiesto = $(".fecha_anio")[indice].value;
	console.log(indice);

if (this.value=="Febrero") {
dias=28;
	if(validarBisiesto(bisiesto)==true){
		dias=29;

	}
}
else if(this.value=="Abril" || this.value=="Junio" || this.value=="Septiembre" ||this.value=="Noviembre"){
	dias=30;

}

	
 var a = "Día";
  $(".fecha_dia").append(new Option(a, 0,true,true));

for (var j = 1; j < dias+1 ; j++) {

		$(".fecha_dia")[indice].append(new Option(j, j,false,true));
			}
	 $(".fecha_dia").val(0);


	});


$(".fecha_anio").change(function(event) {


  $(".fecha_dia").empty();
	
var dias=31;

	var indice= $(".fecha_anio").index(this);
	var bisiesto = $(".fecha_anio")[indice].value;
	

if ($(".fecha_mes")[indice].value=="Febrero") {
dias=28;
	if(validarBisiesto(bisiesto)==true){
		dias=29;

	}
}
else if($(".fecha_mes")[indice].value=="Abril" || $(".fecha_mes")[indice].value=="Junio" || $(".fecha_mes")[indice].value=="Septiembre" ||$(".fecha_mes")[indice].value=="Noviembre"){
	dias=30;

}

	

 var a = "Día";
  $(".fecha_dia").append(new Option(a, 0,true,true));

for (var j = 1; j < dias+1 ; j++) {

		$(".fecha_dia")[indice].append(new Option(j, j,false,true));
			}
	
 $(".fecha_dia").val(0);

	});

/*-----------INICIA SECCIÓN PARA CAMBIO DE COLOR FONDO Y LETRA---------*/
var elem_doc=document.all;
var elem_array = new Array ();
var j =0;
$(window).ready(function(){
  var ready=$("div").hasClass("cambiar_color");
  if (ready) {
    for (var i = 0; i < elem_doc.length; i++) {
      if (elem_doc[i].tagName != "HTML"){ 
      if (elem_doc[i].tagName != "HEAD" ){ 
      if (elem_doc[i].tagName != "TITLE"){ 
      if (elem_doc[i].tagName != "META"){ 
      if (elem_doc[i].tagName != "LINK"){ 
      if (elem_doc[i].tagName != "BODY"){ 
      if (elem_doc[i].tagName != "HTML"){ 
      if (elem_doc[i].tagName != "BR"){ 
      if (elem_doc[i].tagName != "SCRIPT"){
      if (elem_doc[i].tagName != "OPTION"){
      if (elem_doc[i].tagName != "DIV"){
      if (elem_doc[i].tagName != "HEADER"){
      if (elem_doc[i].tagName != "FOOTER"){
      if (elem_doc[i].tagName != "UL"){
      if (elem_doc[i].tagName != "NAV"){  
        elem_array[j] = i;
        j++;
      }}}}}}}}}}}}}}}
    }
    for (var i = 0; i < elem_array.length; i++) {
      elem_array[i]=elem_doc[elem_array[i]].tagName;
    }
    elem_array.sort();
    elem_array=$.unique(elem_array);
  }
  var elem_filtro = new Array ();
  for (var i = 0; i < elem_array.length; i++) {

    if(elem_array[i] == 'SPAN'){ $(".pag_elem").append("<option value='"+elem_array[i].toLowerCase()+"'>Renglones</option>");}
    if(elem_array[i] == 'P'){ $(".pag_elem").append("<option value='"+elem_array[i].toLowerCase()+"'>P&aacute;rrafos</option>");}
    if(elem_array[i] == 'OPTION'){ $(".pag_elem").append("<option value='"+elem_array[i].toLowerCase()+"'>Opciones</option>");}
    if(elem_array[i] == 'LI'){ $(".pag_elem").append("<option value='"+elem_array[i].toLowerCase()+"'>Elementos de lista</option>");}
    if(elem_array[i] == 'SELECT'){ $(".pag_elem").append("<option value='"+elem_array[i].toLowerCase()+"'>Seleccionables</option>");}
    if(elem_array[i] == 'BUTTON'){ $(".pag_elem").append("<option value='"+elem_array[i].toLowerCase()+"'>Botones</option>");}
    if(elem_array[i] == 'A'){ $(".pag_elem").append("<option value='"+elem_array[i].toLowerCase()+"'>Enlaces</option>");}
    if(elem_array[i] == 'LABEL'){ $(".pag_elem").append("<option value='"+elem_array[i].toLowerCase()+"'>Etiquetas</option>");}
    if(elem_array[i] == 'H5'){ $(".pag_elem").append("<option value='"+elem_array[i].toLowerCase()+"'>Subtitulo de nivel 5</option>");}
    if(elem_array[i] == 'H6'){ $(".pag_elem").append("<option value='"+elem_array[i].toLowerCase()+"'>Subtitulo de nivel 6</option>");}
  }
});
  
  $(".letra").click(function(){
    if ($(".color_letra")) {
      a="*";
        if ($("select").hasClass("pag_elem")) {
          a= $(".pag_elem").val();
            var cambioLetra = $('#colorSeleccionado').val();
            var fondoElemento = $(".pag_elem").css('background-color');
            var colorActual = [cambioLetra, fondoElemento];
          

          //Obtencion del color del elemento Y CONVERSION DE RGB A HEX
              hexc(fondoElemento);
              function hexc(colorval) {
                  var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                  delete(parts[0]);
                  for (var j = 1; j <= 3; ++j) {
                      parts[j] = parseInt(parts[j]).toString(16);
                      if (parts[j].length == 1) parts[j] = '0' + parts[j];
                  }
                  fondoElemento = '#' + parts.join('');
                  colorActual[1] = fondoElemento;
              }

            //FIN DE OBTENCION DE COLOR DEL ElEMENTO

          //CONVERSION DE HEX A RGB
            for (var i = 0; i < colorActual.length; i++) {
                var R = hexToR(colorActual[i]);
                var G = hexToG(colorActual[i]);
                var B = hexToB(colorActual[i]);

                function hexToR(colorActual) {return parseInt((cutHex(colorActual)).substring(0,2),16)}
                function hexToG(colorActual) {return parseInt((cutHex(colorActual)).substring(2,4),16)}
                function hexToB(colorActual) {return parseInt((cutHex(colorActual)).substring(4,6),16)}
                function cutHex(colorActual) {return (colorActual.charAt(0)=="#") ? colorActual.substring(1,7):colorActual}

                if (i==0) {
                  var brilloTexto = (299*R + 587*G + 114*B) / 1000;
                  var R1=R;
                  var G1=G;
                  var B1=B;
                }
                else{
                  var brilloFondo = (299*R + 587*G + 114*B) / 1000;
                  var R2=R;
                  var G2=G;
                  var B2=B;
                }
                var diferenciaBrillo = brilloFondo - brilloTexto;
                if (diferenciaBrillo < 0) {
                  diferenciaBrillo = diferenciaBrillo*(-1);
                }
                var diferenciaColor = (R2-R1)+(G2-G1)+(B2-B1);
                if (diferenciaColor < 0) {
                  diferenciaColor = diferenciaColor*(-1);
                }
            }
          //FIN DE LA CONVERSION
        
        }
        if (diferenciaBrillo < 125){
          if(diferenciaColor < 500){
            var r = confirm(("El color de letra no es accesible con el de fondo, para continuar presione Ok"));
             if (r == true) {
              $("#color_letra").html("El color de letra actual es "+cambioLetra);
              $(a).css("color", cambioLetra);
              colorElemento = colorActual;
             }
             else{
              stop;
             }
      }
        } 
        else{$("#color_letra").html("El color de letra actual es "+cambioLetra);
          $(a).css("color", cambioLetra);
          colorElemento = colorActual;
    } 
    }});


  $(".fondo").click(function(){
    if ($(".color_fondo")) {
      a="*";
        if ($("select").hasClass("pag_elem")) {
          a= $(".pag_elem").val();
            var cambioFondo = $('#fondoSeleccionado').val();
            var letraElemento = $(".pag_elem").css('color');
            var colorActual = [letraElemento, cambioFondo];

          //Obtencion del color del elemento Y CONVERSION DE RGB A HEX
              hexc(letraElemento);
              function hexc(colorval) {
                  var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                  delete(parts[0]);
                  for (var j = 1; j <= 3; ++j) {
                      parts[j] = parseInt(parts[j]).toString(16);
                      if (parts[j].length == 1) parts[j] = '0' + parts[j];
                  }
                  letraElemento = '#' + parts.join('');
                  colorActual[0] = letraElemento;
              }

            //FIN DE OBTENCION DE COLOR DEL ElEMENTO

          //CONVERSION DE HEX A RGB
            for (var i = 0; i < colorActual.length; i++) {
                var R = hexToR(colorActual[i]);
                var G = hexToG(colorActual[i]);
                var B = hexToB(colorActual[i]);

                function hexToR(colorActual) {return parseInt((cutHex(colorActual)).substring(0,2),16)}
                function hexToG(colorActual) {return parseInt((cutHex(colorActual)).substring(2,4),16)}
                function hexToB(colorActual) {return parseInt((cutHex(colorActual)).substring(4,6),16)}
                function cutHex(colorActual) {return (colorActual.charAt(0)=="#") ? colorActual.substring(1,7):colorActual}

                if (i==0) {
                  var brilloTexto = (299*R + 587*G + 114*B) / 1000;
                  var R1=R;
                  var G1=G;
                  var B1=B;
                }
                else{
                  var brilloFondo = (299*R + 587*G + 114*B) / 1000;
                  var R2=R;
                  var G2=G;
                  var B2=B;
                }
                var diferenciaBrillo = brilloFondo - brilloTexto;
                if (diferenciaBrillo < 0) {
                  diferenciaBrillo = diferenciaBrillo*(-1);
                }
                var diferenciaColor = (R2-R1)+(G2-G1)+(B2-B1);
                if (diferenciaColor < 0) {
                  diferenciaColor = diferenciaColor*(-1);
                }
            }

          //FIN DE LA CONVERSION
        
        }
        if (diferenciaBrillo < 125){
          if(diferenciaColor < 500){
            var r = confirm(("El color de fondo no es accesible con el de la letra, para continuar presione Ok"));
             if (r == true) {
              $("#color_fondo").html("El color de letra actual es "+cambioFondo);
              $(a).css("background-color", cambioFondo);
             }
             else{
              stop;
             }
      }
        } 
        else{$("#color_fondo").html("El color de letra actual es "+cambioFondo);
          $(a).css("background-color", cambioFondo);
    } 
    }});
  
/*-----------FIN SECCIÓN PARA CAMBIO DE COLOR FONDO Y LETRA---------*/


/*Fin fecha*/

/*****Validacion Formulario*/
  function corregir(id){
      $('#'+id).focus();
    }
    

    $( "#btn_submit" ).submit(function( event ) {
      event.preventDefault();
      var html_final = "";

      if ( $('#inputText').val() == "" ) {
          html_final += '<li><a href="javascript:corregir(\'inputText\');" class="link_error vacio">Falta completar el campo [Nombre del campo]. Ejemplo: [Ejemplo de como deberia ser]</a></li>';
        }

        if ( $('#inputEmail').val() == "" ) {
          html_final += '<li><a href="javascript:corregir(\'inputEmail\');" class="link_error vacio">Falta completar el campo Dirección de correo electrónico. Ejemplo: [usuaio@dominio.com.mx]</a></li>';
        }

        
        if ( $('#inputContrasena').val() == "" ) {
           html_final += '<li><a href="javascript:corregir(\'inputContrasena\');" class="link_error vacio">Es necesario introducir una contraseña.</a></li>';
        }
        
        if ( $('#inputArchivo').val() == "" ) {
           html_final += '<li><a href="javascript:corregir(\'inputArchivo\');" class="link_error vacio">Es necesario seleccionar un archivo.</a></li>';
        }
        
        if ( $('#textArea').val() == "" ) {
           html_final += '<li><a href="javascript:corregir(\'textArea\');" class="link_error vacio">Es necesario introducir texto para el Comentario.</a></li>';
        }
        
        if ( $('#busqueda').val() == "" ) {
           html_final += '<li><a href="javascript:corregir(\'busqueda\');" class="link_error vacio">Es necesario introducir texto para realizar la busqueda.</a></li>';
        }
      
        if ( $('#url').val() == "" ) {
           html_final += '<li><a href="javascript:corregir(\'url\');" class="link_error vacio">Es necesario introducir el url.</a></li>';
        }
        
        if ( $('.form_control_tel1#tel').val() == "" ) {
           html_final += '<li><a href="javascript:corregir(\'tel\');" class="link_error vacio">Es necesario introducir los primeros tres digitos del teléfono celular.</a></li>';
        }

        if ( $('.form_control_tel2#tel').val() == "" ) {
           html_final += '<li><a href="javascript:corregir(\'tel2\');" class="link_error vacio">Es necesario introducir los diez digitos del teléfono celular.</a></li>';
        }
        if( $('#r1').prop('checked') || $('#r2').prop('checked') || $('#r3').prop('checked') || $('#r4').prop('checked') ) {
          
      
      }else{
        html_final += '<li><a href="javascript:corregir(\'cb1\');" class="link_error vacio">Es necesario seleccionar al menos una opción.</a></li>';
      }
      if( $('#cb1').prop('checked') || $('#cb2').prop('checked') || $('#cb3').prop('checked') || $('#cb4').prop('checked') ) {
          
      
      }else{
        html_final += '<li><a href="javascript:corregir(\'r1\');" class="link_error vacio">Es necesario seleccionar al menos una opción.</a></li>';
      }
      if( $('#lineacb1').prop('checked') || $('#lineacb2').prop('checked') || $('#lineacb3').prop('checked') || $('#lineacb4').prop('checked') ) {
          
      
      }else{
        html_final += '<li><a href="javascript:corregir(\'lineacb1\');" class="link_error vacio">Es necesario seleccionar al menos una opción.</a></li>';
      }
      if( $('#linear1').prop('checked') || $('#linear2').prop('checked') || $('#linear3').prop('checked') || $('#linear4').prop('checked') ) {
          
      
      }else{
        html_final += '<li><a href="javascript:corregir(\'linear1\');" class="link_error vacio">Es necesario seleccionar al menos una opción.</a></li>';
      }
      if ($(".fecha_dia").val() == 0 || $(".fecha_anio").val() == 0 || $(".fecha_mes").val() == 0){
        html_final += '<li><a href="javascript:corregir(\'fecha1\');" class="link_error vacio">Es necesario introducir una Fecha.</a></li>';
      }




        if (html_final != "") {

          $('span.validacion').html('<h3>Lista de errores</h3><ul>' + html_final + '</ul>');
          $('span.validacion').css("display", "block");
          $('span.validacion').focus();

        }
        else {  

         enviar();

        }



    }); 


	/*******************************************************/

 
	
	/*CONTADOR DE CARACTERES*/

var timer;
$('.contadorTextArea').on('input propertychange', contadorEntradas);

function contadorEntradas() {
    $('.contadorNumero').text(140 - $('.contadorTextArea').val().length);
    clearTimeout(timer);
    timer = setTimeout( function() {
         $('.entradasActuales').text((140 - $('.contadorTextArea').val().length) + ' caracteres restantes.');
    }, 2000);
      }

/*FIN CONTADOR DE CARACTERES*/


/************Cambio de contraste*********************/
//Función para cambiar los colores claros a un contraste oscuro
function contrasteNegro(elemento){
	$(elemento).toggleClass("contrasteTextoNegro");

	if($(elemento).hasClass("contrasteTextoBlanco")){
	  $(elemento).removeClass("contrasteTextoNegro");
	  $(elemento).removeClass("contrasteTextoBlanco");
	}
}

//Función para cambiar los colores oscuros a un contraste claro
function contrasteBlanco(elemento){
	$(elemento).toggleClass("contrasteTextoBlanco");

	if($(elemento).hasClass("contrasteTextoNegro")){
		$(elemento).removeClass("contrasteTextoBlanco");
		$(elemento).removeClass("contrasteTextoNegro");
	}
}

//Transforma el RGB a HSL para poder manipular el brillo del color.
function rgbToHsl(r, g, b){
	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

	if(max == min){
		h = s = 0; 
	}else{
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch(max){
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}
	return [h, s, l];
}

$('button.cambioContraste').click(function(){

    $("img.cambio_contraste").toggleClass("escalaDeGrisesImagenes"); //Cambia el color de las imágenes a blanco y negro.

	//Cambia el color de los textos a un contraste contrario, blanco y negro, por cada elemento que contenga la clase cambio_contraste
    $(".cambio_contraste").not("img").each(function(){

		var colorLetra = $(this).css("color");  //Variable que almacena el RGB del texto

		var colorRGB = colorLetra.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/); //Aisla los números individuales de la codificación RGB

		var Rcolor = colorRGB[1]; //Color rojo
		var Gcolor = colorRGB[2]; //Color verde
		var Bcolor = colorRGB[3]; //Color azul

		var hsl = rgbToHsl(Rcolor, Gcolor, Bcolor); //Transforma el RGB a HSL para poder manipular el brillo del color.

		if(hsl[2] < 0.50){
			contrasteBlanco(this);
		} else{
			contrasteNegro(this);
		}
    });
});
/**********Fin de cambio de contraste***************/

/**********funcion de pasqui para formulario***************/

$('.toggle').click(function(){
    $('.formulario').animate({
     height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toogle'
    }, "slow");
});


