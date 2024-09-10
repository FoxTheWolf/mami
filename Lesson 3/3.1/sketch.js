function setup(){
  createCanvas(256,192);
  background(0,0,255);
  stroke(255);
  noFill();
  line(128,160,128,0);
  line(48,80,208,80);
  for (let i = 1; i<=8; i++){
    ellipse(128,80,160,20*i);
    ellipse(128,80,20*i,160);
  }
}