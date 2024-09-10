function setup() {
  createCanvas(800, 600);  
}

function draw(){
  background(0);
  criaL(mouseX,mouseY);
}

function criaL(posX,posY){
  fill(255);
  stroke(255);
  strokeWeight(0);
  // ROUND, PROJECT
  
  let modulo = 50;
  let largura = modulo;
  let altura = modulo*3.5;
  
  rect(posX,posY,largura,altura)
  arc(posX+modulo*1.5,posY+(modulo*3.5),modulo*3,modulo*3,radians(90),radians(180),PIE);
  fill(0);
  stroke(0);
  arc(posX+modulo*1.5,posY+(modulo*3.5),modulo,modulo,radians(90),radians(180),PIE);
  // CHORD, PIE, OPEN
}