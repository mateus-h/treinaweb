// // Criação do objeto cachorro.
// var cachorro = {
// 	nome: "Mutley"
// };

// // Associando o objeto coker ao objeto cachorro.
// var coker = cachorro;

// // exibindo o valor da propriedade nome que está em cachorro e coker.
// console.log("O valor da propriedade 'nome' que está em cachorro é : "+ cachorro.nome);
// console.log("O valor da propriedade 'nome' que está em coker é : "+ coker.nome);

// // Modificando o valor da propriedade nome do objetos coker
// coker.nome = "Valente";

// // exibindo o valor da propriedade nome que está em cachorro e coker.
// console.log("O valor da propriedade 'nome' que está em cachorro é : "+ cachorro.nome);
// console.log("O valor da propriedade 'nome' que está em coker é : "+ coker.nome);


// Modficação do arquivo para o topico 8
// Criando o objeto
// var objeto = {
//     // Incluindo propriedades com palavras reservadas.
//     // Será que vai funcionar?
//     for:"Propriedade 'for'",
//     case:"Propriedade 'case'",
//     "if":"Propriedade 'if'",
//     "function":"Propriedade 'function'",
//     // Uma vírgula foi colocada após a última propriedade
// };
// // Tudo o que foi feito neste exemplo pode ser feito,
// // mas deve ser evitado para prevenir problemas de compatibilidade.
// // Exibino valores do objeto.
// console.log(objeto);

// // Criando o objeto
// var objeto = {
//     // Criando a propriedade
//     propriedade:"Primeiro valor",
//     // Ao criar uma propriedade com o mesmo nome, o valor da primeira
//     // propriedade é substituído pelo valor da propriedade repetida
//     propriedade:"Valor repetido"
// };
// console.log(objeto);



// // ciando um objeto prototipo
// var prototipo = {
// 	t: "Treina",
// 	w: "Web"
// };

// // Criando um objeto utilizando Object.create e o objeto
// // prototipo como protótipo
// var objeto = Object.create(prototipo);

// // exibindo resultado na tela
// document.write("O valor da propriedade 't' do objeto 'objeto' é: "+ objeto.t);
// document.write("O valor da propriedade 'w' do objeto 'objeto' é: "+ objeto.w);



// // criando um objeto
// var objeto = {
// 	tw: "Treina Web"
// };
// // Exibindo o valor da propriedade 'tw' do objeto 'objeto'
// // utilizando ponto (.)
// document.write("o retorno de 'objeto.tw' é: "+ objeto.tw);
// document.write("<br>");



// // Exibindo o valor da propriedade 'tw' do objeto 'objeto'
// // utilizando colchetes ([])

// // document.write("o retorno do 'objeto[\"tw\"]' é: "+objeto["tw"]);

// // cirando um objeto
// var objeto = {
// 	tw: "treina web"
// };

// // O valor do objeto
// document.write("o valor do objeto é "+objeto.tw+"<br>");

// // configurando propriedade
// objeto.tw = "Treina web Cursos";

// // valor de tw após a configuração 
// document.write("o valor do objeto após a configuração "+objeto.tw);

// // Criando duas novas propriedades
// // Primeiro utilizando um identificador. Para isso utilize o ponto (.)
// objeto.x = 6;
// // Criando duas novas propriedades
// // Primeiro utilizando um identificador. Para isso utilize o ponto (.)
// objeto["y"] = 4;

// // Exibindo o valor das novas propriedades
// document.write("<br>");

// document.write("o valor da nova propriedade 'x' é "+objeto.x);

// document.write("<br>");

// document.write("o valor da nova propriedade 'y' é "+objeto.y);

// criando um objeto

// var objeto = {};

// // solicitando o nome da propriedade 
// var propriedade = prompt("Qual o nome da propriedade?");

// // solicitando o valor da prorpiedade
// var valor = prompt("Qual o valor da prorpiedade?");

// // configurando o valor da propriedade 
// objeto.propriedade = valor;

// // exibindo os dados digitados
// document.write("a propriedade que foi criada é "+propriedade+"<br>");
// document.write("o valor da propriedade criada é "+valor+"<br>");

// // Como nunca se sabe o que será digitado, não é possível utilizar a notação
// // de ponto (.) para acessar a propriedade, pois para utilizar o ponto tem
// // que utilizar um identificador, que é o nome exato da propriedade. Para
// // solucionar esse problema foi utilizada a notação de array ([]). Dessa
// // forma, foi possível acessar utilizando as variáveis
// document.write("o resultado para 'objeto[propriedade] ' é "+objeto.propriedade); 


