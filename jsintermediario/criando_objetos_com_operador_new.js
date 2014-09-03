var objeto = new Object();  // Cria um objeto vazio: o mesmo que {}.
var array = new Array();  // Cria um array vazio: o mesmo que [].
var data = new Date();    // Cria um objeto Date representando a hora atual.
var exp_reg = new RegExp("tw"); // Cria um objeto RegExp para a comparação de padrões.


// Criando os objetos com o operador new
var vazio = new Object();  // Um objeto vazio: o mesmo que {}.

var array = new Array();  // Um array vazio: o mesmo que [].

var data = new Date();    // Um objeto Date representando a hora atual.

var exp_reg = new RegExp("tw"); // Um objeto RegExp.

// Criando o objeto e atribuindo propriedades.
var objeto = new Object({
   // A estrutura das propriedades é a mesma da criação de um objeto literal.
   // A propriedade pode ser um indetificador JavaScript,
   propriedade_1:"Valor da propriedade 1",
   // pode ser um novo objeto,
   propriedade_objeto:{
       propriedade:"Valor da propriedade"
   },
   // ou uma string literal.
   "propriedade 3":"Valor da propriedade 3"
});