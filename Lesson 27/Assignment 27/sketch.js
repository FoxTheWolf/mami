function setup() {
  createCanvas(260, 200);;
  beginShape();
  fill(0,0,255);
  vertex(0, height);
  for (var mes = 1; mes <= 12; mes++) {
    var vendas = int(random(11));
    var x = mes;
    var y = vendas;
    vertex(x * 20, height - y * 20);
    console.log("Mes: " + mes + " /Vendas: " + vendas);
  }
  vertex(width, height);
  endShape();
}
