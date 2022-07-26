const hora = 23;

function comprimento(hora){
     if (hora > 12 && hora < 18){
        return "Boa tarde!!";
    }else if(hora > 18 && hora < 24){
        return "Boa noite!!"
    }else{
        return "Bom dia!!";
    }
}

console.log(comprimento(hora));
   