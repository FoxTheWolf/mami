class Bloco {
  constructor(x, y, largura, altura, cor, visivel) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    this.cor = cor;
    this.visivel = visivel;
  }

  mostraBloco() {
    if (this.visivel) {
      colorMode(HSB);
      fill(this.cor, 100, 100);
      stroke(0);
      rect(this.x, this.y, this.largura, this.altura);
    }
  }
  /*escondeSeAtingido() {
    if (this.visivel) {
      let distancia = dist(this.x, this.y, mouseX, mouseY);
      if (distancia < this.r) this.visivel = false;
      else this.visivel = true;
    }
  }*/
}

class Bola {
  constructor(x, y, r, dX, dY) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dX = dX;
    this.dY = dY;
  }

  mostraBola() {
    fill(SOMBRA_BRILHO);
    circle(this.x + SOMBRA_DIST, this.y + SOMBRA_DIST, this.r * 2);
    fill(150);
    circle(this.x, this.y, this.r * 2);
    textAlign(LEFT);
    textSize(10);
    if (debug) {
      text("Velocidade X: " + this.dX, this.x + 15, this.y);
      text("Velocidade Y: " + abs(this.dY), this.x + 15, this.y + 12);
    }
  }

  movimenta() {
    this.x += this.dX;
    this.y += this.dY;
    if (this.x > width - this.r || this.x < 0 + this.r) this.dX = -this.dX;
    if (this.y < 0 + this.r) this.dY = -this.dY;
    if (this.y > height) perdeu = true;
  }

  rebate(vel) {
    if (abs(this.dX) < VELMAX_HOR_BOLA) {
      if (abs(this.dX) < VELMIN_HOR_BOLA) {
        if (this.dX > 0) this.dX += 2;
        else this.dX -= 2;
      } else if (this.dX > 0) this.dX += random(-2, 2);
      else this.dX -= random(-2, 2);
    } else if (this.dX > 0) this.dX -= 2;
    else this.dX += 2;

    if (abs(this.dY) < VELMAX_VER_BOLA) {
      if (this.dY > 0) this.dY += vel;
      else this.dY -= vel;
    }

    this.dY = -this.dY;
  }
}

class Jogador {
  constructor(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
  }

  mostraJogador() {
    fill(SOMBRA_BRILHO);
    rect(
      this.x + SOMBRA_DIST,
      this.y + SOMBRA_DIST,
      this.largura + SOMBRA_DIST,
      this.altura + SOMBRA_DIST
    );
    fill(100);
    rect(this.x, this.y, this.largura, this.altura);
  }

  controle() {
    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW && this.x + this.largura <= width)
        this.x += VEL_JOGADOR;
      else if (keyCode == LEFT_ARROW && this.x > 0) this.x -= VEL_JOGADOR;
    }
  }
}

const BLOCOS_TOTAIS = 100;
const BLOCOS_ALT_INICIAL = 100;
const VEL_JOGADOR = 10;
const AUM_VEL_BOLA = 0.25;
const VELINIC_VER_BOLA = 3;
const VELMAX_VER_BOLA = 10;
const VELMAX_HOR_BOLA = 6;
const VELMIN_HOR_BOLA = 1;
const PLACAR_MULT = 1000;
const SOMBRA_BRILHO = 10;
const SOMBRA_DIST = 3;
const BACKGROUND = 25;

let debug = false;
let num_blocos = BLOCOS_TOTAIS;
let blocos = [];
let jogador = new Jogador(350, 700, 250, 30);
let bola = new Bola(200, 500, 10, VELMIN_HOR_BOLA, -VELINIC_VER_BOLA);
let gameState = 0;
let placar = 0;
let perdeu = false;
let rainbow = 0;

function setup() {
  createCanvas(1000, 800);
  geraBlocos();
  /*for (let i = 0; i < num_blocos; i++) {
    console.log(blocos[i]);
  }*/
}

