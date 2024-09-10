let imgGrama, imgMuro;

let matriz = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

function preload() {
  imgGrama = loadImage("grama.png");
  imgMuro = loadImage("muro.png");
}

function setup() {
  createCanvas(256,256);
  background(110);
  for (let i = 0; i < 8; i++)
    for (let j = 0; j < 8; j++) {
      let x = matriz[j][i];
      //console.log(i,j);
      switch (x) {
        case 0:
          fill(0);
          break;
        case 1:
          fill(255);
          break;
      }
      rect(i * 20, j * 20, 20, 20);
    }
}

function draw() {}
