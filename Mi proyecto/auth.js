// auth.js

// Función para registrar un usuario
function registerUser(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Usuario registrado: " + email);
    
    // Aquí iría la lógica adicional para registrar al usuario
    // Por ejemplo, hacer una petición a un servidor o API para guardar el usuario
}

// Función para iniciar sesión
function loginUser(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    console.log("Usuario logueado: " + email);
    
    // Aquí iría la lógica adicional para iniciar sesión
    // Por ejemplo, validar el usuario contra un servidor o API
}
