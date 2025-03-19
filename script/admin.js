import { apiCall } from "./components/apiCall.js";
import { showMessage } from "./components/showMessage.js";

// -------- Get
// const userSession = JSON.parse(localStorage.getItem("userSession"));
// -------- Delete
// localStorage.removeItem("userSession");
// -------- Update
// userSession.email = clienteEmail.value;
// userSession.nome = clienteNome.value;
// localStorage.setItem("userSession", JSON.stringify(userSession));

function mostrarSecao(id) {
    document.querySelectorAll('.main5').forEach(secao => {
        secao.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

// setInterval(() => {
//     showMessage("s", "Cuida");
// }, 4000);