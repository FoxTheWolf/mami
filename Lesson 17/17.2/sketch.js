let imgGrama, imgMuro, imgSombra;

let mapa = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 2, 0],
  [0, 1, 2, 0, 0, 1, 2, 0],
  [0, 1, 2, 0, 0, 1, 2, 0],
  [0, 1, 2, 0, 0, 1, 2, 0],
  [0, 1, 2, 0, 0, 1, 2, 0],
  [0, 1, 1, 1, 1, 1, 2, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

function preload() {
  imgGrama = loadImage("grama.png");
  imgMuro = loadImage("muro.png");
  imgSombra = loadImage("sombra.png");
}

function setup() {
  createCanvas(256, 256);
  mostraMapa();
}
function draw() {}

function mostraMapa() {
  for (let i = 0; i < 8; i++)
    for (let j = 0; j < 8; j++) {
      let x = mapa[j][i];
      //console.log(i,j);
      switch (x) {
        case 0:
          image(imgGrama, i * 32, j * 32);
          break;
        case 1:
          image(imgMuro, i * 32, j * 32);
          break;
        case 2:
          image(imgSombra, i * 32, j * 32);
          break;
      }
    }
}
