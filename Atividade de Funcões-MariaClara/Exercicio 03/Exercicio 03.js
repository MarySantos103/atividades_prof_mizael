// Função para encontrar o maior número entre três números
function encontrarMaiorNumero() {
    // Obtém os valores dos campos de entrada
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var num3 = parseFloat(document.getElementById('numero3').value);
    
    // Encontra o maior número
    var maior = Math.max(num1, num2, num3);
    
    // Exibe o resultado
    document.getElementById('resultado').textContent = 'O maior número é: ' + maior;
}

// Adiciona um listener ao formulário para chamar a função ao enviar
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário e recarregamento da página
        encontrarMaiorNumero(); // Chama a função para encontrar o maior número
    });
});
