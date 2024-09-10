var bolaX = 40;
var bolaY = 250;
var dX = 5;
var dY = 5;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  circle(bolaX,bolaY,20);
  bolaX += dX;
  bolaY += dY;
  if ((bolaX > 590) || (bolaX < 10)) dX = -dX + random(-2,2);
  if ((bolaY > 590) || (bolaY < 10)) dY = -dY + random(-2,2);
}