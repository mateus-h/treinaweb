// exemplo 1
var t = {};                 // 't' herda métodos de objeto de Object.prototype
t.x = 1;                    // e tem uma propriedade própria 'x'.
var w = Object.create(t);   // 'w' herda propriedades de 't' e Object.prototype
w.y = 2;                    // e tem uma propriedade própria 'y'.
var j = Object.create(w);   // 'j' herda propriedades de 'w', 't' e Object.prototype
j.z = 3;                    // e tem uma propriedade própria 'z'.



// exemplo 2
// Criando objetos para fazer teste de herança
var t = {};
t.x = 1;

var w = Object.create(t);
w.y = 2;

var j = Object.create(w);
j.z = 3;

// Exibindo os valores
document.write("O valor de 't.x' é: "+t.x+"<br />");
document.write("O valor de 'w.y' é: "+w.y+"<br />");
document.write("O valor de 'j.z' é: "+j.z+"<br />");
document.write("<br />");

// Caso queira fazer a soma da propriedade 'x' do objeto 't' com a
// propriedade 'y' do objeto w, pode fazer assim:
document.write("O resultado para 't.x + w.y' é: "+(t.x+w.y)+"<br />");

// Mas também pode utilizar a 'herança':
document.write("O resultado para 'j.x + j.y' é: "+(j.x+j.y)+"<br />");
document.write("<br />");

// Se criar a variável 'x' no objeto 'j', o resultado para 'j.x + j.y'
// será diferente:
j.x = 5;
document.write("Agora o resultado para 'j.x + j.y' é: "+(j.x+j.y)+"<br />");
document.write("<br />");

// Mas qual o valor de 't.x'?
document.write("Após a criação de 'j.x' o valor de 't.x' é: "+t.x+"<br />");
// O valor de 't.x' não é afetado por modificações em j