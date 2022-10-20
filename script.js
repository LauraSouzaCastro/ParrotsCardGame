let numeroDeCartas;
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
    for(let i = 0; i < numeroDeCartas; i++){
        if(numeroDeCartas === 8 && i === 4 || numeroDeCartas === 10 && i === 5 || numeroDeCartas === 12 && i === 6 || numeroDeCartas === 14 && i === 7 ){
            container.innerHTML += `
                <div class="break"></div>`;
        }
        container.innerHTML += `
            <div class="carta">
                <img src="./imagens/back.png" alt="">
            </div>`;
    }
}
