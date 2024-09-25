document.addEventListener('DOMContentLoaded', function() {

    const campoTexto = document.getElementById('meuCampoTexto');


    campoTexto.addEventListener('keydown', function(event) {

        event.preventDefault();
        
        console.log('Ação padrão da tecla foi prevenida.');
    });
});