// // criando um objeto
// var objeto ={
// 	a: 5,
// 	b: 3,
// 	c: 7,
// 	d: 9
// };

// // Fazendo um laço for/in para percorrer o objeto e imprimir na tela
// // o nome da propriedade e o seu valor
// for(prop in objeto){

// // O nome da propriedade fica armazenado na variável 'prop'
// 	document.write("o nome da propriedade é "+prop+"<br>");


//  // Acessando o valor da propriedade utilizando a notação de array
//  // e o nome da propriedade que está armazenado na variável 'prop' 
// 	document.write("o valor da prorpiedade é "+objeto[prop]+"<br>");
// 	document.write("<br><br>");
// }

// // criando objetos com heranças

// var t = {};
// t.x = 1;

// var w = Object.create(t);
// w.y = 2;

// var j = Object.create(w);
// j.z = 3; 

// document.write("o valor de 't.x' é: "+t.x+"<br>");
// document.write("o valor de 'w.y' é: "+w.y+"<br>");
// document.write("o valor de 'j.z' é: "+j.z+"<br>");
// document.write("<br>");

// // Caso queira fazer a soma da propriedade 'x' do objeto 't' com a
// // propriedade 'y' do objeto w, pode fazer assim:
// document.write("a soma das prorpuedade 't.x + w.y' é "+(t.x + w.y)+"<br>");

// // Mas também pode utilizar a 'herança':
// document.write("o resultado de 'j.x + j.y' é "+(j.x + j.y)+"<br>");

// // Mas qual o valor de 't.x'?
// document.write("Após a criação de 'j.x' o valor de 't.x' é: "+t.x+"<br />");


// videos_herança

// var Pessoa = {
// 	nome: "",
// 	idade: "",
// 	saudacao: function () {
// 		console.log ("olá, meu nome é "+ this.nome  +" e minha idade é "+ this.idade);
// 	}

// }

// // Pessoa.nome = "Mateus";
// // Pessoa.idade = 26;
// // Pessoa.saudacao();

// var Empregado = function (nome, idade) {
// 	this.nome = nome;
// 	this.idade = idade;
// }

// Empregado.prototype = Pessoa;


// String.prototype.substituir = function (procurar, substituir) {
// 	return this.split(procurar).join(substituir);
// }
// console.log("TreinaWeb JS basico, JS intermediario".substituir("JS", "NODEJS"));

// var max = new Empregado("Max",16);
// var sonia = new Empregado("Sonia",50);

// max.saudacao();
// sonia.saudacao();


// var Obj = {
// 	prop_1: "TreinaWeb",
// 	prop_2: "JS Intermediario"
// }
// document.write("Ao tentar acessar a 'prop_3' não existente o resultado é: "+ Obj.prop_3);
// document.write("<br /><br />");

// // Agora ao tentar acessar uma propriedade em um objeto que não existe um erro
// // será exibido no console do navegador

// document.write("Ao tentar acessar o 'Objs' que não existe o resultado é: "+ Obj_2.prop_3);

// var Obj ={
// 	x:2,
// 	y:3
// }
// Object.prototype = Obj;



// Excluindo propriedades

// var Obj ={
// 	prop_1 : 1,
// 	prop_2 : 2,
// 	prop_3 : 3

// }

// document.write("prop 1 :"+ Obj.prop_1+ "<br>");
// document.write("prop 2 :"+ Obj.prop_2+ "<br>");
// document.write("prop 3 :"+ Obj.prop_3+ "<br>");

// delete Obj.prop_2;

// document.write("prop 1 :"+ Obj.prop_1+ "<br>");
// document.write("prop 2 :"+ Obj.prop_2+ "<br>");
// document.write("prop 3 :"+ Obj.prop_3);


// var Obj = {
// 	prop1 : 1,
// 	prop2 : 2,
// 	prop3 : 3
// }
// var result1 = "prop1" in Obj;
// var result2 = "prop2" in Obj;
// var result3 = "prop3" in Obj;
// var result4 = "prop4" in Obj;

// console.log(result1, result2, result3, result4);

// var Obj = {
	// prop1: 1,
	// prop2: 2,
	// prop3: 3
