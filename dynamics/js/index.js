let link = document.createElement('link');
link.rel = 'stylesheet';
link.href = './statics/styles/index.css';
document.head.appendChild(link);


function Victoria() {

}
function Respuesta() {

}
function Pregunta() {

}
function Juego(player1, player2) {
    const contenedor = document.body;
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
    console.log("Nombre del jugador 1: " + player1);
    console.log("Nombre del jugador 2: " + player2);
}
function iniciar() {
    const contenedor = document.body;

    const header = document.createElement("header");

    const h2 = document.createElement("h2");
    h2.id = "welcome";
    h2.textContent = "¡Que tal! Bienvenidx a";

    const h1 = document.createElement("h1");
    h1.id = "titulo";
    h1.textContent = "PREGUNTADOS 2";

    header.appendChild(h2);
    header.appendChild(h1);
    contenedor.appendChild(header);

    const playersSection = document.createElement("section");
    playersSection.id = "players";

    const player1Div = document.createElement("div");
    player1Div.className = "playerImage";
    player1Div.id = "player1";

    const player1Img = document.createElement("img");
    player1Img.src = "https://www.clipartmax.com/png/full/467-4674712_six-of-them-representing-each-of-the-categories-personaje-de-ciencia-preguntados.png";
    player1Img.alt = "matrazverde";
    player1Img.width = "180";
    player1Img.height = "400";

    const player1InputDiv = document.createElement("div");
    const player1Input = document.createElement("input");
    player1Input.id = "play1";
    player1Input.type = "text";
    player1Input.placeholder = "JUGADOR 1";

    player1InputDiv.appendChild(player1Input);
    player1Div.appendChild(player1Img);
    player1Div.appendChild(player1InputDiv);

    const player2Div = document.createElement("div");
    player2Div.className = "playerImage";
    player2Div.id = "player2";

    const player2Img = document.createElement("img");
    player2Img.src = "https://www.seekpng.com/png/full/30-302967_sword-preguntados-personaje-entretenimiento.png";
    player2Img.alt = "espada";
    player2Img.width = "180";
    player2Img.height = "400";

    const player2InputDiv = document.createElement("div");
    const player2Input = document.createElement("input");
    player2Input.id = "play2";
    player2Input.type = "text";
    player2Input.placeholder = "JUGADOR 2";

    player2InputDiv.appendChild(player2Input);
    player2Div.appendChild(player2Img);
    player2Div.appendChild(player2InputDiv);

    playersSection.appendChild(player1Div);
    playersSection.appendChild(player2Div);
    contenedor.appendChild(playersSection);

    const playBtn = document.createElement("button");
    playBtn.id = "playBtn";
    playBtn.textContent = "Iniciar el juego";
    playBtn.addEventListener("click", () => {
        const player1 = document.getElementById("play1").value;
        const player2 = document.getElementById("play2").value;
        if (player1 == "" || player2 == "") {
            alert("Debes ingresar un nombre para cada jugador");
        } else {
           Juego(player1, player2); 
        }
    });

    contenedor.appendChild(playBtn);
}

window.onload = iniciar;
