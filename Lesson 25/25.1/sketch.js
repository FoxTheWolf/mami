let imgOriginal, imgResultado;

function preload() {
  imgOriginal = loadImage("image1.jpg");
}

function setup() {
  createCanvas(314 * 2, 240);
  imgResultado = createImage(314, 240);
  processaImagem();
  image(imgOriginal, 0, 0);
  image(imgResultado, 314, 0);
}

function draw() {
  filter(GRAY);
}

function processaImagem() {
  let corOriginal, corDestino;
  let g;
  imgResultado.loadPixels();
  for (let x = 0; x < 320; x++) {
    for (let y = 0; y < 240; y++) {
      corOriginal = imgOriginal.get(x, y);
      r = red(corOriginal);
      g = green(corOriginal);
      b = blue(corOriginal);
      let cinza  = 0.299 * r + 0.587 * g + 0.114 * b;
      //let cinza = (r + g + b) / 3;
      corDestino = color(cinza,cinza,cinza);
      imgResultado.set(x, y, corDestino);
    }
  }
  imgResultado.updatePixels();
}
