/* 
Operadores de comparação
> maior que
>= maior ou igual que
< menor que
<= menor ou igual que
== igualdade (verifica valor)
=== igualdade estrita (verifica valor e tipo)
!= diferente (verifica valor)
!== diferente estrito (verifica valor e tipo)
*/

const comp = 10 < 100;
console.log(comp);
const numero1 = '1';
const numero2 = 1;
console.log("Comparando valores:", numero1 == numero2); 
console.log(`Comparando o tipo do valor: ${numero1 === numero2}`);
