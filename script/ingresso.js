import { apiCall } from "./components/apiCall.js";
import { showMessage } from "./components/showMessage.js";

async function ingressoUpdate(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/ingresso/update/id");

    const data = {
        // "id": `${id.value}`,
    }

    try{
        attempt = await apiCall(`/ingresso/update/${id.value}`, "PUT", data);
        
        if(attempt.success){
            showMessage("s", `Dados no Console`);
            console.log(attempt.success);
            
        } else if (attempt.error) {
            showMessage("e", `Dados no Console`);
            console.log(attempt.error);
            
        }
    } catch (e){
        console.log(e);
    }
}

const ingressoUpdateBtn = document.getElementById("ingressoUpdateBtn");
ingressoUpdateBtn.addEventListener("click", ingressoUpdate);
