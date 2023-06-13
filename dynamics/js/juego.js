import { Pregunta } from './preguntas.js';
import { getMateriasObtenidas } from './preguntas.js';
import { materiasObtenidasPlayer1, materiasObtenidasPlayer2 } from './datos.js';

let jugadorActual = 'player1';

export function Juego(player1, player2) {
    let materiaSeleccionada;

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
    h3Player1.textContent = "Materias obtenidas: ";
    const pPlayer1 = document.createElement("p");
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
    button.addEventListener('click', function() {
        timerId = setInterval(function() {
            button.disabled = true;
            materiaSeleccionada = materias[Math.floor(Math.random() * materias.length)];
            p.textContent = "Materia seleccionada: " + "\n" + materiaSeleccionada;
        }, 100);
        setTimeout(function() {
            clearInterval(timerId);
            button.disabled = false;
            Pregunta(materiaSeleccionada, jugadorActual, pPlayer1, pPlayer2, h1);
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
    player2Section.appendChild(h2Player2);
    player2Section.appendChild(h3Player2);
    player2Section.appendChild(pPlayer2);

    //NO MODIFICAR
    main.appendChild(player1Section);
    main.appendChild(ruletaSection);
    main.appendChild(player2Section);

    contenedor.appendChild(main);
}
