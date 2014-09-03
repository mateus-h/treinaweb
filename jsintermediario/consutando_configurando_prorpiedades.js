// exemplo 1
// Criando um objeto
var objeto = {
    tw:"TreinaWeb Cursos"
};

// Exibindo o valor da propriedade 'tw' do objeto 'objeto'
// utilizando ponto (.)
document.write("O retorno de 'objeto.tw' é: "+objeto.tw);
document.write("<br />");

// Exibindo o valor da propriedade 'tw' do objeto 'objeto'
// utilizando colchetes ([])
document.write("O retorno de 'objeto[\"tw\"]' é: "+objeto["tw"]);

// exemplo 2
// Criando um objeto
var objeto = {
    tw:"TreinaWeb"
};

// O valor da propriedade 'tw'
document.write("O valor de 'tw' é: "+objeto.tw+"<br />");

// Configurando a propriedade 'tw'
objeto.tw = "TreinaWeb Cursos";

// O valor de 'tw' após a configuração
document.write("O valor de 'tw' agora é: "+objeto.tw+"<br />");

// Criando duas novas propriedades
// Primeiro utilizando um identificador. Para isso utilize o ponto (.)
objeto.x = 6;
// Agora utilizando uma string literal. Para isso utilize os colchetes ([])
objeto["y"] = 4;

// Exibindo o valor das novas propriedades
document.write("O valor da nova propriedade 'x' é: "+objeto.x+"<br />");
document.write("O valor da nova propriedade 'y' é: "+objeto.y);

// exemplo 3
// Criando um objeto
var objeto = {};

// Solicitando o nome da propriedade
var propriedade = prompt("Qual o nome da propriedade?");

// Criando a propriedade no objeto.
objeto[propriedade] = "";

// Solicitando o valor da propriedade.
var valor = prompt("Qual o valor da propriedade?");

// Configurando o valor da propriedade.
objeto[propriedade] = valor;

// Exibindo os dados digitados
document.write("A propriedade que foi criada é a: "+propriedade+"<br />");
document.write("O valor da propriedade é o: "+valor+"<br />");

// Como nunca se sabe o que será digitado, não é possível utilizar a notação
// de ponto (.) para acessar a propriedade, pois para utilizar o ponto tem
// que utilizar um identificador, que é o nome exato da propriedade. Para
// solucionar esse problema foi utilizada a notação de array ([]). Dessa
// forma, foi possível acessar utilizando as variáveis
document.write("O resultado para 'objeto[propriedade]' é: ");
document.write(objeto[propriedade]);

// exemplo 4
// Criando um objeto
var objeto = {
    a:5,
    b:3,
    c:7,
    d:9
};

// Fazendo um laço for/in para percorrer o objeto e imprimir na tela
// o nome da propriedade e o seu valor
for(prop in objeto){
    // O nome da propriedade fica armazenado na variável 'prop'
    document.write("O nome da propriedade é: "+prop+"<br />");
    // Acessando o valor da propriedade utilizando a notação de array
    // e o nome da propriedade que está armazenado na variável 'prop'
    document.write("O valor da propriedade '"+prop+"' é: "+objeto[prop]);
    document.write("<br /><br />");
}