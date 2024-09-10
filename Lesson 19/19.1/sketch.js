let imgParado, imgAtacando, imgPulando, imgMorreu;

// Estados possiveis
const PARADO = 0;
const ATACANDO = 1;
const PULANDO = 2;
const PULAR_ATACANDO = 3;
const ATACAR_PULANDO = 4;
const MORREU = 5;

// Estado Inicial
let estadoPersonagem = PARADO;

function preload() {
  imgParado = loadImage("Idle (1).png");
  imgAtacando = loadImage("Shoot (1).png");
  imgPulando = loadImage("Jump (3).png");
  imgMorreu = loadImage("Dead (7).png");
}

// Maquina de Estados Finitos
function MEF() {
  if (estadoPersonagem != MORREU) {
    if (keyIsPressed) {
      if (keyIsDown(32)) {
        if (keyIsDown(UP_ARROW)) estadoPersonagem = ATACAR_PULANDO;
        else estadoPersonagem = ATACANDO;
      }
      if (keyIsDown(UP_ARROW)) {
        if (keyIsDown(32)) estadoPersonagem = PULAR_ATACANDO;
        else estadoPersonagem = PULANDO;
      }
      if (keyCode == ESCAPE) estadoPersonagem = MORREU;
    } else estadoPersonagem = PARADO;
  }
}

// Representacao Grafica
function mostraPersonagem(estado) {
  background(255);
  switch (estado) {
    case PARADO:
      image(imgParado, 0, 0);
      break;
    case ATACANDO:
      image(imgAtacando, 0, 0);
      break;
    case PULANDO:
      image(imgPulando, 0, -100);
      break;
    case PULAR_ATACANDO:
      image(imgAtacando, 0, -100);
      break;
    case MORREU:
      image(imgMorreu, 0, 0);
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
