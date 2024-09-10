function setup() {
  createCanvas(260, 200);
  translate(0, height/2);
  for (var mes = 1; mes <= 12; mes++) {
    var vendas = int(random(11));
    var x = mes;
    var y = vendas;
    circle(x * 10, y * -5, 10);
    console.log("Mes: " + mes + " /Vendas: " + vendas);
  }
}
