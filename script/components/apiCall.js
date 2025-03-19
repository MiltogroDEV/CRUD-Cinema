async function apiCall(root, method, data) {
    const HOST_API = "http://127.0.0.1:8080";

    const requestInfo = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: data ? JSON.stringify(data) : null // Garantir que 'data' só seja enviada se existir
    };

    try {
        const response = await fetch(`${HOST_API}${root}`, requestInfo);

        // Verificar se a resposta foi bem-sucedida
        if (!response.ok) {
            const errorText = await response.text(); // Pega o corpo da resposta como texto
            throw new Error(`Erro na API: ${errorText}`);
        }

        // Tenta processar a resposta como JSON
        let result;
        try {
            result = await response.json(); // Tenta converter a resposta em JSON
        } catch (jsonError) {
            // Se não for possível converter para JSON, retorna a resposta como texto
            result = await response.text();
        }

        return {
            success: result,
            error: null
        };

    } catch (error) {
        console.error("Erro na API:", error);
        return { error: error.message || "Erro ao conectar com o servidor" };
    }
}

export { apiCall };


//  async function apiCall(root, method, data) {
//     const HOST_API = "http://127.0.0.1:8080";

//     const requestInfo = {
//         method: method,
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     };

//     try {
//         const response = await fetch(`${HOST_API}${root}`, requestInfo);
//         const result = await response.json();

//         return {
//             success: response.ok ? result : null,
//             error: !response.ok ? result : null
//         };

//     } catch (error) {
//         console.error("Erro na API:", error);
//         return { error: "Erro ao conectar com o servidor" };
//     }
// }

// export { apiCall };