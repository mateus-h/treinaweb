window.onload = function (){
	var btnSubmeter, btnRedimencionar;
	
	btnSubmeter.onclick = function (){
		btnSubmeter = document.getElementById("submeter");
		btnRedimencionar = document.getElementById("exec");
		
		btnRedimencionar.onclick = function () {
		  opener.parent.redimencionar(500,500,window);
		};

	};
};
