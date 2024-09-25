function gerarTabelaMultiplicacao() {
    
    var numero = parseInt(document.getElementById('numero').value, 10);
    
    if (isNaN(numero)) {
        document.getElementById('tabela').innerHTML = 'Por favor, insira um número válido.';
        return;
    }
    
    var resultado = '<h2>Tabela de Multiplicação do ' + numero + '</h2>';
    for (var i = 1; i <= 10; i++) {
        resultado += '<p>' + numero + ' x ' + i + ' = ' + (numero * i) + '</p>';
    }
    
    document.getElementById('tabela').innerHTML = resultado;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault(); 
        gerarTabelaMultiplicacao();
    });
});
