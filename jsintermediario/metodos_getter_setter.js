var Obj = {
	prop1 : 5,
	prop2 : 7,
	
	get prop3(){
		return(this.prop1 + this.prop2);
	},
	
	set prop3(valor){
		prop1 *= valor;
		prop2 *= valor; 
	}	
};

document.write("O valor de 'prop_1' é: "+obj.prop_1+"<br />");
document.write("E de 'prop_2' agora é: "+obj.prop_2+"<br /><br />");