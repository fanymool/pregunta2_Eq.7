<?php
$include = require("./config.php");
$con = connect();

$data = array();

if($include && $con) {
    $sql = "SELECT * FROM Materias";
    $query = mysqli_query($con, $sql);

    while($row = mysqli_fetch_assoc($query))  {
        $materia = $row;
        $id_materia = $row["id_materia"];

        $sql_preguntas = "SELECT * FROM Preguntas WHERE id_materia = $id_materia";
        $query_preguntas = mysqli_query($con, $sql_preguntas);

        while($row_pregunta = mysqli_fetch_assoc($query_preguntas)) {
            $pregunta = $row_pregunta;
            $id_pregunta = $row_pregunta["id_pregunta"];

            $sql_respuestas = "SELECT * FROM Respuestas WHERE id_pregunta = $id_pregunta AND boolCorrect = 1";
            $query_respuestas = mysqli_query($con, $sql_respuestas);

            while($row_respuesta = mysqli_fetch_assoc($query_respuestas)) {
                $pregunta['respuesta_correcta'] = $row_respuesta['respuesta'];
            }

            $sql_respuestas = "SELECT * FROM Respuestas WHERE id_pregunta = $id_pregunta";
            $query_respuestas = mysqli_query($con, $sql_respuestas);

            while($row_respuesta = mysqli_fetch_assoc($query_respuestas)) {
                $pregunta['respuestas'][] = $row_respuesta;
            }

            $materia['preguntas'][] = $pregunta;
        }

        $data[] = $materia;
    }
}

echo json_encode($data);

