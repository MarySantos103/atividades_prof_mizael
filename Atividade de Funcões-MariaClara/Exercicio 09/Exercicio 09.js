function contarPalavrasLongas(palavras) {
    let contagem = 0;
    palavras.forEach(palavra => {
        if (palavra.length > 4) contagem++;
    });
    return contagem;
}

function processarPalavras() {
    const texto = document.getElementById('palavras').value;
    const palavras = texto.split(',')
                    .map(palavra => palavra.trim())
                    .filter(palavra => palavra.length > 0);

    const contagem = contarPalavrasLongas(palavras);
    document.getElementById('resultado').textContent = `Número de palavras com mais de 4 letras: ${contagem}`;
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    processarPalavras(); 
});
