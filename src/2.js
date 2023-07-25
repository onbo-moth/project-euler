// Even fibonacci numbers
// Find sum of even fibonacci numbers
// where the fibonacci number doesnt excees 4 million

const limit = 4_000_000

var sum = 0

var f1 = 1
var f2 = 2

while( f1 < limit ){
  if( f1 % 2 == 0 ) sum += f1 

  let tmp = f1 + f2

  f1 = f2
  f2 = tmp
}

console.log(sum)