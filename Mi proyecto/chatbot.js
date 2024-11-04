// chatbot.js

// Función para enviar un mensaje al chatbot
async function sendMessageToChatbot(message) {
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getApiKey()}` // Función para obtener la API Key de forma segura
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{"role": "user", "content": message}]
            })
        });

        // Comprobar si la respuesta es válida
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const data = await response.json();
        const chatbotReply = data.choices[0].message.content;
        console.log("Respuesta del chatbot: " + chatbotReply);
        
        // Aquí podrías agregar la lógica para mostrar la respuesta en tu interfaz de usuario
        displayChatbotReply(chatbotReply); // Ejemplo de función para mostrar respuesta

    } catch (error) {
        console.error("Error al enviar el mensaje al chatbot:", error);
        // Manejar el error de manera adecuada (ej. mostrar un mensaje al usuario)
    }
}

// Función para obtener la API Key de manera segura (ejemplo)
function getApiKey() {
    // En producción, debes evitar incluir la API Key en el código fuente
    return "TU_API_KEY_AQUÍ"; // Cambiar esto por un método seguro para manejar la API Key
}

// Función de ejemplo para mostrar la respuesta del chatbot en la interfaz
function displayChatbotReply(reply) {
    const chatContainer = document.getElementById("chatContainer"); // Asegúrate de tener un contenedor en tu HTML
    const replyElement = document.createElement("div");
    replyElement.className = "chatbot-reply"; // Agrega estilos a tus respuestas
    replyElement.innerText = reply;
    chatContainer.appendChild(replyElement);
}
