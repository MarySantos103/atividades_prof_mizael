// Função para contar o número de caracteres de uma string
function contarCaracteres() {
    // Obtém o valor do campo de entrada
    var texto = document.getElementById('texto').value;
    
    // Conta o número de caracteres
    var numeroDeCaracteres = texto.length;
    
    // Exibe o resultado
    document.getElementById('resultado').textContent = 'Número de caracteres: ' + numeroDeCaracteres;
}

// Adiciona um listener ao formulário para chamar a função ao enviar
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário e recarregamento da página
        contarCaracteres(); // Chama a função para contar os caracteres
    });
});
