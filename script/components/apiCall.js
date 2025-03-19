async function apiCall(root, method, data) {
    const HOST_API = "http://127.0.0.1:8080";

    const requestInfo = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: data ? JSON.stringify(data) : undefined
    };

    try {
        const response = await fetch(`${HOST_API}${root}`, requestInfo);
        
        // Verifica o tipo da resposta
        const contentType = response.headers.get("Content-Type");

        let result;
        if (contentType && contentType.includes("application/json")) {
            // JSON
            result = await response.json();
        } else {
            // texto
            result = await response.text();
        }

        return {
            success: response.ok ? result : null,
            error: !response.ok ? result : null
        };

    } catch (error) {
        console.error("Erro na API:", error);
        return { error: "Erro ao conectar com o servidor" };
    }
}

export { apiCall };