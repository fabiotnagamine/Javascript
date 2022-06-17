function saudacao(){
    console.log("Hello world");
}
saudacao();

function soma(num1, num2 ){
    const somatorio = (num1 + num2);
    return somatorio;
}
console.log(soma(1,10));
let numero1 = Number(15);
let numero2 = Number(56);
console.log(soma(numero1, numero2));


const raiz = function(n){
 return n ** 0.5;
}; //obrigatório o uso de ponto e virgula

const raizQuadrada = n => n ** 0.5;
//Variável como função

console.log(raiz(16));
console.log(raizQuadrada(25));

