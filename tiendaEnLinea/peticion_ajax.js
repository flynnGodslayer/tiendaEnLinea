$(document).ready(function(){

	$("#mostrar").click(function(){

		$.get("consultadb.php", function(data, status){

			$("#playeras").html(data);

		});

	});

});