/*
Tipos de dados primitivos (imutáveis) -- string, number, boolean, undefined,
null, (bihigt, symbol) - Valor
*/

let nome = 'Fábio';
nome =  'Takashi';
nome[0] = 'N'; // como a string é imutável não podemos modificar a letra
console.log(nome);


let aa = 'A';
let bb = a; // Cópia
console.log(aa, bb);
aa = 'outra coisa';
console.log(aa, bb);




/* Tipos de dados por referência (mutável) - Array, object, function; --> Passados por referência
*/

let a = [1,2,3];
let b = a;
console.log(a,b);  // Nesse caso podemos alterar o valor da variável inicial irá mudar na segunda

a.push(4, 5, 6);
console.log(a, b);

b.pop();


console.log(a, b); //também modifica tanto em a quanto em b 