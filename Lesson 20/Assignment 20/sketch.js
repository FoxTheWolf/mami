let imgParado, imgAtacando, imgPulando;

// Estados possiveis
const PARADO = 0;
const ATIRANDO = 1;
const PULANDO = 2;

// Estado Inicial
let estadoPersonagem = PARADO;
let tempoParado = 0;
let tempoAtirando = 0;
let tempoPulando = 0;

// Contagem de Tempo
let ms;

function preload() {
  imgParado = loadImage("Idle (1).png");
  imgAtacando = loadImage("Shoot (1).png");
  imgPulando = loadImage("Jump (3).png");
}

// Maquina de Estados Finitos
function MEF() {
  if (estadoPersonagem == ATIRANDO) {
    ms = millis();
    if (ms - tempoAtirando >= 250) estadoPersonagem = PARADO;
  }

  if (estadoPersonagem == PULANDO) {
    ms = millis();
    if (ms - tempoPulando >= 1000) estadoPersonagem = PARADO;
  }

  if (keyIsPressed) {
    ms = millis();
    switch (keyCode) {
      case UP_ARROW:
        if (estadoPersonagem != PULANDO) {
          tempoPulando = ms;
          estadoPersonagem = PULANDO;
        }
        break;
      case 32:
        tempoAtirando = ms;
        estadoPersonagem = ATIRANDO;
        break;
    }
  }
}

function keyPressed() {}

// Representacao Grafica
function mostraPersonagem(estado) {
  background(255);
  switch (estado) {
    case PARADO:
      image(imgParado, 0, 0);
      break;
    case ATIRANDO:
      image(imgAtacando, 0, 0);
      break;
    case PULANDO:
      image(imgPulando, 0, -50);
      break;
  }
}

// Configuracao Inicial
function setup() {
  createCanvas(641, 542);
}

function draw() {
  MEF();
  mostraPersonagem(estadoPersonagem);
}
