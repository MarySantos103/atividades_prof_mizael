document.addEventListener('DOMContentLoaded', function() {

    const campoTexto = document.getElementById('meuCampoTexto');
    const teclaPressionada = document.getElementById('teclaPressionada');


    campoTexto.addEventListener('keydown', function(event) {

        teclaPressionada.textContent = 'Tecla pressionada: ' + event.key;
    });
});
