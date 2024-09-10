const N = 5;

function setup() {
  createCanvas(600, 600);
  circle(300, 300, 300);
  let sorteado,
    d1 = 0,
    d2 = 0,
    d3 = 0;

  for (let i = 0; i < N; i++) {
    sorteado = int(random(3));
    switch(sorteado) {
      case 0:
        d1++;
        break;
      case 1:
        d2++;
        break;
      case 2:
        d3++;
        break;
    }
  }
  let anguloD1 = radians((d1 / N) * 360);
  let anguloD2 = radians((d2 / N) * 360);
  let anguloD3 = radians((d3 / N) * 360);
  console.log("Radianos d1: " + anguloD1 + " d2: " + anguloD2 + " d3: " + anguloD3);
  fill(255,0,0);
  arc(300, 300, 300, 300, 0, anguloD1, PIE);
  fill(0,255,0);
  arc(300, 300, 300, 300, anguloD1, anguloD1 + anguloD2, PIE);
  fill(0,0,255);
  arc(300, 300, 300, 300, anguloD1 + anguloD2, anguloD1 + anguloD2 + anguloD3, PIE);
}
