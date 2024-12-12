/**
 * Challenge 02
 * Framing names
 */

function createFrame(names: string[]): string {
    const symbol = '*'
    const space = ' '

    let nameLength = names.map((name) => name.length)
    let maxValue = Math.max(...nameLength)

    let topBottomLine = symbol.repeat(maxValue + 4)

    let content = names.map((name) => "* " + name + space.repeat(maxValue - name.length) + " *").join("\n")

    return topBottomLine + "\n" + content + "\n" + topBottomLine
}

createFrame(['midu', 'madeval', 'educalvolpz'])

/* Expected result:

***************
* midu        *
* madeval     *
* educalvolpz *
***************

*/