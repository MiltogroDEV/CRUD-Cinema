async function apiCall(root, method, data) {
    const HOST_API = "http://127.0.0.1:8080";

    const requestInfo = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(`${HOST_API}${root}`, requestInfo);
        const result = await response.json();

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