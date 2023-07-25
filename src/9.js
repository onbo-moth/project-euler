// Special Pythagorean Triplet
// A triplet is a set of three natural numbers, a < b < c, for which:
// a^2 + b^2 = c^2
// There is a special triplet where a + b + c = 1000
// Find the product abc.

/**
 * Checks if both numbers are *roughly* the same (prevent floating point errors)
 * 
 * @param {number} a 
 * @param {number} b
 * 
 * @returns {boolean}
 */
function floatingEquals(a, b){
  const epsilon = 0.001

  let lower = b - epsilon
  let upper = b + epsilon

  return (lower < a) && (a < upper)
}

/**
 * Computes for c in pythagorean theorem.
 * @param {number} a 
 * @param {number} b 
 */
function pythag(a, b){
  return Math.sqrt( (a ** 2) + (b ** 2) )
}

/**
 * Check if pythagorean triplet is valid.
 * 
 * @param {number} a 
 * @param {number} b 
 * 
 * @returns {boolean}
 */
function isPythag(a, b){
  let result = pythag(a, b)
  return floatingEquals(result, Math.round(result))
}

for(let a = 1; a < 1000; a++){
  for(let b = a; b < 1000; b++){
    if( ! isPythag(a, b) ) continue

    let c = pythag(a, b)

    if( ! floatingEquals(a + b + c, 1000) ) continue

    console.log(a * b * c)
  }
}