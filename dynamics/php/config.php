<?php
    const DBHOST = "localhost";
    const DBUSER = "root";
    const DBPASS = "";
    const DBNAME = "preguntados";

    function connect(){
        $conexion = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);
        return $conexion;
    }
?>
<!-- require "config.php";
    $conexion = connect();
    if(!$conexion){
        echo "No se pudo conectar con la base de datos";
    }else{} -->