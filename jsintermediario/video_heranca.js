// videos_herança

var Pessoa = {
	nome: "",
	idade: "",
	saudacao: function () {
		console.log ("olá, meu nome é "+ this.nome  +" e minha idade é "+ this.idade);
	}

}

// Pessoa.nome = "Mateus";
// Pessoa.idade = 26;
// Pessoa.saudacao();

var Empregado = function (nome, idade) {
	this.nome = nome;
	this.idade = idade;
}

Empregado.prototype = Pessoa;

var max = new Empregado("Max",16);
var sonia = new Empregado("Sonia",50);

max.saudacao();
sonia.saudacao();


String.prototype.substituir = function (procurar, substituir) {
	return this.split(procurar).join(substituir);
}
console.log("TreinaWeb JS basico, JS intermediario".substituir("JS", "NODEJS"));
