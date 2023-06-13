let datos = [];
let materiasObtenidasPlayer1 = [];
let materiasObtenidasPlayer2 = [];

export async function cargarDatos() {
    const response = await fetch('./dynamics/php/recuperarDatos.php');
    const data = await response.json();
    datos = data;
}

export { datos, materiasObtenidasPlayer1, materiasObtenidasPlayer2 };
