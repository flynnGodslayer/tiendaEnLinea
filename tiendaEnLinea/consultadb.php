<?php  
include_once 'conexion.php';

$sql = "SELECT
    U.playeraequipo,
    U.playeraprecio
FROM
    playeras U
;";

$playeras = queryPSQL($sql);
?>
<script src = "lib/jquery-3.1.1.min.js"></script>
         <?php
            while ($playera = pg_fetch_assoc($playeras)) :
        ?>
            <article class="playera alinear_centro">
                    <img src="img/tigres.jpg" class="camisa">
                <p>
                       <?php echo $playera['playeraequipo']; ?>
                       <br/>
                       $<?php echo $playera['playeraprecio']; ?>
                </p>    
                    <button type="button" class="boton">Comprar</button>
            </article>
        <?php
            endwhile;
        ?>