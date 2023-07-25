// Multiples of 3 or 5
// Find sum of all positive integers below 1000
// where the number is divisible by 3 or 5.


var sum = 0

for(let i = 0; i < 1000; i++){
  if(
    i % 3 == 0 ||
    i % 5 == 0
  ) {
    sum += i
  }
}

console.log(sum)