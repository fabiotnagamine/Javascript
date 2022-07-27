const peso = 0;
const imc = 0;
const altura = 0.0;

function CalcularIMC(peso, altura) {
    imc = peso / altura
    return imc;
}

function RetornaIMC(imc) {

    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc > 18.5 && imc < 24.9) {
        return nivel[0];
    } else if (imc > 25 && imc < 29.9) {
        return nivel[1];
    } else if (imc > 30 && imc < 34.9) {
        return nivel[2];
    } else if (imc > 35 && imc < 39.9) {
        return nivel[3];
    } else {
        return nivel[4];
    }
}
function PesoNormal(imc) {
    if (imc < 17.5) {
        return
    }
}