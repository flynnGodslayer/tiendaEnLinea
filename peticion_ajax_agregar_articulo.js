$(document).ready(function(){

	$("dos").click(function(){

		$.get("createdb.php", function(data, status){

			$("#2").html(data);

		});

	});

});