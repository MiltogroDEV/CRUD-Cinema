import { apiCall } from "./components/apiCall.js";
import { showMessage } from "./components/showMessage.js";

const userSession = JSON.parse(localStorage.getItem("userSession"));

// -------- Get
// const userSession = JSON.parse(localStorage.getItem("userSession"));
// -------- Delete
// localStorage.removeItem("userSession");
// -------- Update
// userSession.email = clienteEmail.value;
// userSession.nome = clienteNome.value;
// localStorage.setItem("userSession", JSON.stringify(userSession));

async function carregarSessoes() {
    try {
        const sessoes = await apiCall("/sessao/todasSessao", "GET");

        const container = document.getElementById("sessoesContainer");
        container.innerHTML = "";

        sessoes.forEach(sessao => {
            const button = document.createElement("button");
            button.className = "btn btn-primary";
            button.type = "button";
            button.textContent = `Sessão ${sessao.id}`;
            
            container.appendChild(button);
        });
    } catch (error) {
        console.error("Erro ao carregar sessões:", error);
    }
}

document.addEventListener("DOMContentLoaded", carregarSessoes);
