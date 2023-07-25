// Summation of Primes
// Find sum of all primes below two million


function isPrime(number){
  let factorMinimum = Math.ceil( Math.sqrt(number) ) + 1

  for(let factor = 2; factor < factorMinimum; factor++){
    if(number % factor != 0 || number == factor) continue

    return false
  }

  return true
}

const limit = 2_000_000

var sum = 0;

for(let number = 2; number < limit; number++){
  if(isPrime(number)) sum += number
}

console.log(sum)