import { apiCall } from "./components/apiCall.js";
import { showMessage } from "./components/showMessage.js";

async function salaUpdate(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/sala/update/id");
    const novoId = document.getElementById("/sala/update/novoid");

    const data = {
        "numero": `${novoId.value}`,
    }
    
    try{
        attempt = await apiCall(`/sala/update/${id.value}`, "PUT", data);
        
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

async function salaSave(e){
    let attempt;
    e.preventDefault();

    const numero = document.getElementById("/sala/save/numero");
    
    const data = {
        "numero": `${numero.value}`,
    }

    try{
        attempt = await apiCall(`/sala/save`, "POST", data);
        
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

async function salaFindById(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/sala/findById/id");

    try{
        attempt = await apiCall(`/sala/findById/${id.value}`, "GET");
        
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

async function salaFindAll(e){
    let attempt;
    e.preventDefault();

    try{
        attempt = await apiCall(`/sala/findAll`, "GET");
        
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

async function salaDeleteById(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/sala/deleteById/id");

    const data = {
        "id": `${id.value}`,
    }

    try{
        // attempt = await apiCall(`/sala/deleteById/${id.value}`, "DELETE");
        attempt = await apiCall(`/sala/deleteById/${id.value}`, "DELETE", data);
        
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

const salaSaveBtn = document.getElementById("salaSaveBtn");
salaSaveBtn.addEventListener("click", salaSave);

const salaFindByIdBtn = document.getElementById("salaFindByIdBtn");
salaFindByIdBtn.addEventListener("click", salaFindById);

const salaFindAllBtn = document.getElementById("salaFindAllBtn");
salaFindAllBtn.addEventListener("click", salaFindAll);

const salaDeleteByIdBtn = document.getElementById("salaDeleteByIdBtn");
salaDeleteByIdBtn.addEventListener("click", salaDeleteById);
