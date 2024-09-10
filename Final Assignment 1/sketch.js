var largura = 800;
var altura = (largura * 9) / 16;
var i = 0;
var mode = 0;

function setup() {
  createCanvas(largura, altura);
}

function draw() {
  noStroke();
  frameRate(60);
  switch (mode) {
    case 0:
      gradiente(100, 50);
      fill(255);
      text("Modo: Enunciado", 10, 20);
      break;
    case 1:
      gradienteVert(200, 50);
      fill(255);
      text("Modo: Exercício 1", 10, 20);
      break;
    case 2:
      gradiente(random(360), random(50));
      fill(255);
      text("Modo: Exercício 2", 10, 20);
      frameRate(1);
      break;
    case 3:
      var cor = [0, 50, 150, 250];
      gradiente(cor[i], 50);
      i++;
      if (i > 3) i = 0;
      fill(255);
      text("Modo: Exercício 3", 10, 20);
      frameRate(1);
      break;
    case 4:
      if (keyPressed) {
        gradiente(keyCode, 20);
        console.log(keyCode);
      }
      fill(255);
      text("Modo: Desafio", 10, 20);
      text("Pressione qualquer outra tecla para enviar o código ASCII", 10, 60);
      text("Código recebido: " + keyCode, 10, 80);
      break;
  }
  text("Pressione a barra de espaço para alterar o modo", 10, 40);
}

function gradiente(cor, divisoes) {
  colorMode(HSL, 360, 100, 50);
  var largRect = largura / divisoes;
  var x1 = 0;
  var y1 = 0;
  var x2 = largRect;
  var y2 = altura;
  var aumentoLum = 50 / divisoes;
  var lumInicial = 0;
  for (let i = 0; i < divisoes; i++) {
    fill(cor, 100, lumInicial);
    rect(x1, y1, x2, y2);
    x1 = x2;
    x2 += largRect;
    lumInicial += aumentoLum;
  }
}

function gradienteVert(cor, divisoes) {
  colorMode(HSL, 360, 100, 50);
  var altRect = altura / divisoes;
  var x1 = 0;
  var y1 = 0;
  var x2 = largura;
  var y2 = altRect;
  var aumentoLum = 50 / divisoes;
  var lumInicial = 0;
  for (let i = 0; i < divisoes; i++) {
    fill(cor, 100, lumInicial);
    rect(x1, y1, x2, y2);
    y1 = y2;
    y2 += altRect;
    lumInicial += aumentoLum;
  }
}

function keyPressed() {
  if (keyCode == 32) {
    if (mode < 4) mode++;
    else mode = 0;
  }
}
