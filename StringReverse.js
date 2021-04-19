// Write a function that reverses a string. Take a string as input,
// reverse the string, and return the new string

function stringReverse(string){
    if (string === ''){
        return ''
    }
    return stringReverse(string.substr(1)) + string.charAt(0)
}

// string.substr(1) returns the character in a string beginning at the specified number
// in this case 1 being the second letter of the string, so the result is 'uperstar'
// this keeps going until there are no more 'substr' to go through, and the base is 
// returned as an empty string


console.log(stringReverse('superstar'))