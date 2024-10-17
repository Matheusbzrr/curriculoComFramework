document.addEventListener('DOMContentLoaded', () => {
    const telefoneInput = document.getElementById('inputTelefone');

    
    telefoneInput.addEventListener('input', (event) => {
        let value = event.target.value.replace(/\D/g, '');
        
        if (value.length > 11) {
            value = value.substring(0, 11);
        }

        if (value.length > 10) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length > 5) {
            value = value.replace(/(\d{2})(\d{5})(\d+)/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})(\d+)/, '($1) $2');
        }
        
        event.target.value = value;
    });
    
    const enviar = document.getElementById('enviar');
    const form = document.getElementById('form');

    enviar.addEventListener('click', (event) => {
        event.preventDefault();
        const nome = document.getElementById('inputNome').value;
        const sobrenome = document.getElementById('inputSobrenome').value;
        const email = document.getElementById('inputEmail').value;
        const telefone = document.getElementById('inputTelefone').value;
        const idioma = document.getElementById('inputIdioma').value;

        if (!nome || !sobrenome || !email || !telefone || idioma === 'Selecione o idioma') {
            alert('Por favor, preencha todos os campos obrigatórios.');
        } else {
            alert('Formulário enviado! Obrigado pelo contato.');
            
            form.reset(); 
            
        }
    });
});
