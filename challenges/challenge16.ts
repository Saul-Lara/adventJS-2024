/**
 * Challenge 16
 * Cleaning the snow path
 */

function removeSnow(s: string): string {
    // Recursive way (1 star)
    /*
    if(s.length == 0) return s
    
    for(let index = 0; index <= s.length - 1; index++){
        if(s[index] === s[index + 1]){
            let newString = s.slice(0, index) + s.slice(index + 2 , s.length)
            return removeSnow(newString)
        }
    }
    */

    // Using While (5 stars)
    let index = 0
    while (index < s.length) {
        if (s[index] === s[index + 1]) {
            s = s.slice(0, index) + s.slice(index + 2, s.length)
            index = 0
        } else {
            index++
        }
    }


    // Using for and stack (4 stars)
    /*
    let stack = []
    
    for(let index = 0; index <= s.length - 1; index++){
        if(stack.length > 0 && stack[stack.length - 1] === s[index]){
            stack.pop()
        }else{
            stack.push(s[index])
        }
    }
    
    s = stack.join('')
    */


    return s
}

console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"