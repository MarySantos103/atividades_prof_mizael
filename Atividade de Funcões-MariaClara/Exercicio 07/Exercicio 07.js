// Função para verificar se os números são pares ou ímpares
function verificarParOuImpar(numeros) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    numeros.forEach(num => {
        const tipo = (num % 2 === 0) ? 'Par' : 'Ímpar';
        resultadoDiv.innerHTML += `<p>${num} é ${tipo}</p>`;
    });
}

function processarNumeros() {
    const texto = document.getElementById('numeros').value;
    const numeros = texto.split(',')
                          .map(num => parseFloat(num.trim()))
                          .filter(num => !isNaN(num));

    if (numeros.length === 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira números válidos.';
    } else {
        verificarParOuImpar(numeros);
    }
}

document.getElementById('formulario').addEventListener

('submit', function(event) {
    event.preventDefault();
    processarNumeros();
});
