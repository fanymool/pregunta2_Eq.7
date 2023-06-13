let link = document.createElement('link');
link.rel = 'stylesheet';
link.href = './statics/styles/principal.css';
document.head.appendChild(link);
function Victoria() {

}
function Respuesta() {

}
function Pregunta(materia) {
    console.log("La materia seleccionada es: " + materia); //Funciona
}
function Juego(player1, player2) {
    // Esta es para eliminar a todos los hijos del contenedor y limpiar la pantalla
    const contenedor = document.body;
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = './statics/styles/juego.css';
    document.head.appendChild(link);

    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Turno de: " + player1;
    header.appendChild(h1);
    contenedor.appendChild(header);

    const main = document.createElement("main");

    const player1Section = document.createElement("section");
    player1Section.id = "player1";
    const h2Player1 = document.createElement("h2");
    h2Player1.textContent = "Player 1: " + player1;
    const h3Player1 = document.createElement("h3");
    h3Player1.textContent = "Materias obtenidas";
    const pPlayer1 = document.createElement("p");
    pPlayer1.textContent = "Matemáticas: Obtenida";
    player1Section.appendChild(h2Player1);
    player1Section.appendChild(h3Player1);
    player1Section.appendChild(pPlayer1);

    const ruletaSection = document.createElement("section");
    ruletaSection.id = "ruleta";
    const p = document.createElement("p");
    p.textContent = "random ruleta";
    const materias = ["Matemáticas", "Física", "Química", "Psicología", "Literatura", "Computación"];
    let timerId;
    const button = document.createElement("button");
    button.id = "girar";
    button.textContent = "Girar";
    button.addEventListener('click', function(){
        timerId = setInterval(function() {
            button.disabled = true;
            materiaSeleccionada = materias[Math.floor(Math.random() * materias.length)];
            p.textContent = "Materia seleccionada: " + "\n" + materiaSeleccionada;
        }, 100);
        setTimeout(function() {
            clearInterval(timerId);
            button.disabled = false;
            Pregunta(materiaSeleccionada);
        }, 5000);
    });

    ruletaSection.appendChild(p);
    ruletaSection.appendChild(button);

    const player2Section = document.createElement("section");
    player2Section.id = "player2";
    const h2Player2 = document.createElement("h2");
    h2Player2.textContent = "Player 2: " + player2;
    const h3Player2 = document.createElement("h3");
    h3Player2.textContent = "Materias obtenidas";
    const pPlayer2 = document.createElement("p");
    pPlayer2.textContent = "Historia: Obtenida";
    player2Section.appendChild(h2Player2);
    player2Section.appendChild(h3Player2);
    player2Section.appendChild(pPlayer2);

    //Necesario para el acomodo de las partes del juego
    //NO MODIFICAR
    main.appendChild(player1Section);  // Primero player1Section
    main.appendChild(ruletaSection);  // Luego ruletaSection
    main.appendChild(player2Section);  // Finalmente player2Section

    contenedor.appendChild(main);
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
    player1Img.width = 180;
    player1Img.height = 400;

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
    player2Img.width = 180;
    player2Img.height = 400;

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
        if (player1 === "" || player2 === "") {
            alert("Debes ingresar un nombre para cada jugador");
        } else {
            Juego(player1, player2);
        }
    });

    contenedor.appendChild(playBtn);
}

window.onload = iniciar;
