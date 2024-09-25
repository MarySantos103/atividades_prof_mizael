// Função para verificar se o número é par ou ímpar
function verificarParImpar() {
    // Obtém o valor do campo de entrada
    var numero = parseInt(document.getElementById('numero').value, 10);
    
    // Verifica se o número é par ou ímpar
    var resultado = (numero % 2 === 0) ? 'par' : 'ímpar';
    
    // Exibe o resultado
    document.getElementById('resultado').textContent = 'O número ' + numero + ' é ' + resultado + '.';
}

// Adiciona um listener ao formulário para chamar a função ao enviar
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário e recarregamento da página
        verificarParImpar(); // Chama a função de verificação
    });
});
