import { apiCall } from "./components/apiCall.js";
import { showMessage } from "./components/showMessage.js";

async function ingressoUpdate(e){
    let attempt1;
    let attempt2;
    e.preventDefault();

    const id = document.getElementById("/ingresso/update/id");
    const cadeira = document.getElementById("/ingresso/update/cadeira");
    const valor = document.getElementById("/ingresso/update/valor");
    const idSessao = document.getElementById("/ingresso/update/idSessao");
    const idCliente = document.getElementById("/ingresso/update/idCliente");

    const data = {
        "cadeira": `${cadeira.value}`,
        "valor": `${valor.value}`,
        "idSessao": `${idSessao.value}`,
        "idCliente": `${idCliente.value}`
    }

    try{
        // attempt = await apiCall(`/ingresso/update/${id.value}`, "PUT", data);

        attempt1 = await apiCall(`/ingresso/save`, "POST", data);
        attempt2 = await apiCall(`/ingresso/deleteById/${id.value}`, "DELETE");

        if(attempt1.success && attempt2.success){
            showMessage("s", `Dados no Console`);
            console.log("Ingresso atualizado com sucesso! (Mudou de ID)");
        }
    } catch (e){
        console.log(e);
    }
}

async function ingressoSave(e){
    let attempt;
    e.preventDefault();

    const cadeira = document.getElementById("/ingresso/save/cadeira");
    const valor = document.getElementById("/ingresso/save/valor");
    const idSessao = document.getElementById("/ingresso/save/idSessao");
    const idCliente = document.getElementById("/ingresso/save/idCliente");

    const data = {
        "cadeira": `${cadeira.value}`,
        "valor": `${valor.value}`,
        "idSessao": `${idSessao.value}`,
        "idCliente": `${idCliente.value}`
    }

    try{
        attempt = await apiCall(`/ingresso/save`, "POST", data);
        
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

async function ingressoFindById(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/ingresso/findById/id");

    try{
        attempt = await apiCall(`/ingresso/findById/${id.value}`, "GET");
        
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

async function ingressoFindAll(e){
    let attempt;
    e.preventDefault();

    try{
        attempt = await apiCall(`/ingresso/findAll`, "GET");
        
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

async function ingressoDeleteById(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/ingresso/deleteById/id");

    try{
        attempt = await apiCall(`/ingresso/deleteById/${id.value}`, "DELETE");
        
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

const ingressoSaveBtn = document.getElementById("ingressoSaveBtn");
ingressoSaveBtn.addEventListener("click", ingressoSave);

const ingressoFindByIdBtn = document.getElementById("ingressoFindByIdBtn");
ingressoFindByIdBtn.addEventListener("click", ingressoFindById);

const ingressoFindAllBtn = document.getElementById("ingressoFindAllBtn");
ingressoFindAllBtn.addEventListener("click", ingressoFindAll);

const ingressoDeleteByIdBtn = document.getElementById("ingressoDeleteByIdBtn");
ingressoDeleteByIdBtn.addEventListener("click", ingressoDeleteById);