function draw() {
  noStroke();
  console.log(gameState);
  rainbow = rainbowColor(rainbow);
  switch (gameState) {
    case 0:
      background(BACKGROUND);
      colorMode(HSB);
      fill(rainbow, 100, 100);
      textAlign(CENTER);
      textSize(100);
      text("BREAKOUT", width / 2, height / 2);
      textSize(24);
      fill(100);
      text("Pressione Espaço para começar!", width / 2, height / 2 + 100);
      if (keyIsPressed && keyCode == 32) gameState++;
      break;
    case 1:
      background(BACKGROUND);
      fill(rainbow, 100, 100);
      textAlign(CENTER);
      textSize(64);
      text("BREAKOUT", width / 2, BLOCOS_ALT_INICIAL - 20);
      textSize(280);
      fill(0, 0, 50);
      text(placar * PLACAR_MULT, width / 2, height / 2 + 200);
      textAlign(RIGHT);
      textSize(16);
      fill(100);
      text("Controles:", width - 10, height - 40);
      text("Setas laterais: Movem o jogador", width - 10, height - 25);
      text("X: modo Debug", width - 10, height - 10);
      if (debug) {
        textAlign(LEFT);
        text("Debug:", 10, height - 40);
      text("Seta para cima: Ganha o jogo",  10, height - 25);
      text("Seta para baixo: Perde o jogo",  10, height - 10);
        if (keyCode == UP_ARROW) gameState = 3;
        else if (keyCode == DOWN_ARROW) gameState = 2;
      }
      jogador.mostraJogador();
      jogador.controle();
      bola.mostraBola();
      detectaColisao();
      bola.movimenta();
      mostraBlocosVisiveis();
      if (num_blocos <= 0) gameState = 3;
      else if (perdeu) {
        gameState++;
        break;
      } else if (keyIsPressed && keyCode == ESCAPE) gameState = 2;
      break;
    case 2:
      background(BACKGROUND);
      fill(0, 100, 100);
      textAlign(CENTER);
      textSize(100);
      text("GAME OVER", width / 2, height / 2);
      break;
    case 3:
      background(BACKGROUND);
      fill(100);
      textAlign(CENTER);
      textSize(100);
      text("VOCÊ VENCEU!", width / 2, height / 2);
      break;
  }
}

function geraBlocos() {
  let x, y;
  let linha = BLOCOS_ALT_INICIAL;
  let coluna = 0;
  let largura = 100;
  let altura = 20;
  for (let i = 0; i < num_blocos; i++) {
    let novoBloco = random(1);
    if (coluna + largura <= width) {
      x = coluna;
      y = linha;
      let bloco = new Bloco(x, y, largura, altura, random(360), true);
      blocos.push(bloco);
      coluna += largura;
    } else {
      linha += altura;
      coluna = 0;
      x = coluna;
      y = linha;
      let bloco = new Bloco(x, y, largura, altura, random(360), true);
      blocos.push(bloco);
      coluna += largura;
    }
  }
}

function mostraBlocosVisiveis() {
  for (let i = 0; i < num_blocos; i++) {
    //blocos[i].escondeSeAtingido();
    blocos[i].mostraBloco();
  }
}

function detectaColisao() {
  // BLOCOS
  for (let i = 0; i < num_blocos; i++) {
    // esquerda
    let testeX = bola.x;
    let testeY = bola.y;

    if (bola.x < blocos[i].x) testeX = blocos[i].x;
    // esquerda
    else if (bola.x > blocos[i].x + blocos[i].largura)
      testeX = blocos[i].x + blocos[i].largura; // direita

    if (bola.y < blocos[i].y) testeY = blocos[i].y;
    // topo
    else if (bola.y > blocos[i].y + blocos[i].altura)
      testeY = blocos[i].y + blocos[i].altura; // fundo

    //console.log(bola.x,bola.y,testeX,testeY)
    let distancia = dist(bola.x, bola.y, testeX, testeY);

    if (distancia <= bola.r) {
      blocos.splice(i, 1);
      num_blocos--;
      placar += 1;
      bola.rebate(AUM_VEL_BOLA);
    }
  }

  // JOGADOR
  let testeX = bola.x;
  let testeY = bola.y;

  if (bola.x < jogador.x) testeX = jogador.x;
  // esquerda
  else if (bola.x > jogador.x + jogador.largura)
    testeX = jogador.x + jogador.largura; // direita

  if (bola.y < jogador.y) testeY = jogador.y;
  // topo
  else if (bola.y > jogador.y + jogador.altura)
    testeY = jogador.y + jogador.altura; // fundo

  //console.log(bola.x,bola.y,testeX,testeY)
  let distancia = dist(bola.x, bola.y, testeX, testeY);

  if (distancia <= bola.r) {
    bola.rebate(0);
  }

  /*let distX = bola.x - testeX;
    let distY = bola.y - testeY;
    let distancia = sqrt(distX * distX + distY * distY);*/

  //console.log("Distância para o bloco " + i + ": " + distancia);
}

function keyPressed() {
  if (key === "x") debug = !debug;
}

function rainbowColor(cor) {
  if (cor <= 360) cor++;
  else cor = 0;
  return cor;
}
