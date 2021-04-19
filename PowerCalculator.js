// Write a function called powerCalculator() that takes two VREyeParameters, as integer
// and base, and another integer as an exponent. The function returns the value of the base
// raised to the power of the exponent. Use only exponents greater than or equal to 0
// --> powerCalculator(10, 2) should return 100
// --> powerCalculator(10, -2) should return 'exponent should be a positive number'

function powerCalculator(num1, num2) {
    if(num2 < 0) {
        return `exponent should be a positive number`
    } else if (num2 === 0) {
        return 1 
    }
  // num1 = 10       num2(2) - 1 = num2(1) * num1(10) = 10           
    return num1 * powerCalculator(num1, num2 -1)
// therefore 10 *  10 = 100
}

let one = 10
let two = 2
console.log(powerCalculator(one, two))