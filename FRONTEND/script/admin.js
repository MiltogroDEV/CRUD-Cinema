import { apiCall } from "./components/apiCall.js";
import { showMessage } from "./components/showMessage.js";

function mostrarSecao(id) {
    document.querySelectorAll('.main5').forEach(secao => {
        secao.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

// setInterval(() => {
//     showMessage("s", "Cuida");
// }, 4000);