const container = document.querySelector('.container');

const btnCadastro = document.getElementById('btn-cadastro');
const btnLogin = document.getElementById('btn-login');
const formCadastro = document.getElementById('form-cadastro');

// Abre tela de cadastro
btnCadastro.addEventListener('click', () => {
    container.classList.add('active');
});

// Volta para tela de login
btnLogin.addEventListener('click', () => {
    container.classList.remove('active');
});

// Envio do formulário de cadastro
formCadastro.addEventListener('submit', (event) => {
    event.preventDefault();

    // Aqui futuramente você enviará os dados para o PHP

    alert('Cadastro realizado com sucesso!');

    // Após cadastrar, volta para login
    container.classList.remove('active');
});

const toggles = document.querySelectorAll('.toggle-password');

toggles.forEach(toggle => {

    toggle.addEventListener('click', () => {

        const input = toggle.previousElementSibling;

        if (input.type === 'password') {

            input.type = 'text';

            toggle.classList.remove('fa-eye');
            toggle.classList.add('fa-eye-slash');

        } else {

            input.type = 'password';

            toggle.classList.remove('fa-eye-slash');
            toggle.classList.add('fa-eye');

        }

    });

});
