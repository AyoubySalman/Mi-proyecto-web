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
