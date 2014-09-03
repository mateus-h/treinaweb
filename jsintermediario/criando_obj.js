// OBJs Literais
// Criação de um objeto 
var objeto = {
	propriedade_1: "Valor 1",
	propriedade_2: "Valor 2"
};

var vazio = {};                     // Cria um objeto vazio (sem propriedades)

var pontos = {x:1, y:5};            // Um objeto com duas propriedades

var pontos2 = {
    x:pontos.x,
    y:pontos.y+5                    // O valor da propriedade y de pontos + 5
};                                  // Objeto com valores mais complexos

var curso = {
    nome:"Java Script",
    'nível':"Intermediário",        // O nome da propriedade possui carateres
                                    // especiais, usa-se strings literais.
    pre_requisitos:{                // O valor dessa propriedade é um objeto
        a:"HTML Básico",            // Essa propriedade não utiliza aspas.
        b:"JavaScript Básico",
        c:"CSS Básico",
        d:"Lógica de Programação"
    }
};