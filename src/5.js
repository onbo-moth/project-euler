// Smallest Multiple
// Find smallest number
// where it is divisible from 2 to 20.

// Main idea is to calculate max amount of each occuring factor, and multiply them all.

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

/**
 * Counts each number in an array.
 * @param {number[]} numberArray 
 * @returns {Array<[number, number]>} Array in form of `[[number, count]...]`
 */
function countNumbers(numberArray){
  let array = []

  for(
    let numberArrayIndex = 0;
    numberArrayIndex < numberArray.length;
    numberArrayIndex++
  ){
    let number = numberArray[numberArrayIndex]

    let foundNumber = false;
    for(
      let arrayIndex = 0;
      arrayIndex < array.length;
      arrayIndex++
    ){
      if( array[arrayIndex][0] != number ) continue;

      array[arrayIndex][1]++
      foundNumber = true
    }

    if( foundNumber ) continue;

    array.push([number, 1])
  }

  return array
}

/**
 * Compare two number count arrays, combine them to get largest number counts.
 * 
 * @param {Array<[number, number]>} firstArray 
 * @param {Array<[number, number]>} secondArray
 * 
 * @returns {Array<number, number>}
 */
function pickLargerCounts(firstArray, secondArray){
  let array = []

  for(const count of firstArray){
    array.push([count[0], count[1]])
  }

  for(const count of secondArray){
    let foundCount = false
    for(let index = 0; index < array.length; index++){
      if(array[index][0] != count[0]) continue;

      if(array[index][1] < count[1]) array[index][1] = count[1]
      foundCount = true
    }

    if( foundCount ) continue

    array.push([count[0], count[1]])
  }

  return array
}

let array = null

for(let number = 2; number <= 20; number++){
  let factors = countNumbers(findFactors(number))


  if( ! array ) {
    array = factors
    continue
  }

  array = pickLargerCounts(array, factors)
}

let result = 1

for(const count of array){
  result *= count[0] ** count[1]
}

console.log(array)
console.log(result)