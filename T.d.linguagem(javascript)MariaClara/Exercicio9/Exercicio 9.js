document.addEventListener('DOMContentLoaded', (event) => {
    const inputField = document.getElementById('myInput');

    inputField.addEventListener('keydown', function(event) {
    
        if (event.key === 'Backspace') {
            
            event.preventDefault();
        }
    });
});