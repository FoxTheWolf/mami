let img;

function preload() {
  img = loadImage("Stone Block Tall.png");
}

function setup() {
  createCanvas(2000, 2000);
  muralha(10,8);
}

function draw() {}


function muralha(l,a){
  l -= 1;
  a -= 1;
  console.log(l,a)
  for (let x = l; x >= 0; x--)
    for (let y = a; y >= 0; y--) {
      if (x != l && x != 0) {
        if (y == a || y == 0) {
          image(img, x * 100, y * 80);
          console.log(x, y);
        }
      } else {
        image(img, x * 100, y * 80);
        console.log(x, y);
      }
    }
}