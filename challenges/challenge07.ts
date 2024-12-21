/**
 * Challenge 07
 * The Grinch's attack
 */

function fixPackages(packages: string): string {
    let parenthesesStack = []
    let resultString = packages.split('')

    packages.split('').forEach((item, index) => {
        if (item == '(') {
            parenthesesStack.push(index)
        } else if (item == ')') {
            let leftParenthesesIndex = parenthesesStack.pop()
            let rightParenthesesIndex = index
            let reversedSubstring = resultString.slice(leftParenthesesIndex, rightParenthesesIndex + 1).reverse()
            resultString.splice(leftParenthesesIndex, rightParenthesesIndex + 1 - leftParenthesesIndex, ...reversedSubstring);
        }
    })

    return resultString.join('').replaceAll('(', '').replaceAll(')', '')
}

console.log(fixPackages('a(bc(def)g)h'))

// Expected result:
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"