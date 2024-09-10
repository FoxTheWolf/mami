const INTERVALO = 0.0166666667;
let tAtual = 0;
let vInicialX = window.prompt("Informe a velocidade do movimento horizontal: ")
let vInicialY = window.prompt("Informe a velocidade do movimento vertical: ")
let dAtualX, dAtualY;
let aAtual = -9.8;
let pos;

function setup(){
  createCanvas(600,600);
}

function draw() {
  background(110);
  grade2(100, 100, 10);
  dAtualX = MRU(vInicialX, tAtual)
  dAtualY = MRUV(vInicialY, aAtual, tAtual);
  fill(255);
  text("Tempo: " + tAtual,0,10);
  text("Deslocamento X: " + dAtualX,0,20);
  text("Deslocamento Y: " + dAtualY,0,30);
  //console.log("Tempo: " + tAtual);
  //console.log("Deslocamento: " + dAtual);
  //console.log();
  noFill;
  circle(dAtualX, 600-dAtualY, 10);
  tAtual = tAtual + INTERVALO;
}

function MRUV(v, a ,t){
  let d = v * t + a * t * t / 2.0;
  return(d);
}

function MRU(v,t){
  let d = v * t;
  return(d);
}

function grade2(nColunas, nLinhas, intervalo){
  linhas2(nLinhas+1,intervalo*nColunas,intervalo);
  colunas2(nColunas+1,intervalo*nLinhas,intervalo);
}

function linhas2(nLinhas, largura, intervalo){
  for(let y = 0; y < nLinhas; y++) {
    line(0,y*intervalo,largura,y*intervalo);
  }
}

function colunas2(nColunas, altura, intervalo){
  for(let i = 0; i < nColunas; i++) {
    line(intervalo*i,0,intervalo*i,altura);
  }
}