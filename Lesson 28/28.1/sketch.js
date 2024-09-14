let numeros = [8, 8, 3, 4, 5];

function setup() {
  console.log(amplitude(numeros)); 
}

function amplitude(valores){
  return max(valores) - min(valores);
}
