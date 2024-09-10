var bastaoY = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  //bastaoY = mouseY;
  rect(570, bastaoY, 20, 100);

  /*
  if (keyIsPressed) {
    if (keyCode == DOWN_ARROW && bastaoY < 500) bastaoY += 7;
    else if (keyCode == UP_ARROW && bastaoY > 0) bastaoY -= 7;
  }
  */
  
  console.log(bastaoY);
}

function keyPressed() {
  if (keyCode == DOWN_ARROW && bastaoY < 500) bastaoY += 7;
  else if (keyCode == UP_ARROW && bastaoY > 0) bastaoY -= 7;
}
