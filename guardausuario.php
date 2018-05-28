<!DOCTYPE HTML>
<html>
<head>
<title>Alta Registro</title>
</head>
<body>
<?php
//Incluir archivo php de conexiòn
include 'conexion.php';

//Asignar funcion de conectar a una variable para conectar a la bd
$conn = conectar();

//Declaraciòn de variable para control de errores con los formularios
$err = 0;

if($conn){
	echo 'conectado';
} else {
	echo 'error en la conexion';
}

//Sanitizar los formularios (quitar caracteres especiales o no pertenecientes al tipo de campo)
$nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
$apellidoP = filter_var($_POST['apellidoP'], FILTER_SANITIZE_STRING);
$apellidoM = filter_var($_POST['apellidoM'], FILTER_SANITIZE_STRING);
$calle = filter_var($_POST['calle'], FILTER_SANITIZE_STRING);
$numint = filter_var($_POST['numint'], FILTER_SANITIZE_STRING);
$numext = filter_var($_POST['numext'], FILTER_SANITIZE_STRING);
$colonia = filter_var($_POST['colonia'], FILTER_SANITIZE_STRING);
$cp = filter_var($_POST['cp'], FILTER_SANITIZE_STRING);
$delegacion = filter_var($_POST['delegacion'], FILTER_SANITIZE_STRING);
$telefono = filter_var($_POST['telefono'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$usuario = filter_var($_POST['usuario'], FILTER_SANITIZE_STRING);
$contrasenia = filter_var($_POST['contrasenia'], FILTER_SANITIZE_STRING);



//Imprimir datos ingresados
echo "<h2>Registro</h2>Nombre: ".$nombre;
echo "<br>Apellido paterno: ".$apaterno;
echo "<br>Apellido materno: ".$amaterno;
echo "<br>Telèfono: ".$telefono;
echo "<br>Correo: ".$correo."<br><br>";


//Validar formularios
if ($nombre) {
	if(!preg_match('/^()[A-ZÁÉÍÓÚÜÑa-záéíóúüñ][a-záéíóúüñ]+(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñ]+)*$/',$nombre)){
		echo "Error: Nombre invalido<br>";
		$err = 1;
	}
} else{
	echo "El campo de nombre no puede ir vacio<br>";
	$err = 1;
}

if ($apellidoP) {
	if (!preg_match('/^()[A-ZÁÉÍÓÚÜÑa-záéíóúüñ][a-záéíóúüñ]+(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñ]+)*$/',$apellidoP)) {
		echo "Error: Apellido paterno invalido<br>";
		$err = 1;
	}
} else{
	echo "El campo de nombre no puede ir vacio<br>";
	$err = 1;
}
if ($apellidoM) {
	if (!preg_match('/^()[A-ZÁÉÍÓÚÜÑa-záéíóúüñ][a-záéíóúüñ]+(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñ]+)*$/',$apellidoM)) {
		echo "Error: Apellido materno invalido<br>";
		$err = 1;
	}
}

 if ($calle) {
	if (!preg_match('/^()[A-ZÁÉÍÓÚÜÑa-záéíóúüñ][a-záéíóúüñ]+(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñ]+)*$/',$calle)) {
		echo "Error: El nombre de la calle no es válido<br>";
		$err = 1;
	}
}
   
if ($colonia) {
	if (!preg_match('/^()[A-ZÁÉÍÓÚÜÑa-záéíóúüñ][a-záéíóúüñ]+(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñ]+)*$/',$colonia)) {
		echo "Error: El nombre de la colonia no es válido<br>";
		$err = 1;
	}
}  

if ($cp) {
	if (!preg_match('/[0-9]{1,5}/',$cp)) {
		echo "Error: Código postal invalido<br>";
		$err = 1;
	}
} else{
	echo "El Código postal no puede ir vacio<br>";
	$err = 1;
}

if ($numint) {
	if (!preg_match('/[0-9]{1,6}/',$numint)) {
		echo "Error: número invalido<br>";
		$err = 1;
	}
} else{
	echo "El número interior no puede ir vacio<br>";
	$err = 1;
}

if ($numext) {
	if (!preg_match('/[0-9]{1,6}/',$numext)) {
		echo "Error: número invalido<br>";
		$err = 1;
	}
} else{
	echo "El número exterior no puede ir vacio<br>";
	$err = 1;
}
    
if ($telefono) {
	if (!preg_match('/[0-9]{8,12}/',$telefono)) {
		echo "Error: Telèfono invalido<br>";
		$err = 1;
	}
} else{
	echo "El campo de telèfono no puede ir vacio<br>";
	$err = 1;
}
if ($email) {
	if (!preg_match('/^[a-zA-Z][a-zA-Z0-9_\-]?(\.?[a-zA-Z0-9_\-])+@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/',$email)) {
		echo "Error: Correo invalido<br>";
		$err = 1;
	}
} else{
	echo "El campo de correo no puede ir vacio<br>";
	$err = 1;
}
   

//Insertar datos a db si no hubo errores en caso contrario indicar el error
if ($err == 0) {
	//Asignar query a variable (se agrego user_name y password para no romper la funcionalidad con los cambios en la bd)
	$query = ("INSERT INTO usuarios (clientenombre,clienteapellidop,clienteapellidom,clientetelefono,clientecalle,clientecp,clientecolonia,clientenumint,clientenumext,clienteusuario,clientepassword,clienteemail,clientedelegacion) VALUES ('$nombre','$apellidoP','$apellidoM','$telefono','$calle','$cp','$colonia','$numint','$numext','$usuario','md5($contrasenia)','$email','$delegacion')");
	//Ejecutar query llamando la variable de conexiòn a la bd
	$process = pg_query($conn, $query);
	//Informar si la query se ejecuto o no
	if  (!$process) {
	   echo "<br>No se pudo realizar el registro";
	}
	else {
	   echo "<br>El registro se ha realizado exitosamente";
	}
} else{
	echo "<br>El registro no se puede realizar por que algunos de los datos no son validos, vuelva a intentarlo";

}

//Cerrar la conexion a la bd
pg_close($conn);
?>
<br><br>
<!--<form action="http://www.registro.unam.mx/registro.php">
    <input type="submit" value="Regresar al formulario" />
</form> -->
</body>
</html>
