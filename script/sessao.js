import { apiCall } from "./components/apiCall.js";
import { showMessage } from "./components/showMessage.js";

async function sessaoSave(e){
    let attempt;
    e.preventDefault();

    const numeroSala = document.getElementById("/sessao/save/numeroSala");
    const idFilme = document.getElementById("/sessao/save/idFilme");
    const cadeiras = document.getElementById("/sessao/save/cadeiras");
    const horario = document.getElementById("/sessao/save/horario");
    const idSala = document.getElementById("/sessao/save/idSala");

    const data = {
        "numeroDaSala": `${numeroSala.value}`,
        "idFilme": `${idFilme.value}`,
        "cadeirasDisponiveis": `${cadeiras.value}`,
        "horario": `${horario.value}:00`,
        "status": true,
        "idSala": `${idSala.value}`
    }
    
    try{
        attempt = await apiCall(`/sessao/save`, "POST", data);
        
        if(attempt.success){
            showMessage("s", `Dados no Console`);
            console.log(attempt.success);
            
        } else if (attempt.error) {
            showMessage("e", `Dados no Console`);
            console.log(attempt.error);
            
        } else {
            showMessage("w", `Dados no Console`);
            console.log(attempt);
        }
    } catch (e){
        console.log(e);
    }
}

async function sessaoGet(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/sessao/get/id");

    try{
        attempt = await apiCall(`/sessao/${id.value}`, "GET");
        
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

async function sessaoDelete(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/sessao/delete/id");

    try{
        attempt = await apiCall(`/sessao/${id.value}`, "DELETE");
        
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

async function sessaoTodasSessao(e){
    let attempt;
    e.preventDefault();

    try{
        attempt = await apiCall(`/sessao/todasSessao`, "GET");
        
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

async function sessaoSessoesCanceladas(e){
    let attempt;
    e.preventDefault();

    try{
        attempt = await apiCall(`/sessao/SessoesCaceladas`, "GET");
        
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

const sessaoSaveBtn = document.getElementById("sessaoSaveBtn");
sessaoSaveBtn.addEventListener("click", sessaoSave);

const sessaoGetBtn = document.getElementById("sessaoGetBtn");
sessaoGetBtn.addEventListener("click", sessaoGet);

const sessaoDeleteBtn = document.getElementById("sessaoDeleteBtn");
sessaoDeleteBtn.addEventListener("click", sessaoDelete);

const sessaoTodasSessaoBtn = document.getElementById("sessaoTodasSessaoBtn");
sessaoTodasSessaoBtn.addEventListener("click", sessaoTodasSessao);

const sessaoSessoesCanceladasBtn = document.getElementById("sessaoSessoesCanceladasBtn");
sessaoSessoesCanceladasBtn.addEventListener("click", sessaoSessoesCanceladas);
