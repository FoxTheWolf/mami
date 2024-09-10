let charEsquerda, charBaixo, charDireita, charCima;

// Estados possiveis
const ESQUERDA = 0;
const MEIO_ED = 1;
const DIREITA = 2;
const MEIO_DE = 3;

// Estado Inicial
let estadoOsc = ESQUERDA;
let tempoEsquerda = 0;
let tempoMeioED = 0;
let tempoMeioDE = 0;
let tempoDireita = 0;

/*
function preload() {
  imgParado = loadImage("Idle (1).png");
  imgAtacando = loadImage("Shoot (1).png");
  imgPulando = loadImage("Jump (3).png");
  imgMorreu = loadImage("Dead (7).png");
  imgPuloDuplo = loadImage("Jump (7).png");
}*/

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
  if (estadoOsc == ESQUERDA) {
    tempoEsquerda++;
    if (tempoEsquerda >= 60) {
      tempoEsquerda = 0;
      estadoOsc = MEIO_ED;
    }
  }
  
  if (estadoOsc == MEIO_ED) {
    tempoMeioED++;
    if (tempoMeioED >= 60) {
      tempoMeioED = 0;
      estadoOsc = DIREITA;
    }}
    if (estadoOsc == DIREITA) {
    tempoDireita++;
    if (tempoDireita >= 60) {
      tempoDireita = 0;
      estadoOsc = MEIO_DE;
    }}
      if (estadoOsc == MEIO_DE) {
    tempoMeioDE++;
    if (tempoMeioDE >= 60) {
      tempoMeioDE = 0;
      estadoOsc = ESQUERDA;
    }}
  
}

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
  console.log(estadoOsc)
  //mostraPersonagem(estadoPersonagem);
  //console.log(estadoPersonagem);
}
