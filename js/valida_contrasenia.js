$(document).ready(function(){
    
    $('#confirma_contrasenia').keyup(function(){
        var pass1 = $('#contrasenia').val();    
        var pass2 = $('#confirma_contrasenia').val();
        if (pass2 == pass1){
            $('#error').text("Contraseña correcta").css("color","green");
        }else{
             $('#error').text("La contraseña no coincide").css("color","red");
        }
    });
});