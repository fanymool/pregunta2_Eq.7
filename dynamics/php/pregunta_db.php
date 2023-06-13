<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./statics/styles/preguntas.css">
    <title>Document</title>
</head>
<body>
    <?php
        $include = include("./config.php");
        $con = connect();

        $preguntas_id = array();

        if($include && $con)
        {
            $ID_MATERIA = 1; //<----Aqui setendra q agreagar la materia que le toco al jugador

            $sql = "SELECT id_pregunta FROM preguntas WHERE id_materia = $ID_MATERIA";
            $query = mysqli_query($con, $sql);
            $row = mysqli_fetch_assoc($query);//<----------Primer peticion a la base de datos
            
            while($row = mysqli_fetch_assoc($query))  
            {
                $preguntas_id[]=$row["id_pregunta"];//<------------Aqui se guardan los id de las preguntas que coincidan con la materia 
            }
            $npreguntas=count($preguntas_id);//<-----------Cuenta el numero de id_preguntas que se guardaron
            $npreguntas=$npreguntas-1;
                
            // for($i=0; $i<$npreguntas; $i++)//<-------Sirve para desplegar todas las preguntas de la materia 
            // {
            //     $sql = "SELECT pregunta FROM preguntas WHERE ID_PREGUNTA = $preguntas_id[$i]";
            //     $query = mysqli_query($con, $sql);
            //     $row = mysqli_fetch_assoc($query);
            //     echo $row["pregunta"]."<br>";
            //     $sql = "SELECT * FROM respuestas WHERE ID_PREGUNTA = $preguntas_id[$i]";
            //     $query = mysqli_query($con, $sql);
            //     $row = mysqli_fetch_assoc($query);
            //     $nrespuesta = $row["id_respuesta"];//<-----------------Aqui se guardan todas las respuestas que tiene cada pregunta
            //     for($e=0; $e<=3; $e++)
            //     {
            //         $sql = "SELECT * FROM respuestas WHERE id_respuesta = $nrespuesta";
            //         $query = mysqli_query($con, $sql);
            //         $row = mysqli_fetch_assoc($query);
            //         echo " .- ".$row["respuesta"]." - ".$row["boolCorrect"]."<br>";//<---------Despliega la respuesta a la pregunta e indica si es la corrcecta o no 
            //         $nrespuesta=$nrespuesta+1;//<----------Sirve para cambiar a la siguuiente respuesta
            //     }
            //     echo '<br>';
            // }   

            $sql = "SELECT pregunta FROM preguntas WHERE ID_PREGUNTA = $preguntas_id[0]";
            $query = mysqli_query($con, $sql);
            $row = mysqli_fetch_assoc($query);
            $pregunta = $row["pregunta"];
            
            $sql = "SELECT * FROM respuestas WHERE ID_PREGUNTA = $preguntas_id[0]";
            $query = mysqli_query($con, $sql);
            $row = mysqli_fetch_assoc($query);
            $nrespuesta = $row["id_respuesta"];

            $resp = array();
            $corr = array();
            for($e=0; $e<=3; $e++)
            {
                $sql = "SELECT * FROM respuestas WHERE id_respuesta = $nrespuesta";
                $query = mysqli_query($con, $sql);
                $row = mysqli_fetch_assoc($query);
                $resp[$e]=$row["respuesta"]; 
                $corr[$e]=$row["boolCorrect"];
                $nrespuesta=$nrespuesta+1;
            }
            
            // json_encode($pregunta);
            // echo json_encode($pregunta);

            echo '
                <div class="preguntass">
                    <h1>'.$pregunta.'</h1>
                    <div class="preguntas">
                        <h2 id="resp1" onclick="funcion'.$corr[0].'()" class="pregunta"> 1) '.$resp[0].' <br> </h2>
                        <h2 id="resp2" onclick="funcion'.$corr[1].'()" class="pregunta"> 2) '.$resp[1].' <br> </h2>
                        <h2 id="resp3" onclick="funcion'.$corr[2].'()" class="pregunta"> 3) '.$resp[2].' <br> </h2>
                        <h2 id="resp4" onclick="funcion'.$corr[3].'()" class="pregunta"> 4) '.$resp[3].' <br> </h2>
                    </div>
                </div>
                <script>
                    function funcion0() {
                        alert("Incorrecto");
                    }
                    function funcion1() {
                        alert("Correcto");
                    }      
                </script>
            ';
        }
    ?>
</body>
</html>
