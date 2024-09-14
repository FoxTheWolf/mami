const NIVEL = 80;

let imgOriginal, imgProcessada;

let pixelEsquerdaEncontrado = false;
let pixelEsquerdaX, pixelEsquerdaY;
let pixelDireitaX, pixelDireitaY;

let pixelCimaEncontrado = false;
let pixelCimaX, pixelCimaY;
let pixelBaixoX, pixelBaixoY;

let mediaX, mediaY;

function preload() {
  imgOriginal = loadImage("img/digital.png"); // img/digital.png");
}

function setup() {
  createCanvas(480, 320);
  background(0);
  imgProcessada = createImage(240, 360);
  processaImagem();
  image(imgOriginal, 0, 0);
  image(imgProcessada, 240, 0);
  processaMedias();
  processaHorizontal();
}

function processaImagem() {
  let corOriginal;
  let corProcessada = color(255);
  let b;
  imgProcessada.loadPixels();
  // noprotect

  for (let x = 0; x < 240; x++) {
    for (let y = 0; y < 360; y++) {
      corOriginal = imgOriginal.get(x, y);
      b = brightness(corOriginal);
      if (b < NIVEL) imgProcessada.set(x, y, corProcessada);
    }
  }
  imgProcessada.updatePixels();
}

function processaMedias() {
  let corOriginal;
  let somaX = 0;
  let somaY = 0;
  let contador = 0;
  // noprotect

  for (let x = 0; x < 240; x++) {
    for (let y = 0; y < 360; y++) {
      corOriginal = imgOriginal.get(x, y);
      b = brightness(corOriginal);
      if (b < NIVEL) {
        contador++;
        somaX += x;
        somaY += y;
      }
    }
  }
  mediaX = somaX / contador;
  mediaY = somaY / contador;
  mostraMedias();
}

function mostraMedias() {
  noFill();
  stroke(255, 0, 0);
  strokeWeight(5);
  circle(240 + mediaX, mediaY, 10);
}

function processaHorizontal() {
  let corOriginal;
  // noprotect

  for (let x = 0; x < 240; x++) {
    for (let y = 0; y < 360; y++) {
      corOriginal = imgOriginal.get(x, y);
      b = brightness(corOriginal);
      if (b < NIVEL) {
        if (pixelEsquerdaEncontrado == false) {
          pixelEsquerdaX = x;
          pixelEsquerdaY = y;
          pixelEsquerdaEncontrado = true;
        } else {
          pixelDireitaX = x;
          pixelDireitaY = y;
        }
      }
    }
  }
  mostraHorizontais();
}

function mostraHorizontais() {
  colorMode(RGB);
  fill(0,255,0);
  circle(240 + pixelEsquerdaX, pixelEsquerdaY, 5);
  circle(240 + pixelDireitaX, pixelDireitaY, 5);
  line(240 + pixelEsquerdaX, 0, 240 + pixelEsquerdaX, 360);
  line(240 + pixelDireitaX, 0, 240 + pixelDireitaX, 360);
}
