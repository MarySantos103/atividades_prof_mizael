
document.addEventListener('DOMContentLoaded', function() {

    const campoTexto = document.getElementById('meuCampoTexto');


    campoTexto.addEventListener('keydown', function(event) {
    
        console.log('Tecla pressionada:', event.key);
    });
});
