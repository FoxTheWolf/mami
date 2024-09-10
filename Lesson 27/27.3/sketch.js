function setup() {
  createCanvas(260, 200);
  for (var mes = 1; mes <= 12; mes++) {
    var vendas = int(random(11));
    var x = mes;
    var y = vendas;
    rect(x * 20, height - y * 20, 16, 200);
    console.log("Mes: " + mes + " /Vendas: " + vendas);
  }
}
