const loginForm = document.getElementById('login-form');
const loginContainer = document.getElementById('login-container');
const profileInfo = document.getElementById('profile-info');
const welcomeMessage = document.getElementById('welcome-message');
const profilePic = document.getElementById('profile-pic');
const usernameDisplay = document.getElementById('username');
const errorMessage = document.getElementById('error-message');
const menuItems = document.querySelectorAll('.menu-item');

// Función para mostrar la sección correspondiente
function showSection(sectionId) {
    const sections = document.querySelectorAll('.main-content > div');
    sections.forEach(section => {
        if (section.id === sectionId.substring(1)) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// Evento para manejar el envío del formulario de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Validar el correo electrónico
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Correo electrónico inválido.';
        errorMessage.classList.remove('hidden');
        return;
    }

    // Validar la contraseña
    if (password.length < 8) {
        errorMessage.textContent = 'Contraseña demasiado corta.';
        errorMessage.classList.remove('hidden');
        return;
    }

    // Mostrar mensaje de bienvenida y actualizar perfil
    loginContainer.classList.add('hidden');
    welcomeMessage.classList.remove('hidden');
    profileInfo.classList.remove('hidden');
    usernameDisplay.textContent = username;
    errorMessage.classList.add('hidden');
});

// Función para validar correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Evento de cambio en las opciones del menú
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(menu => menu.classList.remove('selected'));
        this.classList.add('selected');
        showSection(`#${this.id}-section`);
    });
});


