const QTD = 100;
let jogando = true;
let pos = new Array(QTD);
let cont = 0;
let valor = 0;
let tempo;

function setup() {
  createCanvas(300, 600);
  tempo = millis();
}

function draw() {
  if (jogando) {
    background(110);
    pos[cont % QTD] = mouseY;
    valor += desvioPadrao() / 100;

    rect(0, valor, 300, 99);
    console.log(desvioPadrao());
    cont++;

    if (valor >= 500) {
      console.log("Tempo: " + (millis() - tempo) / 1000 + " segundos");
      jogando = false;
    }
  }
}

function media() {
  let soma = 0;
  for (let i = 0; i < QTD; i++) soma += pos[i];
  return int(soma / QTD);
}

function variancia() {
  let valorMedia = media();
  let tam = QTD;
  let soma = 0;
  for (let i = 0; i < QTD; i++) {
    let aux = pos[cont % QTD] - valorMedia;
    soma += sq(aux);
  }
  return soma / tam;
}

function desvioPadrao() {
  return sqrt(variancia());
}
