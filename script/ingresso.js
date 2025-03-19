import { apiCall } from "./components/apiCall.js";
import { showMessage } from "./components/showMessage.js";

async function salaUpdate(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/sala/Update/id");

    const data = {
        "id": `${id.value}`,
    }

    try{
        // attempt = await apiCall(`/sala/Update/${id.value}`, "DELETE");
        attempt = await apiCall(`/sala/Update/${id.value}`, "DELETE", data);
        
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

const salaUpdateBtn = document.getElementById("salaUpdateBtn");
salaUpdateBtn.addEventListener("click", salaUpdate);
