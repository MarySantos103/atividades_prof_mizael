function calcularMedia(numeros) {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}

function processarNumeros() {
    const texto = document.getElementById('numeros').value;
    const numeros = texto.split(',')
                          .map(num => parseFloat(num.trim()))
                          .filter(num => !isNaN(num));

    if (numeros.length === 0) {
        document.getElementById('resultado').textContent = 'Por favor, insira números válidos.';
    } else {
        const media = calcularMedia(numeros);
        document.getElementById('resultado').textContent = `A média dos números é: ${media.toFixed(2)}`;
    }
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    processarNumeros(); 
});
