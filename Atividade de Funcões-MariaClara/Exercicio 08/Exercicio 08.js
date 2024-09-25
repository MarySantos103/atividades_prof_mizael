function processarNumeros() {
    const texto = document.getElementById('numeros').value;
    const numeros = texto.split(',')
                          .map(num => parseFloat(num.trim()))
                          .filter(num => !isNaN(num));

    if (numeros.length === 0) {
        document.getElementById('resultado').textContent = 'Insira números válidos.';
    } else {
        const maiorNumero = encontrarMaiorNumero(numeros);
        document.getElementById('resultado').textContent = 'O maior número é: ' + maiorNumero;
    }
}

// Adiciona um listener ao formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário
    processarNumeros(); // Processa os números
});


