let linkCSS = document.createElement('link');
linkCSS.setAttribute('rel', 'stylesheet');
linkCSS.setAttribute('href', './statics/styles/index.css');
document.head.appendChild(linkCSS);

function Iniciar(){
    const conIniciar = document.getElementById('Iniciar');

    const conWelcome = document.createElement('Welcome');
    conWelcome.setAttribute('id', 'Welcome');

    const h2 = document.createElement('h2');
    h2.setAttribute('id', 'Titulo1Bienvenidos');
    h2.textContent = '¡Que tal! Bienvenidx a';

    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'Titulo2Preguntados');
    h1.textContent = 'Preguntados';

    conIniciar.appendChild(conWelcome);
    conWelcome.appendChild(h2);
    conWelcome.appendChild(h1);

    const players = document.createElement('Players');
    players.setAttribute('id', 'players');

    const player1 = document.createElement('Player1');
    player1.setAttribute('id', 'img1');
    player1.setAttribute('src', 'https://www.clipartmax.com/png/full/467-4674712_six-of-them-representing-each-of-the-categories-personaje-de-ciencia-preguntados.png');
    player1.setAttribute('alt', 'matrazVerde');
    player1.setAttribute('width', '180');
    player1.setAttribute('height', '400');

    const player2 = document.createElement('player2');
    player2.setAttribute('id', 'img2');
    player2.setAttribute('src', 'https://www.seekpng.com/png/full/30-302967_sword-preguntados-personaje-entretenimiento.png');
    player2.setAttribute('alt', 'espada');
    player2.setAttribute('width', '180');
    player2.setAttribute('height', '400');





}