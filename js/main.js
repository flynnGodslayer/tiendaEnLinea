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

/*carrusel*/
var timer = 3000;
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
var timer_imagen = 3000;
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

