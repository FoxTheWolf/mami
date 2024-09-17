const N = 25;

let posY = new Array(N);
let posX = new Array(N);
let cont = 0;

function draw() {
  background(0);
  posY[cont % N] = mouseY;
  posX[cont % N] = mouseX;
  circle(mediaX(), mediaY(), 10);
  //console.log(mediaY());
  cont++;
}

function mediaY() {
  let soma = 0;
  for (let i = 0; i < N; i++) {
    soma += posY[i];
  }
  return int(soma / N);
}

function mediaX() {
  let soma = 0;
  for (let i = 0; i < N; i++) {
    soma += posX[i];
  }
  return int(soma / N);
}