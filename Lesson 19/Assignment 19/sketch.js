let charEsquerda, charBaixo, charDireita, charCima;

// Estados possiveis
const ESQUERDA = 0;
const BAIXO = 1;
const DIREITA = 2;
const CIMA = 3;
const VEL = 2;

// Estado Inicial
let estadoChar = BAIXO;
let posX, posY;
posX = posY = 100;

// Pre=carregamento
function preload() {
  charEsquerda = loadImage("charEsquerda.png");
  charDireita = loadImage("charDireita.png");
  charBaixo = loadImage("charBaixo.png");
  charCima = loadImage("charCima.png");
}

// Maquina de Estados Finitos
// Exemplo com KeyIsDown

function MEF() {
  if (keyIsDown(LEFT_ARROW)) {
    estadoChar = ESQUERDA;
    posX -= VEL;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    estadoChar = DIREITA;
    posX += VEL;
  }
  if (keyIsDown(UP_ARROW)) {
    estadoChar = CIMA;
    posY -= VEL;
  }
  if (keyIsDown(DOWN_ARROW)) {
    estadoChar = BAIXO;
    posY += VEL;
  }
}


// Exemplo com KeyIsPressed
// Descomente para testar
/*
function MEF() {
  if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {
      estadoChar = ESQUERDA;
      posX -= VEL;
    }

    if (keyCode == RIGHT_ARROW) {
      estadoChar = DIREITA;
      posX += VEL;
    }
    if (keyCode == UP_ARROW) {
      estadoChar = CIMA;
      posY -= VEL;
    }
    if (keyCode == DOWN_ARROW) {
      estadoChar = BAIXO;
      posY += VEL;
    }
  }
}
*/

// Representacao Grafica
function mostraPersonagem(estado) {
  background(255);
  switch (estado) {
    case ESQUERDA:
      image(charEsquerda, posX, posY);
      break;
    case DIREITA:
      image(charDireita, posX, posY);
      break;
    case CIMA:
      image(charCima, posX, posY);
      break;
    case BAIXO:
      image(charBaixo, posX, posY);
      break;
  }
}

// Configuracao Inicial
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  MEF();
  mostraPersonagem(estadoChar);
  //console.log(estadoChar);
}
