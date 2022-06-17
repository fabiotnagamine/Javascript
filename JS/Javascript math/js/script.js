const numero = Number(prompt("digite um numero"));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML += '';
texto.innerHTML += `<p>A raiz quadrada do numero ${numero} é: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>O numero é inteiro: ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>Is a NAN? ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p>Aproximação para cima ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Aproximação para baixo ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)} </p>`;