function setup() {
  createCanvas(260, 200);
  //noFill();
  beginShape();
  //translate(0, height/2);
  for (var mes = 1; mes <= 12; mes++) {
    var vendas = int(random(11));
    var x = mes;
    var y = vendas;
    //circle(x * 10, y * -5, 10);
    vertex(x * 20, height - y * 20);
    console.log("Mes: " + mes + " /Vendas: " + vendas);
  }
  endShape();
}
