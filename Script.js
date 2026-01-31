// script.js MODIFICADO con API real
async function getRealAIResponse(userMessage) {
    try {
        // API GRATUITA - DeepSeek API (necesitas clave)
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TU_API_KEY_AQUI'
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    { role: 'system', content: 'Eres un experto en Lua y Roblox scripting.' },
                    { role: 'user', content: userMessage }
                ],
                max_tokens: 1000
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
        
    } catch (error) {
        // Si falla la API, usa respuestas predefinidas
        return generateFallbackResponse(userMessage);
    }
}