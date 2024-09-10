let imgGrama, imgPedra, imgRocha;

let mapa = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, -1],
  [0, 1, 0, 0, 0, 1, -1,-1],
  [2, 2, 2, 2, 2, -1,-1,-1],
  [0, 1, 0, 2, -1, -1, -1, -1],
  [0, 1, 0, -1, -1, -1, -1, -1],
  [0, 1, -1,-1, -1, -1, -1, -1],
  [0, -1, -1, -1,-1, -1, -1, -1],
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
  imgPedra = loadImage("stone.png");
  imgRocha = loadImage("rock.png");
}

const SEP = 10;

function setup() {
  createCanvas(900, 600);
  for (let i = 0; i < 8; i++)
    for (let j = 0; j < 8; j++) {
      let x = mapa[i][j];
      //console.log(i,j);
      switch (x) {
        case 0:
          image(imgGrama, 400 + (j - i) * 32, (i + j) * 32 + (abs(i) + abs(j)) * SEP);
          break;
        case 1:
          image(
            imgPedra,
            400 + (j - i) * 32,
            (i + j) * 32 +(abs(i) + abs(j)) * SEP/*mapaAltura[i][j]*/
          );
          break;
        case 2:
          image(imgRocha, 400 + (j - i) * 32, (i + j) * 32 +(abs(i) + abs(j)) * SEP);
          break;
      }
    }
}

/*function draw() {
  background(220);
}*/
