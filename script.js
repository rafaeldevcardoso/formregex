function nameResult(){
    var nome = document.getElementById('nome').value
    var resultado = document.getElementById('resultado')
    	
	
    nome = nome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
	
    var regex = /[ ]+/i;
    	
    if ( nome == '' |  nome == nome.match(regex)){
        resultado.innerHTML = `Olá, Mundo`
    }
    else{
        resultado.innerHTML = `Olá, ${nome}`
    }    
}