var janela;
window.onload = function (){
	var btnAbrir, btnfechar, btnSumit, frm;
	btnAbrir = document.getElementById("openWindow");
	btnfechar = document.getElementById("closeWindow");
	btnSumit = document.getElementById("sub");
	frm = document.forms.formulario;
	
	btnAbrir.onclick = function (){
		janela = window.open("opener.html","janela", "width=200, height=200");
		setTimeout(function (){ 
			janela.resizeTo(300,300);
		},2000);
	};
	
	btnfechar.onclick = function (){
		if(janela !== undefined){
			janela.window.close();
		};
	};
	
	frm.onsubmit = function (){
		return false;
	};
	
	btnSumit.onclick = function () {
		var inputNome = document.getElementById("nome");
		if (inputNome.value !== "" && janela !== undefined) {
			janela.document.getElementById("nome").value = inputNome.value;
		};
	};
	
};

function redimencionar (width, height, obj){
	alert("Redimencionando para "+ width +" tamanho de "+height);
	obj.resizeTo(500,500);
};

