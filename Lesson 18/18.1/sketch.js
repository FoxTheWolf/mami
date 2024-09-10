let imgGrama, imgPedra, imgAgua;

let mapa = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [2, 2, 2, 2, 2, 0, 0, 0],
  [0, 1, 0, 2, 0, 1, 0, 0],
  [0, 1, 0, 2, 0, 1, 0, 0],
  [0, 1, 1, 2, 1, 1, 0, 0],
  [0, 0, 0, 2, 0, 0, 0, 0],
];

let mapaAltura = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 50, 50, 50, 50, 50, 0, 0],
  [0, 50, 0, 0, 0, 50, 0, 0],
  [0, 50, 0, 0, 0, 50, 0, 0],
  [0, 50, 0, 0, 0, 50, 0, 0],
  [0, 50, 0, 0, 0, 50, 0, 0],
  [0, 50, 50, 50, 50, 50, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

function preload() {
  imgGrama = loadImage("grass.png");
  imgMuro = loadImage("stone.png");
  imgAgua = loadImage("water.png");
}

const SEP = 30;

function setup() {
  createCanvas(900, 600);
  for (let i = 0; i < 8; i++)
    for (let j = 0; j < 8; j++) {
      let x = mapa[i][j];
      //console.log(i,j);
      switch (x) {
        case 0:
          image(imgGrama, 400 + (j - i) * 55, (i + j) * 32);
          break;
        case 1:
          image(
            imgMuro,
            400 + (j - i) * 55,
            (i + j) * 32 + (abs(i) + abs(j)) - 50 /*mapaAltura[i][j]*/
          );
          break;
        case 2:
          image(
            imgAgua,
            400 + (j - i) * 55,
            (i + j) * 32 + (abs(i) + abs(j)) + 10
          );
          break;
      }
    }
}

/*function draw() {
  background(220);
}*/
