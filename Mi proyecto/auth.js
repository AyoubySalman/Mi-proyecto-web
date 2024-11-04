// auth.js

// Función para registrar un usuario
function registerUser(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Usuario registrado: " + email);
    
    // Guardar el usuario en localStorage (solo para propósitos de demostración)
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    
    alert("Registro exitoso. Puedes iniciar sesión ahora.");
    window.location.href = 'login.html'; // Redirigir a la página de inicio de sesión
}

// Función para iniciar sesión
function loginUser(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    console.log("Usuario logueado: " + email);
    
    // Verificar el usuario contra localStorage
    const registeredEmail = localStorage.getItem("userEmail");
    const registeredPassword = localStorage.getItem("userPassword");

    if (email === registeredEmail && password === registeredPassword) {
        alert("Inicio de sesión exitoso. ¡Bienvenido!");
        window.location.href = 'dashboard.html'; // Redirigir al dashboard
    } else {
        alert("Correo o contraseña incorrectos.");
    }
}

// Captura los eventos de los formularios
document.getElementById("registrationForm").addEventListener("submit", registerUser);
document.getElementById("loginForm").addEventListener("submit", loginUser);
