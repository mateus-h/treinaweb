// ciando um objeto prototipo
var prototipo = {
	t: "Treina",
	w: "Web"
};

// Criando um objeto utilizando Object.create e o objeto
// prototipo como protótipo
var objeto = Object.create(protótipo);

// exibindo resultado na tela
document.write("O valor da propriedade 't' do objeto 'objeto' é: "+ objeto.t);
document.write("O valor da propriedade 'w' do objeto 'objeto' é: "+ objeto.w);