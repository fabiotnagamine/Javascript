const pessoa1 = {
    nome: 'Fulano',
    sobrenome: 'Tal',
    idade: 25,

     adicionaIdade(){
        this.idade++;
    },
    mudaNome(){
        this.nome = prompt("Mudança de nome");
        console.log(nome);
    }
};

/*function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}*/

function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa2 = criaPessoa('Josnei', 'Silva', 99);


console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.idade);

console.log(pessoa2);
pessoa1.mudaNome();