// Esto será para la lógica de registro y login
function loginUser(email, password) {
    console.log("Usuario logueado: " + email);
}

function registerUser(email, password) {
    console.log("Usuario registrado: " + email);
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
// app.js

function loginUser(email, password) {
    // Verifica si el correo y contraseña coinciden con los registrados
    const registeredEmail = localStorage.getItem("userEmail");
    const registeredPassword = localStorage.getItem("userPassword");

    if (email === registeredEmail && password === registeredPassword) {
        alert("Inicio de sesión exitoso. ¡Bienvenido!");
        // Aquí podrías redirigir a una página de bienvenida o dashboard
    } else {
        alert("Correo o contraseña incorrectos.");
    }
}

// Captura el evento de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    
    loginUser(email, password);
});
