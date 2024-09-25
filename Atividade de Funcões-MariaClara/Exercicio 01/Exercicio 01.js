function somarNumeros() {
    var num1 = parseFloat(document.getElementById('numero1').value) || 0;
    var num2 = parseFloat(document.getElementById('numero2').value) || 0;

    var soma = num1 + num2;

    document.getElementById('resultado').textContent = 'A soma é: ' + soma;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit' , function(event) {
       event.preventDefault();
       somarNumeros();
    });
});