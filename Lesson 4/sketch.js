let posX = 200;
let posY = 200;

function setup(){
  createCanvas(400,400);
  background(0);
}

function draw(){
  background(0);
  let direcao = int(random(4));
  let velocidade = int(random(4))
  //console.log(direcao);
  if(direcao == 0){
    posX = posX + velocidade;
  }
  else if(direcao == 1){
    posX = posX - velocidade;
  }
  else if(direcao == 2){
    posY = posY + velocidade;
  }
  else if(direcao == 3){
    posY = posY - velocidade;
  }
  circle(posX,posY,10);
}