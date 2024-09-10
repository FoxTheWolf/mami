function setup() {
  createCanvas(800, 600);
  background(255);
  for(i=0;i<100;i++){
    let larg = random(5,30);
    let posX = random(800);
    let posY = random(600)
    bandeiraJapao(posX,posY,larg); 
  }
}

function bandeiraJapao(PosX,PosY,largura){
  fill(255);
  //Retangulo
  let posX = PosX
  let posY = PosY
  let modulo = largura/3;
  let altura = 2 * modulo;
  let xCentro = 1.5 * modulo;
  let yCentro = modulo;
  let diametro = 1.2 * modulo;
  rect(posX,posY,largura,altura);
  //Circulo
  fill(255,0,0);
  ellipse(xCentro+posX,yCentro+posY,diametro);
}