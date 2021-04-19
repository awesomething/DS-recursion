// Write a recursive function that counts how may sheep jump over the fence.
// Your program should take a number as input. That number should be the number 
// of sheep you have. The function should display the number along with the
// message 'Another sheep jumps over the fence', until no more sheep are left.
// --> INPUT: 3
// --> OUTPUT: 3: Another sheep jumps over the fence
//             2: Another sheep jumps over the fence
//             1: Another sheep jumps over the fence
//             All sheep have jumped over the fence

function sheepJump(number) {
    if(number === 0) {
        console.log(`All sheep have jumped over the fence.`)
        return
    }
    console.log(number + `: Another sheep has jumped over the fence.`)
    sheepJump(number -1);
}

let sheep = 3;
console.log(sheepJump(sheep));