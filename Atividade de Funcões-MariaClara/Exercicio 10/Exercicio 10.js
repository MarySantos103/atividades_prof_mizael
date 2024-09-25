function filtrarNumerosPositivos(numeros) {
    let positivos = [];
    numeros.forEach(num => {
        if (num > 0) positivos.push(num);
    });
    return positivos;
}
function processarNumeros() {
    const texto = document.getElementById('numeros').value;
    const numeros = texto.split(',')
                          .map(num => parseFloat(num.trim()))
                          .filter(num => !isNaN(num));

    const positivos = filtrarNumerosPositivos(numeros);
    document.getElementById('resultado').textContent = `Números positivos: ${positivos.join(', ')}`;
}


document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    processarNumeros(); 
});
