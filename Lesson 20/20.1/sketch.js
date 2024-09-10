let imgParado, imgAtacando, imgPulando, imgMorreu;

// Estados possiveis
const PARADO = 0;
const ATIRANDO = 1;
const PULANDO = 2;
const PULO_DUPLO = 3;

// Estado Inicial
let estadoPersonagem = PARADO;
let tempoParado = 0;
let tempoAtirando = 0;
let tempoPulando = 0;
let tempoPuloDuplo = 0;

function preload() {
  imgParado = loadImage("Idle (1).png");
  imgAtacando = loadImage("Shoot (1).png");
  imgPulando = loadImage("Jump (3).png");
  imgMorreu = loadImage("Dead (7).png");
  imgPuloDuplo = loadImage("Jump (7).png");
}

// Maquina de Estados Finitos
function MEF() {
  // PARADO -> ATIRANDO
  /*if (estadoPersonagem == PARADO) {
    tempoParado++;
    if (tempoParado >= frameRate() * 0.5) {
      tempoParado = 0;
      estadoPersonagem = ATIRANDO;
    }
  }*/

  // ATIRANDO -> PARADO
  if (estadoPersonagem == ATIRANDO) {
    tempoAtirando++;
    if (tempoAtirando >= frameRate()) {
      tempoAtirando = 0;
      estadoPersonagem = PARADO;
    }
  }

  if (estadoPersonagem == PULANDO) {
    tempoPulando++;
    if (
      tempoPulando >= 15 &&
      keyIsPressed &&
      key == " "
    ) {
      estadoPersonagem = PULO_DUPLO;
    }
    if (tempoPulando >= frameRate()) {
      tempoPulando = 0;
      estadoPersonagem = PARADO;
    }
  }

  if (estadoPersonagem == PULO_DUPLO) {
    console.log("Pulo Duplo");
    tempoPulando = 0;
    tempoPuloDuplo++;
    if (tempoPuloDuplo >= frameRate()) {
      tempoPuloDuplo = 0;
      estadoPersonagem = PARADO;
    }
  }

  if (
    keyIsPressed &&
    key == " " &&
    estadoPersonagem != PULANDO &&
    estadoPersonagem != PULO_DUPLO
  ) {
    estadoPersonagem = PULANDO;
  }
}

function keyPressed() {}

// Representacao Grafica
function mostraPersonagem(estado) {
  background(28);
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
    case PULO_DUPLO:
      image(imgPuloDuplo, 0, -100);
      break;
  }
}

// Configuracao Inicial
function setup() {
  createCanvas(641, 542);
}

function draw() {
  //background(220);
  MEF();
  mostraPersonagem(estadoPersonagem);
  console.log(estadoPersonagem);
}
