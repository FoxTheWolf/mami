var imgOriginal, imgNova;
var a = 1;

function preload() {
  imgOriginal1 = loadImage("original1.jpg");
}

function setup() {
  createCanvas(314 * 2, 240);
  imgNova = createImage(314, 240);
}

function draw() {
  processaImagem(a);
  image(imgNova, 0, 0);
  if (a > 0) a -= 0.1;
}

function processaImagem(valor) {
  var corOriginal, corDestino;
  var r, g, b;
  imgNova.loadPixels();
  // noprotect
  for (let x = 0; x < imgOriginal.width; x++) {
    for (let y = 0; y < imgOriginal.height; y++) {
      corOriginal = imgOriginal.get(x, y);
      r = red(corOriginal) * valor;
      g = green(corOriginal) * valor;
      b = blue(corOriginal) * valor;
      corDestino = color(r, g, b);
      imgNova.set(x, y, corDestino);
    }
  }
  imgNova.updatePixels();
}
