// Calculate the nth triangle number. A triangular number counts the object that can 
// form an equilateral triangle. The nth triangular number is the number of dots composing
// a triangle with n dots on a side, and is equal to the sum of the n natural numbers
// from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

const triangular = (num) => {
    if(num === 0){
        return 0
    }
    return num + triangular(num - 1)
}

console.log(triangular(4))