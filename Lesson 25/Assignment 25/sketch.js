let imgOriginal;

function preload() {
  imgOriginal = loadImage("image1.jpg");
}

function setup() {
  createCanvas(314, 240);
  processaImagem();
  image(imgOriginal, 0, 0);
}

function draw() {}

function processaImagem() {
  let corNova;
  imgOriginal.loadPixels();
  // Efeito de noise
  for (let i = 0; i < 10000; i++) {
    let r = int(random(256));
    let g = int(random(256));
    let b = int(random(256));
    corNova = color(r, g, b);
    let x = int(random(0,314));
    let y = int(random(0,240));
    imgOriginal.set(x, y, corNova);
  }
  imgOriginal.updatePixels();
  // Efeito de escala de cinza
  for (let x = 0; x < 314; x++) {
    for (let y = 0; y < 240; y++) {
      corOriginal = imgOriginal.get(x, y);
      r = red(corOriginal);
      g = green(corOriginal);
      b = blue(corOriginal);
      let cinza = 0.299 * r + 0.587 * g + 0.114 * b;
      //let cinza = (r + g + b) / 3;
      corDestino = color(cinza, cinza, cinza);
      imgOriginal.set(x, y, corDestino);
    }
  }
  imgOriginal.updatePixels();
  // Efeito avermelhado
  for (let x = 0; x < 314; x++) {
    for (let y = 0; y < 240; y++) {
      corOriginal = imgOriginal.get(x, y);
      r = red(corOriginal) + 30;
      g = green(corOriginal);
      b = blue(corOriginal);
      corDestino = color(r, g, b);
      imgOriginal.set(x, y, corDestino);
    }
  }
  imgOriginal.updatePixels();
  // Efeito amarelado
  for (let x = 0; x < 314; x++) {
    for (let y = 0; y < 240; y++) {
      corOriginal = imgOriginal.get(x, y);
      r = red(corOriginal);
      g = green(corOriginal) + 30;
      b = blue(corOriginal);
      corDestino = color(r, g, b);
      imgOriginal.set(x, y, corDestino);
    }
  }
  imgOriginal.updatePixels();
}
