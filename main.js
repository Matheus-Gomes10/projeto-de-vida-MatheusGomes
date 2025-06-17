const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i=0; i<botoes.length; j++) {
    botoes[i].onclick = function(){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo")
            textos[i].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador")
const tempoObjetivo1 = new Date("")
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;