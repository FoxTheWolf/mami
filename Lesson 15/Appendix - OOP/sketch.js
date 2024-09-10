class Circulo {
  constructor(x, y, r, visivel) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.visivel = visivel;
  }
  mostraCirculo() {
    if (this.visivel) circle(this.x, this.y, 2 * this.r);
  }
  escondeSeMouseDentro() {
    if (this.visivel) {
      let distancia = dist(this.x, this.y, mouseX, mouseY);
      if (distancia < this.r) this.visivel = false;
      else this.visivel = true;
    }
  }
}

const NUM_CIRCULOS = 10;

let circulos = [];

function setup() {
  createCanvas(300, 300);
  geraCirculos();
}

function draw() {
  mostraCirculosVisiveis();
}

function geraCirculos() {
  for (let i = 0; i < NUM_CIRCULOS; i++) {
    let x = int(random(50, 250));
    let y = int(random(50, 250));
    let r = int(random(5, 50));
    let circulo = new Circulo(x, y, r, true);
    circulos.push(circulo);
  }
}

function mostraCirculosVisiveis() {
  background(255);
  for (let i = 0; i < NUM_CIRCULOS; i++) {
    circulos[i].escondeSeMouseDentro();
    circulos[i].mostraCirculo();
  }
}
