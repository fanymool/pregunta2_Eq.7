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
function generarRespaldo()
{
$command = "mysqldump -u" . USER . " -p" . PASS . " " . DB . " > " . RUTA.nRespaldo;

system($command, $output);

if ($output !== 0) {
echo 'Ocurrió un error al crear el respaldo de la base de datos.';
}
}