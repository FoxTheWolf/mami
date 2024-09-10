let PosicaoCarro1 = 0;
let PosicaoCarro2 = 0;
let Avanco;

function setup() {
  createCanvas(800, 150);
  //frameRate(10);
}

function draw() {
  background(0);
  quadriculado(700,0,25);
  //console.log(PosicaoCarro1);
  fill(0,255,0);
  rect(PosicaoCarro1, 0, 100, 50);
  fill(255,0,0);
  rect(PosicaoCarro2, 100, 100, 50);
  if (PosicaoCarro1 >= 600){
    console.log("CPU Ganhou!");
  } else if (PosicaoCarro2 >= 600){
    console.log("Jogador Ganhou!")
  } else {
    Avanco = int(random(10));
    PosicaoCarro1 = PosicaoCarro1 + Avanco;
  }
}

function mousePressed(){
  if(PosicaoCarro1 < 600 && PosicaoCarro2 < 600){
  PosicaoCarro2 = PosicaoCarro2 + int(random(25,75))
  }
}

function quadriculado(posX,posY,tamanho){
    for(var x = 0; x < 8; x++){
    for(var y = 0; y < 8; y++){
      if ((x + y) % 2 == 1) fill(0);
      else fill(255);
      rect((x*tamanho)+posX,(y*tamanho)+posY,tamanho,tamanho)
    }
  }
}
