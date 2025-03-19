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

    const [hour, minute] = duracao.value.split(":").map(Number);

    const data = {
        "sinopse": sipnose.value,
        "genero": genero.value,
        "duracao": {
          "hour": hour,
          "minute": minute,
          "second": 0,
          "nano": 0
        },
        "nome": nome.value
      }

    try{
        attempt = await apiCall(`/filme/atualizar/${id.value}`, "PUT", data);
        
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

    const id = document.getElementById("/filmes/criar/id");
    const sipnose = document.getElementById("/filmes/criar/sipnose");
    const genero = document.getElementById("/filmes/criar/genero");
    const duracao = document.getElementById("/filmes/criar/duracao");
    const nome = document.getElementById("/filmes/criar/nome");

    const [hour, minute] = duracao.value.split(":").map(Number);

    const data = {
        "sinopse": sipnose.value,
        "genero": genero.value,
        "duracao": {
          "hour": hour,
          "minute": minute,
          "second": 0,
          "nano": 0
        },
        "nome": nome.value
      }

    try{
        attempt = await apiCall(`/filme/criar`, "POST", data);
        
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
