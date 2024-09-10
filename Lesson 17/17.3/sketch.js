let imgGrama, imgMuro, imgRio;

let mapa = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [2, 2, 2, 2, 2],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

function preload() {
  imgGrama = loadImage("Grass Block.png");
  imgMuro = loadImage("Stone Block Tall.png");
  imgRio = loadImage("Water Block.png")
}

function setup() {
  createCanvas(500, 500);
  mostraMapa();
}
function draw() {}

function mostraMapa() {
  for (let i = 0; i < 5; i++)
    for (let j = 0; j < 5; j++) {
      let x = mapa[j][i];
      //console.log(i,j);
      switch (x) {
        case 0:
          image(imgGrama, i * 100, j * 80);
          break;
        case 1:
          image(imgMuro, i * 100, j * 80);
          break;
          case 2:
          image(imgRio, i * 100, j * 80);
          break;
      }
    }
}
