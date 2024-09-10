/* Nao precisaremos da funcao draw, pois esse codigo so precisa executar uma unica vez */

function setup() {
  createCanvas(256,192);
  background(0);
  noFill()
  stroke(255)
  /* o canvas, background e cores de linhas
  sao definidos para serem fieis ao exemplo */
  
  let pi = 3.1415926 
  /* Nao precisamos definir o valor do pi, pois ele ja se encontra
  definido, mas iremos definir nosso proprio conforme o exemplo para o
  codigo ser o mais fiel possivel */
  
  ellipse(128,30,120,40)
  ellipse(128,160,120,40)
  /* criamos duas elipses nas posicoes originais, tomando cuidado para transformar
  o ratio em um tamanho especifico */
  
  let d = pi/2;
  let x, y, s, t;
/* essas variáveis são declaradas fora
do loop pela forma que o p5.js funciona */
  
  for(let an = 0; an < 2*pi; an = an + 0.15){
    /* cria-se um loop de an = 0 até 2 pi,
    mas o an aumenta 0.15 e não 1,
    conforme mencionado no STEP em basic */
    
    x = 128+60*cos(an);
    y = 30+20*sin(an);
    s = 128+60*cos(an+d);
    t = 160+20*sin(an+d);
    line(x,y,s,t);
    /* essas linhas são praticamente
    identicas ao basic, exceto line,
    que é só um pouco diferente */
  }
  
  /* ao executar, esse código desenha duas elipses horizontais, e linhas entre 
  posições x,y e s,t, em que x,y correspondem a posições no contorno de uma elipse,
  e s,t na outra */
}