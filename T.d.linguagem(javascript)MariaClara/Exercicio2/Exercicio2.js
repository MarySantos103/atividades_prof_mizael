document.addEventListener('DOMContentLoaded', function() {

    const campoTexto = document.getElementById('meuCampoTexto');


    campoTexto.addEventListener('keydown', function(event) {
    
        if (event.key === 'Enter') {
            console.log('Tecla Enter pressionada!');
        }
    });
});
