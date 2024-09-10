function setup() {
  createCanvas(600, 600);
  colunas2(30, height)
}

function colunas2(nColunas, altura){
  for(let i = 0; i < nColunas; i++) {
    line(20*i,0,20*i,altura);
  }
}