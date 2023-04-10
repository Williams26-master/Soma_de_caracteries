// Obtém os elementos da página
const n1Input = document.getElementById('n1');
const n2Input = document.getElementById('n2');
const btn = document.getElementById('btn');
const resultadoDiv = document.getElementById('resultado');

// Define a função que calcula a soma dos valores pares entre dois números
function calcularSomaPares(n1, n2) {
  // Verifica se n1 é menor que n2 e, se não, inverte os valores
  if (n1 > n2) {
    [n1, n2] = [n2, n1];
  }

  let soma = 0;

  // Percorre os números entre n1 e n2, inclusive
  for (let i = n1; i <= n2; i++) {
    // Verifica se o número é par
    if (i % 2 === 0) {
      soma += i;
    }
  }

  return soma;
}

// Define a função que é executada quando o botão é clicado
function handleClick() {
  // Obtém os valores dos inputs
  const n1 = parseInt(n1Input.value);
  const n2 = parseInt(n2Input.value);

  // Verifica se os valores são válidos
  if (isNaN(n1) || isNaN(n2)) {
    resultadoDiv.textContent = 'Digite valores numéricos válidos';
    return;
  }

  // Calcula a soma dos valores pares
  const somaPares = calcularSomaPares(n1, n2);

  // Exibe o resultado na página
  resultadoDiv.textContent = `A soma dos valores pares entre ${n1} e ${n2} é ${somaPares}`;
}

// Adiciona um ouvinte de evento para o clique no botão
btn.addEventListener('click', handleClick);
