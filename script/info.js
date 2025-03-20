import { apiCall } from "./components/apiCall.js";
import { showMessage } from "./components/showMessage.js";

async function infoFilmeMaisVendido(e){
    let attempt;
    e.preventDefault();

    const inicio = document.getElementById("/info/filmeMaisVendido/inicio");
    const fim = document.getElementById("/info/filmeMaisVendido/fim");

    const data = {
        "inicio": `${inicio.value}`,
        "fim": `${fim.value}`
    }

    console.log(data)

    try{
        attempt = await apiCall(`/info/filme/maisVendido`, "POST", data);
        
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

async function infoSessoesIngressosDisponiveis(e){
    let attempt;
    e.preventDefault();

    try{
        attempt = await apiCall(`/info/sessao/sessoesIngressosDisponiveis`, "GET");
        
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

async function infoIngressosPorSessao(e){
    let attempt;
    e.preventDefault();

    const id = document.getElementById("/info/ingressosPorSessao/id");

    try{
        attempt = await apiCall(`/info/ingressoPorSessao/${id.value}`, "GET");
        
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

async function infoFilmeReceita(e){
    let attempt;
    e.preventDefault();

    try{
        attempt = await apiCall(`/info/filme/receita/`, "GET");
        
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

const infoFilmeMaisVendidoBtn = document.getElementById("infoFilmeMaisVendidoBtn");
infoFilmeMaisVendidoBtn.addEventListener("click", infoFilmeMaisVendido);

const infoSessoesIngressosDisponiveisBtn = document.getElementById("infoSessoesIngressosDisponiveisBtn");
infoSessoesIngressosDisponiveisBtn.addEventListener("click", infoSessoesIngressosDisponiveis);

const infoIngressosPorSessaoBtn = document.getElementById("infoIngressosPorSessaoBtn");
infoIngressosPorSessaoBtn.addEventListener("click", infoIngressosPorSessao);

const infoFilmeReceitaBtn = document.getElementById("infoFilmeReceitaBtn");
infoFilmeReceitaBtn.addEventListener("click", infoFilmeReceita);
