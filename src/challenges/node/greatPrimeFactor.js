/*
Problema 3

Os fatores primos de 13195 são 5, 7, 13 e 29.
Desenvolva uma função que encontra o maior fator primo do número 600851475143?

*/

const validateNumber = (n) => {
  if (n === 2) return true;
  if (n % 2 === 0 || n <= 1) return false;
  return -1;
};

const isPrime = (n) => {
  const validatedNumber = validateNumber(n);
  if (validatedNumber !== -1) return validatedNumber;

  const limit = n ** 1 / 2 || 0;
  let count = 3;

  // Se houver alguma divisão inteira entre 3 e a raiz quadrada de 'n',
  // então esse número não é primo.
  while (count <= limit) {
    if (n % count === 0) return false;
    count += 2;
  }

  return true;
};

const greatPrimeFactor = (number) => {
  let currentDividend = number;
  let currentDivider = 2;
  const primeFactors = [];
  
  while (currentDividend >= currentDivider) {
    // Se a divisão do dividendo atual pelo divisor atual é inteira
    //  e o divisor atual é primo
    // então o divisor atual é um fator primo
    if (currentDividend % currentDivider === 0 && isPrime(currentDivider)) {
      primeFactors.push(currentDivider);
      currentDividend /= currentDivider;
    } else currentDivider += 1;
  }

  const indexOfGreatPrimeFactor = primeFactors.length - 1;
  return primeFactors[indexOfGreatPrimeFactor];
};
  
module.exports = { greatPrimeFactor };
