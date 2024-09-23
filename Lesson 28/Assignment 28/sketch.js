// Variáveis globais
const NIVEL = 80; // Nível de brilho para detectar pixels pretos

let imgOriginal, imgProcessada; // Imagem original e processada

let pixelEsquerdaEncontrado = false; // Flag para saber se já encontrou o pixel esquerdo
let pixelEsquerdaX, pixelEsquerdaY; // Coordenadas do pixel esquerdo
let pixelDireitaX, pixelDireitaY; // Coordenadas do pixel direito

let pixelCimaEncontrado = false; // Flag para saber se já encontrou o pixel de cima
let pixelCimaX, pixelCimaY; // Coordenadas do pixel de cima
let pixelBaixoX, pixelBaixoY; // Coordenadas do pixel de baixo

let mediaX, mediaY; // Coordenadas da média dos pixels pretos

let imgCarregada = false; // Flag para saber se a imagem já foi carregada

// Função para carregar a imagem
function setup() {
  createCanvas(400,400)
  let input = createFileInput(handleImage);
  background(0);
  input.position(0, 0);
}

// Função para processar a imagem
function processaImagem() {
  console.log("processando imagem");
  let corOriginal;
  let corProcessada = color(255);
  let b;
  console.log(imgOriginal.width + "," + imgOriginal.height);
  imgProcessada.loadPixels();
  // noprotect

  // Loop para percorrer a imagem e detectar pixels pretos
  for (let x = 0; x < imgOriginal.width; x++) {
    for (let y = 0; y < imgOriginal.height; y++) {
      corOriginal = imgOriginal.get(x, y);
      b = brightness(corOriginal);
      if (b < NIVEL) imgProcessada.set(x, y, corProcessada);
    }
  }
  imgProcessada.updatePixels();
  console.log("imagem processada");	
}

// Função para calcular a média dos pixels pretos
function processaMedias() {
  let corOriginal;
  let somaX = 0;
  let somaY = 0;
  let contador = 0;
  // noprotect

  // Loop para percorrer a imagem e calcular a média dos pixels pretos
  for (let x = 0; x < imgOriginal.width; x++) {
    for (let y = 0; y < imgOriginal.height; y++) {
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

// Função para mostrar a média dos pixels pretos
function mostraMedias() {
  noFill();
  stroke(255, 0, 0);
  strokeWeight(5);
  circle(imgOriginal.width + mediaX, mediaY, 10);
}

// Função para detectar pixels pretos na horizontal
function processaHorizontal() {
  let corOriginal;
  // noprotect

  // Loop para percorrer a imagem e detectar pixels pretos na horizontal
  for (let x = 0; x < imgOriginal.width; x++) {
    for (let y = 0; y < imgOriginal.height; y++) {
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

// Função para mostrar os pixels pretos detectados na horizontal
function mostraHorizontais() {
  colorMode(RGB);
  fill(0,255,0);
  circle(imgOriginal.width + pixelEsquerdaX, pixelEsquerdaY, 5);
  circle(imgOriginal.width + pixelDireitaX, pixelDireitaY, 5);
  line(imgOriginal.width + pixelEsquerdaX, 0, imgOriginal.width + pixelEsquerdaX, imgOriginal.height);
  line(imgOriginal.width + pixelDireitaX, 0, imgOriginal.width + pixelDireitaX, imgOriginal.height);
}

// Função para carregar a imagem
function handleImage(file) {
  if (file.type === 'image') {
    imgOriginal = createImg(
      file.data, 'Alt text', 'anonymous', imgCriada);
    // imgOriginal.hide();    
  } else {
    imgOriginal = null;
  }
}

// Função para criar a imagem
function imgCriada(){
  imgOriginal.hide();
  resizeCanvas(imgOriginal.width * 2, imgOriginal.height);

  let g = createGraphics(imgOriginal.width, imgOriginal.height);
  g.image(imgOriginal, 0, 0);

  imgOriginal.remove();

  imgOriginal = g.get(0, 0, g.width, g.height)
  

  imgProcessada = createImage(imgOriginal.width, imgOriginal.height);
  processaImagem();
  image(imgOriginal, 0, 0);
  image(imgProcessada, imgOriginal.width, 0);
  processaMedias();
  processaHorizontal();
}
