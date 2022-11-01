const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  
  if (!peso) {
    setResultado('Peso Inválido', false);
    return;
  }
  if (!altura) {
    setResultado('Altura Inválido', false);
    return;
  }
  console.log('');
  
  });


function criaP(peso, altura ) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
  
}

  function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
        
  }