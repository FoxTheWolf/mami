const INTERVALO = 0.0166666667;
let tAtual = 0;

function draw() {
  console.log(tAtual);
  tAtual = tAtual + INTERVALO;
}