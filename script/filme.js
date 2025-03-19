import { apiCall } from "./components/apiCall.js";
import { showMessage } from "./components/showMessage.js";

async function filmeAtualizar(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/filmes/atualizar/id");
    const sipnose = document.getElementById("/filmes/atualizar/sipnose");
    const genero = document.getElementById("/filmes/atualizar/genero");
    const duracao = document.getElementById("/filmes/atualizar/duracao");
    const nome = document.getElementById("/filmes/atualizar/nome");

    const data = {
        "sinopse": `${sipnose.value}`,
        "genero": `${genero.value}`,
        "duracao": `${duracao.value}:00`,
        "nome": `${nome.value}`
    }

    try{
        attempt = await apiCall(`/filmes/atualizar/${id.value}`, "PUT", data);
        
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

async function filmeCriar(e){
    let attempt;
    e.preventDefault();

    const sipnose = document.getElementById("/filmes/criar/sinopse");
    const genero = document.getElementById("/filmes/criar/genero");
    const duracao = document.getElementById("/filmes/criar/duracao");
    const nome = document.getElementById("/filmes/criar/nome");

    const data = {
        "sinopse": `${sipnose.value}`,
        "genero": `${genero.value}`,
        "duracao": `${duracao.value}:00`,
        "nome": `${nome.value}`
    }
    
    try{
        attempt = await apiCall(`/filmes/criar`, "POST", data);
        
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

async function filmeAchar(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/filmes/achar/id");
    
    try{
        attempt = await apiCall(`/filmes/achar/${id.value}`, "POST");
        
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

async function filmeListar(e){
    let attempt;
    e.preventDefault();

    try{
        attempt = await apiCall(`/filmes/listar`, "GET");
        
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

async function filmeDeletar(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/filmes/deletar/id");
    
    try{
        attempt = await apiCall(`/filmes/deletar/${id.value}`, "DELETE");
        
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

const filmeAtualizarBtn = document.getElementById("filmeAtualizarBtn");
filmeAtualizarBtn.addEventListener("click", filmeAtualizar);

const filmeCriarBtn = document.getElementById("filmeCriarBtn");
filmeCriarBtn.addEventListener("click", filmeCriar);

const filmeAcharBtn = document.getElementById("filmeAcharBtn");
filmeAcharBtn.addEventListener("click", filmeAchar);

const filmeListarBtn = document.getElementById("filmeListarBtn");
filmeListarBtn.addEventListener("click", filmeListar);

const filmeDeletarBtn = document.getElementById("filmeDeletarBtn");
filmeDeletarBtn.addEventListener("click", filmeDeletar);
