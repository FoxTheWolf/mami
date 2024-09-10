function setup() {
  createCanvas(400,600);
  for (let i = 0; i < 600; i++){
    if (ePar(i) == 0)
      line(0, i, 400, i);
  }
}

function ePar(x){
  return(x % 10);
}

function grade(nColunas, nLinhas){
  
}