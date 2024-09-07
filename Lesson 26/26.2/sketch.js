var imgOriginal1, imgOriginal2, imgNova;
var sliderTransicao;

function preload() {
  imgOriginal1 = loadImage("original1.jpg");
  imgOriginal2 = loadImage("original2.jpg");
}

function setup() {
  createCanvas(314 * 3, 240);
  imgNova = createImage(314, 240);
  sliderTransicao = createSlider(0, 1, 0.5, 0.01);
  sliderTransicao.position(314 * 2, 240);
}

function draw() {
  processaImagem(sliderTransicao.value());
  image(imgOriginal1, 0, 0);
  image(imgOriginal2, 314, 0);
  image(imgNova, 314 * 2, 0);
}

function processaImagem(valor) {
  var corOriginal1, corOriginal2, corDestino;
  var r1, g1, b1, r2, g2, b2, r3, g3, b3;
  imgNova.loadPixels();
  // noprotect
  for (let x = 0; x < 314; x++) {
    for (let y = 0; y < 240; y++) {
      corOriginal1 = imgOriginal1.get(x, y);
      r1 = red(corOriginal1);
      g1 = green(corOriginal1);
      b1 = blue(corOriginal1);

      corOriginal2 = imgOriginal2.get(x, y);
      r2 = red(corOriginal2);
      g2 = green(corOriginal2);
      b2 = blue(corOriginal2);

      r3 = valor * r1 + (1 - valor) * r2;
      g3 = valor * g1 + (1 - valor) * g2;
      b3 = valor * b1 + (1 - valor) * b2;

      corDestino = color(r3, g3, b3);
      imgNova.set(x, y, corDestino);
    }
  }
  imgNova.updatePixels();
}
