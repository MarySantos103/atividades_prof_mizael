document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o campo de texto
    const campoTexto = document.getElementById('meuCampoTexto');

    // Adiciona um ouvinte para o evento 'keydown'
    campoTexto.addEventListener('keydown', function(event) {
        // Verifica se Shift está pressionado
        if (event.shiftKey) {
            console.log('Shift pressionado com a tecla:', event.key);
        } else {
            console.log('Tecla pressionada sem Shift:', event.key);
        }
    });
});
