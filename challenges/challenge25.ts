/**
 * Challenge 25
 * Execute the magical language
 */

function execute(code: string): number {
    let result = 0
    let parsedCode = code.split('')

    for (let index = 0; index < parsedCode.length; index++) {
        let instruction = parsedCode[index]

        switch (instruction) {
            case '+':
                result += 1
                break

            case '-':
                result -= 1
                break

            case '>':
                break

            case '[':
                if (result == 0) {
                    let newIndex = parsedCode.indexOf(']', index)
                    index = newIndex
                }
                break

            case ']':
                if (result != 0) {
                    let newIndex = parsedCode.slice(0, index).lastIndexOf('[')
                    index = newIndex
                }
                break

            case '{':
                if (result == 0) {
                    let newIndex = parsedCode.indexOf('}', index)
                    index = newIndex
                }
                break
        }
    }

    return result
}

console.log(execute('+++')) // 3
console.log(execute('+--')) // -1
console.log(execute('>+++[-]')) // 0
console.log(execute('>>>+{++}')) // 3
console.log(execute('{+}{+}{+}')) // 0
console.log(execute('+{[-]+}+')) // 2
console.log(execute('------[+]++')) // 2
console.log(execute('-[++{-}]+{++++}')) // 5