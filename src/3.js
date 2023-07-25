// Largest Prime Factor
// Find largest prime factor of:
// 600851475143

var number = 600851475143

var largestFactor = 1

while( number != 1 ){
  var foundFactor = false
  for( let factor = 2; factor < number; factor++ ){
    if( number % factor != 0 ) continue

    if( factor > largestFactor ) largestFactor = factor
    number /= factor

    foundFactor = true

    break // Reset factor to 2.
  }

  if( ! foundFactor ) {
    largestFactor = number

    number = 1
  }
}

console.log( largestFactor )