// Largest Palindrome Product
// Find largest palindrome made from product of 2 3-digit numbers

/**
 * Check if number is palindrome. (Reading same both ways)
 * @param {number} number 
 */
function isPalindrome(number) {
  let string = number.toString()

  const substringLength = Math.floor( string.length / 2 )
  const substringLeftPad = Math.ceil( string.length / 2)

  let leftSideSubstring  = string.slice(0, substringLength)
  let rightSideSubstring = string.slice(substringLeftPad)

  return leftSideSubstring === reverseString(rightSideSubstring)
}

/**
 * Reverses a string.
 * @param {string} string 
 * @returns {string} A reversed string.
 */
function reverseString(string) {
  let resultString = ""
 
  for(
    let stringIndex = string.length - 1;
    stringIndex >= 0;
    stringIndex--
  ) {
    resultString += string[stringIndex]
  }

  return resultString
}

var largestPalindrome = 0

for(let firstProduct = 100; firstProduct <= 999; firstProduct++){
  for(let secondProduct = 100; secondProduct <= 999; secondProduct++){
    let number = firstProduct * secondProduct

    if( ! isPalindrome(number) ) continue;

    if(number > largestPalindrome) largestPalindrome = number
  }
}

console.log( largestPalindrome )