// }
// document.write("toString em 'obj' é enumerável? "+Obj.propertyIsEnumerable("toString")+"<br />");
// document.write("Mas existe o 'toString' em 'Obj'?"+("toString" in Obj)+"<br>");
// 
// // Iterando no objeto 'obj' e exibindo os nomes das propriedades
// document.write("Nomes das propriedades enumeraveis do objeto 'obj':<br> ");
// for(prop in Obj){
	// document.write(prop + "<br>");
// }
// 
// // usando Object.key()
// 
// document.write("Nomes das propriedades enumeradas do objeto 'obj são: <br>"+ Object.keys(Obj));
// document.write("<br><br> Nomes das propriedades enumeradas do objeto 'obj são: <br>"+ Object.getOwnPropertyNames(Obj));


// Criando um objeto com métodos getter e setter
/*var obj = {
    // 'prop_1' e 'prop_1' são propriedades de leitura-gravação normais
    prop_1:5,
    prop_2:7,

    // 'prop_3' é propriedade de acesso de leitura-gravação com métodos
    // getter e setter. Lembre-se de colocar a vírgula após os
    // métodos de acesso
    get prop_3(){
        return(this.prop_1+this.prop_2);
    },
    set prop_3(valor){
        this.prop_1 *= valor;
        this.prop_2 *= valor;
    }
};

// Exibindo o valor de 'prop_1' e 'prop_2'.
document.write("O valor de 'prop_1' é: "+obj.prop_1+"<br />");
document.write("E de 'prop_2' agora é: "+obj.prop_2+"<br /><br />");

// Agora veja os métodos de acesso em prática
// O que acontece ao mandar exibir o valor de 'prop_3'?
// Descubra abaixo:
document.write("O retorno para 'obj.prop_3' é: "+obj.prop_3+"<br /><br />");

// Ele exibe a soma de 'prop_1' + 'prop_2'.
// Mas, e ao tentar modificar 'prop_3', passando o valor 5?
// Abaixo, você terá o resultado:
document.write("O retorno para 'obj.prop_3 = 5' é: "+(obj.prop_3 = 5)+"<br /><br />");

// Como assim? Nada aconteceu? Lembre-se, o método getter recupera o valor e o
// método setter grava o valor. Na função que foi criado o método setter, tem como
// função a modificação das propriedades 'prop_1' e 'prop_2' multiplicando-as
// pelo valor informado. Então, ao exibir o valor de 'prop_1' e 'prop_2' se obtém:
document.write("O valor de 'prop_1' agora é: "+obj.prop_1+"<br />");
document.write("E de 'prop_2' agora é: "+obj.prop_2);
*/

// Criando um objeto
// var obj = {
    // prop_1:5,
    // prop_2:7,
    // get prop_3(){
        // return(this.prop_1+this.prop_2);
    // },
    // set prop_3(valor){
        // this.prop_1 *= valor;
        // this.prop_2 *= valor;
    // }
// };
// 
// // Exibindo o objeto descritor de propriedades da propriedade 'prop_1';
// document.write("O retorno para 'Object.getOwnPropertyDescriptor(obj,\"prop_1\") é: <br />");
// 
// var obj_descritor = Object.getOwnPropertyDescriptor(obj,"prop_1");
// for(tw in obj_descritor){
    // document.write("<strong>"+tw+"</strong>: "+obj_descritor[tw]+"<br />");
// }
// 
// document.write("<br /><br />");
// 
// // Exibindo o objeto descritor de propriedades da propriedade 'prop_3';
// document.write("O retorno para 'Object.getOwnPropertyDescriptor(obj,\"prop_3\") é: <br />");
// 
// var obj_descritor = Object.getOwnPropertyDescriptor(obj,"prop_3");
// for(tw in obj_descritor){
    // document.write("<strong>"+tw+"</strong>: "+obj_descritor[tw]+"<br />");
// }
// Criando um objeto literal
// var obj_literal = {
    // nome: "José",
    // sobrenome: "Silta"
// };
// 
// // Criando um objeto utilizando Object.create e tendo
// // 'obj_literal' como protótipo.
// var obj = Object.create(obj_literal);
// 
// // Será que 'obj_literal' é protótipo de 'obj'?
// document.write("O retorno para 'obj_literal.isPrototypeOf(obj)' é: ");
// document.write(obj_literal.isPrototypeOf(obj)+"<br /><br />");
// 
// // Será que Object.prototype é protótipo de 'obj'?
// document.write("O retorno para 'Object.prototype.isPrototypeOf(obj)' é: ");
// document.write(Object.prototype.isPrototypeOf(obj));
// // 'obj' herda 'Object.prototype' de 'obj_literal'


