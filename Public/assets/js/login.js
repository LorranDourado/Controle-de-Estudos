const container = document.querySelector('.container');
const btnCadastro = document.getElementById('btn-cadastro');
const btnLogin = document.getElementById('btn-login');
const formCadastro = document.getElementById('form-cadastro');

// Função para trocar de tela (entre login e cadastro)
const toggleView = (isActive) => container.classList.toggle('active', isActive);

// Eventos de Navegação
btnCadastro.addEventListener('click', () => toggleView(true));
btnLogin.addEventListener('click', () => toggleView(false));

// Envio do formulário
formCadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    
    
    alert('Cadastro realizado com sucesso!');
    toggleView(false); // Volta para o login
    formCadastro.reset(); // Limpa os campos do formulário após sucesso
});

// Alternar senha visível/invisível (ícone de olho)
document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const input = toggle.previousElementSibling;
        const isPassword = input.type === 'password';
        
        input.type = isPassword ? 'text' : 'password';
        
        toggle.classList.toggle('fa-eye', !isPassword);
        toggle.classList.toggle('fa-eye-slash', isPassword);
    });
});