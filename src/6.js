// Sum Square Difference
// Find the difference between the sum of the squares of
// the first one hundred natural numbers and the square of the sum.

function sumOfSquares(limit){
  let sum = 0
  
  for(let x = 1; x <= limit; x++){
    sum += x ** 2
  }

  return sum
}

function squareOfSum(limit){
  let sum = 0;

  for(let x = 1; x <= limit; x++){
    sum += x
  }

  return sum ** 2
}

let difference = squareOfSum(100) - sumOfSquares(100)

console.log(difference)