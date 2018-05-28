<!DOCTYPE HTML>
<html>
<head>
<title>Genera compra</title>
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
$equipo = filter_var($_POST['equipo'], FILTER_SANITIZE_STRING);
$marca = filter_var($_POST['marca'], FILTER_SANITIZE_STRING);
$talla = filter_var($_POST['talla'], FILTER_SANITIZE_STRING);
$categoria = filter_var($_POST['categoria'], FILTER_SANITIZE_STRING);
$temporada = filter_var($_POST['temporada'], FILTER_SANITIZE_STRING);
$precio = filter_var($_POST['precio'], FILTER_SANITIZE_NUMBER_FLOAT);
$piezas = filter_var($_POST['piezas'], FILTER_SANITIZE_NUMBER_INT);

//Imprimir datos ingresados
echo "<h2>Registro</h2>Playera del equipo: ".$equipo
echo "<br>Marca: ".$marca;
echo "<br>Talla: ".$talla;
echo "<br>Categoria: ".$categoria;
echo "<br>Temporada: ".$temporada;
echo "<br>Precio: ".$precio;
echo "<br>Piezas compradas: ".$piezas."<br><br>";


//Validar formularios
if ($equipo) {
	if(!preg_match('/^()[A-ZÁÉÍÓÚÜÑa-záéíóúüñ][a-záéíóúüñ]+(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñ]+)*$/',$equipo)){
		echo "Error: Nombre de invalido<br>";
		$err = 1;
	}
} else{
	echo "El campo de nombre no puede ir vacio<br>";
	$err = 1;
}

if ($marca) {
	if (!preg_match('/^()[A-ZÁÉÍÓÚÜÑa-záéíóúüñ][a-záéíóúüñ]+(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñ]+)*$/',$marca)) {
		echo "Error: Nombre e marca invalida<br>";
		$err = 1;
	}
} else{
	echo "El campo marca no puede ir vacio<br>";
	$err = 1;
}
if ($talla) {
	if (!preg_match('/^()[A-Za-z][a-z]+(\s[A-Z]?[a-z]+)*$/',$talla)) {
		echo "Error: talla invalida<br>";
		$err = 1;
	}
}

 if ($categoria) {
	if (!preg_match('/^()[A-Za-z][a-z]+(\s[A-Z]?[a-z]+)*$/',$categoria)) {
		echo "Error: El nombre de la categoria no es válido<br>";
		$err = 1;
	}
}
   
if ($temporada) {
	if (!preg_match('/^()[A-ZÁÉÍÓÚÜÑa-záéíóúüñ][a-záéíóúüñ]+(\s[A-ZÁÉÍÓÚÜÑ]?[a-záéíóúüñ]+)*$/',$temporada)) {
		echo "Error: El nombre de la colonia no es válido<br>";
		$err = 1;
	}
}  

if ($precio) {
	if (!preg_match('/[0-9]{1,4}/',$precio)) {
		echo "Error: precio incorrecto<br>";
		$err = 1;
	}
} else{
	echo "El precio no puede ir vacio<br>";
	$err = 1;
}

if ($piezas) {
	if (!preg_match('/[0-9]{1,4}/',$piezas)) {
		echo "Error: número de piezas incorrecto<br>";
		$err = 1;
	}
} else{
	echo "El número de piezas no puede ir vacio<br>";
	$err = 1;
}

//Insertar datos a db si no hubo errores en caso contrario indicar el error
if ($err == 0) {
	//Asignar query a variable (se agrego user_name y password para no romper la funcionalidad con los cambios en la bd)
	$query = ("INSERT INTO playeras (playeraequipo, playeramarca,playeratalla,playeracategoria,playeratemporada,playeraprecio,playeraexistencias) VALUES ('$equipo','$marca','$talla','$categoria','$temporada','$precio','$piezas')");
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
<form action="http://www.registro.unam.mx/registro.php">
    <input type="submit" value="Regresar al formulario" />
</form>
</body>
</html>
