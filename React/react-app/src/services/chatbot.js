export async function sendMessageNoStream(messages){
    const response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gemma3:1b",
            messages: messages,
            stream: false
        })
    });

    if(!response.ok){
        const data = await response.json();
        throw new Error(`Errore Ollama: ${response.status} - ${data.error}`)
    }

    return await response.json();
}