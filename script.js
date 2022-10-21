let numeroDeCartas;
let arrayImagens = ['imagens/bobrossparrot.gif', 'imagens/explodyparrot.gif', 'imagens/fiestaparrot.gif', 'imagens/metalparrot.gif', 'imagens/revertitparrot.gif', 'imagens/tripletsparrot.gif', 'imagens/unicornparrot.gif'];
function comparador() { 
	return Math.random() - 0.5; 
}
function inicializa(){
    numeroDeCartas = prompt("Com quantas cartas você quer jogar? (Número par de 4 à 14)");
    numeroDeCartas = Number(numeroDeCartas);
    while(numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas%2 !== 0) {
        numeroDeCartas = prompt("Com quantas cartas você quer jogar? (Número par de 4 à 14)");
        numeroDeCartas = Number(numeroDeCartas);
    }
    distribuicaoDasCartas();
}
inicializa();

function distribuicaoDasCartas(){
    const container = document.querySelector(".container");
    arrayImagens.sort(comparador);
    let numeroCartasEmJogo = numeroDeCartas/2;
    let cartasEmJogo= [];
    for(let i = 0; i < numeroCartasEmJogo; i++){
        cartasEmJogo.push(arrayImagens[i]);
        cartasEmJogo.push(arrayImagens[i]);
    }
    cartasEmJogo.sort(comparador);
    for(let i = 0; i < numeroDeCartas; i++){
        if(numeroDeCartas === 8 && i === 4 || numeroDeCartas === 10 && i === 5 || numeroDeCartas === 12 && i === 6 || numeroDeCartas === 14 && i === 7 ){
            container.innerHTML += `
                <div class="break"></div>`;
        }
        container.innerHTML += `
            <div onclick="virar(this)" class="carta">
                <img src="./imagens/back.png" alt="">
                <img class="escondido" src="./${cartasEmJogo[i]}" alt="">
            </div>`;
    }
}
function virar(elemento){
    elemento.classList.add("virada");
    let frente = elemento.children[0];
    let verso = elemento.children[1];
    frente.classList.add("escondido");
    verso.classList.remove("escondido");
  }