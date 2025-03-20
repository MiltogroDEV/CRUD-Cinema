import { apiCall } from "./components/apiCall.js";
import { showMessage } from "./components/showMessage.js";

async function clienteUpdate(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/clientes/update/id");
    const novoEmail = document.getElementById("/clientes/update/email");
    const novoNome = document.getElementById("/clientes/update/nome");

    const data = {
        "email": `${novoEmail.value}`,
        "nome": `${novoNome.value}`,
    }

    try{
        attempt = await apiCall(`/clientes/update/${id.value}`, "PUT", data);

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

async function clienteSave(e){
    let attempt;
    e.preventDefault();
    
    const email = document.getElementById("/clientes/save/email");
    const nome = document.getElementById("/clientes/save/nome");
    
    const data = {
        "email": `${email.value}`,
        "nome": `${nome.value}`,
    }
    
    try{
        attempt = await apiCall("/clientes/save", "POST", data);
        
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

async function clienteTodosClientes(e){
    let attempt;
    e.preventDefault();
    
    try{
        attempt = await apiCall("/clientes/todosClientes", "GET");
        
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

async function clienteBuscarPorId(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/clientes/buscarPorId/id");
    
    try{
        attempt = await apiCall(`/clientes/buscarPorId/${id.value}`, "GET");
        
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

async function clienteDeletarPorId(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/clientes/delete/id");
    
    try{
        attempt = await apiCall(`/clientes/delete/${id.value}`, "DELETE");
        
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

const clienteUpdateBtn = document.getElementById("clienteUpdateBtn");
clienteUpdateBtn.addEventListener("click", clienteUpdate);

const clienteSaveBtn = document.getElementById("clienteSaveBtn");
clienteSaveBtn.addEventListener("click", clienteSave);

const clienteTodosClientesBtn = document.getElementById("clienteTodosClientesBtn");
clienteTodosClientesBtn.addEventListener("click", clienteTodosClientes);

const clienteBuscarPorIdBtn = document.getElementById("clienteBuscarPorIdBtn");
clienteBuscarPorIdBtn.addEventListener("click", clienteBuscarPorId);

const clienteDeletarPorIdBtn = document.getElementById("clienteDeletarPorIdBtn");
clienteDeletarPorIdBtn.addEventListener("click", clienteDeletarPorId);