// Este exemplo retorna a classe de qualquer objeto passada a ela
function qualClasse(valor){
    // Se, e somente se, o valor enviado for igual a 'null', retorna 'Null'
    if(valor === null) return "Null";
    // Se, e somente se, o valor enviado for igual a 'undefined', retorna 'Undefined'
    if(valor === undefined) return "Undefined";
    // Caso contrário ele retorna o atributo classe
    return Object.prototype.toString.call(valor).slice(8,-1);
}

// // Aqui, será exibido o resultado da chamada função 'qualClasse()'
// // para alguns exemplos:
// document.write("Qual o atributo classe de 'null': <strong>"+qualClasse(null)+"</strong><br />");
// document.write("Qual o atributo classe de '1': <strong>"+qualClasse(1)+"</strong><br />");
// document.write("Qual o atributo classe de '\"\"': <strong>"+qualClasse("")+"</strong><br />");
// document.write("Qual o atributo classe de 'false': <strong>"+qualClasse(false)+"</strong><br />");
// document.write("Qual o atributo classe de '{}': <strong>"+qualClasse({})+"</strong><br />");
// document.write("Qual o atributo classe de '[]': <strong>"+qualClasse([])+"</strong><br />");
// document.write("Qual o atributo classe de '/./': <strong>"+qualClasse(/./)+"</strong><br />");
// document.write("Qual o atributo classe de 'new Date()': <strong>"+qualClasse(new Date())+"</strong><br />");
// document.write("Qual o atributo classe de 'window': <strong>"+qualClasse(window)+"</strong><br />");

// var Obj_prototipo = {
	// prop1 : 1,
	// prop1 : 2
// };
// var obj = Object.create(Obj_prototipo);
// obj.pro3 = 3;
// 
// document.write("'obj' é um objeto extensível? ");
// document.write("<strong>"+Object.isExtensible(obj)+"</strong>");
// 
// 
// 
// // Tornando o objeto 'obj' não extensível
// Object.preventExtensions(obj);
// 
// // Verificando novamente se o objeto 'obj' é extensível
// document.write("Agora o 'obj' é um objeto extensível? ");
// document.write("<strong>"+Object.isExtensible(obj)+"</strong><br />");
// 
// // O que ocorre se eu tentar configurar uma propriedade para obj?
// obj.prop_4 = "teste";
// 
// // Nenhum erro é informado, mas será que a propriedade foi configurada
// // para o objeto 'obj'?
// document.write("As propriedades do objeto 'obj' são: ");
// document.write("<strong>"+Object.keys(obj)+"</strong><br />");
// 
// // Eu não posso configurar uma propriedade no objeto 'obj', mas posso
// // criar tal propriedade no seu protótipo e acessá-la de 'obj'
// obj_prototipo.prop_4 = "teste";
// document.write("O retorno para 'obj.prop_4' é: ");
// document.write("<strong>"+obj.prop_4+"</strong><br />");
// 
// // Será que eu consigo modificar o valor das propriedades do objeto 'obj'?
// obj.prop_3 = "Consegui configurar!";
// document.write("O retorno para 'obj.prop_3' é: ");
// document.write("<strong>"+obj.prop_3+"</strong><br />");


// Criando um objeto
// var obj = {
    // nome:"Paulo",
    // sobrenome:"Santos"
// };
// 
// // Utilizando o método toLocaleString() em um objeto comum
// document.write("O resultado para 'toLocaleString()' em um objeto comum é: ");
// var teste = obj.toLocaleString();
// document.write("<strong>"+obj.toLocaleString()+"</strong><br />");
// 
// // Utilizando o método toLocaleString() em um objeto Date
// var data = new Date();
// document.write("O resultado para 'toLocaleString()' em um objeto Date é: ");
// document.write("<strong>"+data.toLocaleString()+"</strong><br />");
// 
// // Utilizando o método toLocaleString() em um array
// document.write("O resultado para 'toLocaleString()' em um array é: ");
// var teste = new Array("TreinaWeb Cursos", data);
// document.write("<strong>"+teste.toLocaleString()+"</strong><br />");

// 

var texto = "Treina Web cursos ";

var palavra = new RegExp('Curso', 'i');

if (texto.search(palavra !== -1 )) {
	document.write("A palavra foi encontrada."+ palavra);
	
}else{
	document.write("A palavra não foi encontrada");
}
