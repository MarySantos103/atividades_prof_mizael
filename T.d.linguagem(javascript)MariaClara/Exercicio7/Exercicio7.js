const keyCodeElement = document.getElementById('key-code');

document.addEventListener('keydown', function(event) {

    const keyCode = event.keyCode || event.which;

    keyCodeElement.textContent = `Código da tecla: ${keyCode}`;
});
