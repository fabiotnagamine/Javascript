const alunos = ['Luiz', 'Maria', 'Matheus'];
console.log(alunos);
alunos[alunos.length] = 'Eduardo';
console.log(alunos);
alunos[alunos.length] = 'Pedro';
console.log(alunos);
alunos.push('Maria');
console.log(alunos);
alunos.unshift('Pedro');
console.log(alunos);
const alunoRemovido = alunos.pop(alunos);
console.log(alunos);
console.log(alunoRemovido);
const alunoRemovido1 = alunos.shift();
console.log(alunoRemovido1);
delete alunos[0];
console.log(alunos);

for(i = 0; i <= alunos.length; i++){
    if(alunos[i] == undefined){
        alunos[i] = alunos[i + 1];
    }else{
        alunos[i] = alunos[i + 1];
    }
    
}

console.log(alunos);