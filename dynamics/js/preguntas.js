import { datos, materiasObtenidasPlayer1, materiasObtenidasPlayer2 } from './datos.js';

export function Pregunta(nMateria, jugadorActual, pPlayer1, pPlayer2, h1) {
    const materia = datos.find(materia => materia.materia === nMateria);
    if (!materia) {
        console.error(`No se encontró ninguna materia con el nombre "${nMateria}"`);
        return;
    }

    const preguntas = materia.preguntas;
    const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];

    mostrarPregunta(pregunta, materia, jugadorActual, pPlayer1, pPlayer2, h1);
}

function mostrarPregunta(pregunta, materia, jugadorActual, pPlayer1, pPlayer2, h1) {
    const blur = document.createElement('div');
    blur.style.position = 'fixed';
    blur.style.top = 0;
    blur.style.left = 0;
    blur.style.width = '100%';
    blur.style.height = '100%';
    blur.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    document.body.appendChild(blur);

    const popup = document.createElement('div');
    popup.className = 'popup';

    const preguntaElem = document.createElement('p');
    preguntaElem.textContent = pregunta.pregunta;
    popup.appendChild(preguntaElem);

    for (let i = 0; i < pregunta.respuestas.length; i++) {
        const respuestaElem = document.createElement('button');
        respuestaElem.className = 'popup-button';
        respuestaElem.textContent = `${i + 1}. ${pregunta.respuestas[i].respuesta}`;
        respuestaElem.addEventListener('click', function() {
            document.body.removeChild(popup);
            document.body.removeChild(blur);
            if (pregunta.respuestas[i].boolCorrect == 1) {
                alert('Respuesta correcta!');
                if (!materiasObtenidasPlayer1.includes(materia)) {
                    materiasObtenidasPlayer1.push(materia);
                }
                console.log('Materias obtenidas por Player 1: ', materiasObtenidasPlayer1);
            } else {
                alert('Respuesta incorrecta!');
                const index = materiasObtenidasPlayer1.indexOf(materia);
                if (index !== -1) {
                    materiasObtenidasPlayer1.splice(index, 1);
                }
                console.log('Materias obtenidas por Player 1 después de respuesta incorrecta: ', materiasObtenidasPlayer1);
            }

            if (jugadorActual === 'player1') {
                pPlayer1.textContent = materiasObtenidasPlayer1.join(', ');
            } else {
                pPlayer2.textContent = materiasObtenidasPlayer2.join(', ');
            }
        });
        popup.appendChild(respuestaElem);
    }

    document.body.appendChild(popup);
}

export function getMateriasObtenidas(jugador) {
    if (jugador === 'player1') {
        return materiasObtenidasPlayer1;
    } else if (jugador === 'player2') {
        return materiasObtenidasPlayer2;
    }
}