// // Criando uma função para exibir os alertas
// // de acordo com o método e tempo informados.
// function contagem(metodo, tempo){
    // // Criando um objeto RegExp para testar o campo tempo
    // // que tem que ser numérico!
    // var numeros = /[0-9]/;
    // var acao;
// 
    // // Efetuando o teste para verificar se o valor da variável
    // // tempo é realmente numérico!
    // if(numeros.test(tempo)){
        // // Transforma o tempo de segundo para milissegundos
        // tempo = tempo*1000;
// 
        // // Verifica qual método foi chamado. Se não reconhece
        // // a chamada exibe um alerta informando.
        // switch (metodo.toUpperCase()){
            // case 'T':
                // acao = setTimeout(resposta, tempo);
                // break;
            // case 'I':
                // acao = setInterval(resposta, tempo);
                // break;
            // default:
                // alert("Método inválido você deve digitar 'T' para setTimeout() e 'I' para setInterval()!");
                // break;
        // }
    // }
    // // Se a variável tempo não for numérica exibe um alerta
    // else{
        // alert("O tempo informado é inválido");
    // }
// 
    // // Criando a função que será chamada pelo método selecionado
    // var i = 1;
    // function resposta(){
        // // Convertendo o tempo em milissegundos
        // tempo = tempo/1000;
// 
        // // Exibindo a contagem, se clicar em OK continuará, mas se
        // // clicar em cancelar clearInterval será chamado!
        // resposta = confirm("Função chamada após: "+tempo+" seg. Ela foi chamada "+i+" vez(es)!");
// 
        // i += 1;
        // // Quando clicado em 'Cancelar' clearInterval é acionado e
        // // exibe um alerta informando sobre o cancelamento.
        // if(resposta === false){
            // clearInterval(acao);
            // alert("Intervalo cancelado!");
        // }
    // }
// }
// 
// // Solicitando qual método deve ser utilizado
// var metodo = prompt("Digite 'T' para setTimeout() e 'I' para setInterval():");
// 
// // Solicitando o tempo do intervalo em segundos
// var tempo = prompt("Digite o intervalo em segundos:");
// 
// // Chamando a função contagem() e informando qual o método e o tempo
// contagem(metodo, tempo);


// alert(window.location);
