// 1001st Prime
// Find the 10001st prime number.

/**
 * Find all factors of a number.
 * @param {number} number 
 * @returns {number[]}
 */
function findFactors(number){
  let factors = []

  while( number != 1 ){
    let foundFactor = false

    for( let factor = 2; factor < number; factor++ ){
      if( number % factor != 0) continue

      foundFactor = true

      factors.push(factor)

      number /= factor

      break;
    }

    if( foundFactor ) continue;

    factors.push(number)

    break
  }

  return factors
}

function isPrime(number){
  let factors = findFactors(number)

  return factors.length == 1
}

var primeIndex = 0;
var number = 1

do {
  number++

  if(isPrime(number)) primeIndex++
} while (primeIndex != 10_001)

console.log(number)