let imgGrama, imgCerca, imgFlor, imgFlorBranca, imgCaminho;

let mapa = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
];

function preload() {
  imgGrama = loadImage("grama.png");
  imgCerca = loadImage("cerca.png");
  imgFlor = loadImage("flor.png");
  imgFlorBranca = loadImage("flor_branca.png");
  imgCaminho = loadImage("caminho.png");
}

function setup() {
  createCanvas(160, 160);
  mostraMapa();
}
function draw() {}

const SIZE = 16;

function mostraMapa() {
  for (let i = 0; i < 10; i++)
    for (let j = 0; j < 10; j++) {
      let x = mapa[j][i];
      //console.log(i,j);
      switch (x) {
        case 0:
          image(imgGrama, i * SIZE, j * SIZE);
          break;
        case 1:
          image(imgCerca, i * SIZE, j * SIZE);
          break;
        case 2:
          image(imgFlor, i * SIZE, j * SIZE);
          break;
        case 3:
          image(imgFlorBranca, i * SIZE, j * SIZE);
          break;
        case 4:
          image(imgCaminho, i * SIZE, j * SIZE);
          break;
      }
    }
}
