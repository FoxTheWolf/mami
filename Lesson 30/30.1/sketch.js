function setup() {
  let pares = 0;
  let impares = 0;

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      console.log("Jogador 1: " + i);
      console.log("Jogador 2: " + j);
      let soma = i + j;
      console.log("Soma: " + soma);
      if (soma % 2 == 0) {
        console.log("Resultado: Par");
        pares++;
      } else {
        console.log("Resultado: Impar");
        impares++;
      }
      console.log("");
    }
  }
  console.log("Pares: " + pares);
  console.log("Impares: " + impares);
}
