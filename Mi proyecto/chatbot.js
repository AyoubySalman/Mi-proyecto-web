// chatbot.js

async function sendMessageToChatbot(message) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer TU_API_KEY_AQUÍ"
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
