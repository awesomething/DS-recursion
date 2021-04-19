// Write a recursive function that prints out the binary representation of a given number. 
// For example, the program should take 3 as an input and print 11 as output, or 25 as an input 
// and print 11001 as an output. Note that the binary representation of 0 should be 0.
// 12 / 2 = 6 + 0
// 6 / 2 = 3 + 0
// 3 / 2 = 1 + 1
// 1 / 2 = 0 + 1


const findBinary = (number) => {
    const divide = Math.floor(number / 2)
    const leftover = number%2

    if(number === 0) {
        return 0
    }

    if(divide === 0) {
        return `${leftover}`
    }
    return findBinary(divide) + leftover.toString()
}

console.log(findBinary(12))