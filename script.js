let numeroDeCartas;
function inicializa(){
    numeroDeCartas = prompt("Com quantas cartas você quer jogar? (Número par de 4 à 14)");
    numeroDeCartas = Number(numeroDeCartas);
    while(numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas%2 !== 0) {
        numeroDeCartas = prompt("Com quantas cartas você quer jogar? (Número par de 4 à 14)");
        numeroDeCartas = Number(numeroDeCartas);
    }
}
inicializa();
