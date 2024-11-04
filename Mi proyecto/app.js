// Lógica de registro y login
function loginUser(email, password) {
    // Verifica si el correo y contraseña coinciden con los registrados
    const registeredEmail = localStorage.getItem("userEmail");
    const registeredPassword = localStorage.getItem("userPassword");

    if (email === registeredEmail && password === registeredPassword) {
        alert("Inicio de sesión exitoso. ¡Bienvenido!");
        // Redirigir a una página de dashboard o bienvenida
        window.location.href = 'dashboard.html'; // Cambia 'dashboard.html' al nombre real de tu página
    } else {
        alert("Correo o contraseña incorrectos.");
    }
}

function registerUser(email, password) {
    // Guardar el correo y la contraseña en localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Usuario registrado exitosamente.");
    // Redirigir a la página de inicio de sesión
    window.location.href = 'login.html'; // Cambia 'login.html' al nombre real de tu página
}

// Lógica para el chatbot
async function sendMessageToChatbot(message) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer TU_API_KEY_AQUÍ" // Inserta tu API Key de OpenAI aquí
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": message}]
        })
    });

    const data = await response.json();
    const chatbotReply = data.choices[0].message.content;
    console.log("Respuesta del chatbot: " + chatbotReply);
}

// Captura el evento de registro
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    registerUser(email, password);
});

// Captura el evento de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value; // Usa el ID correcto
    const password = document.getElementById("password").value; // Usa el ID correcto
    
    loginUser(email, password);
});
