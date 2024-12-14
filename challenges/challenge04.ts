/**
 * Challenge 04
 * Decorating the Christmas tree
 */

function createXmasTree(height: number, ornament: string): string {
    let spaces = height - 1
    let treeOutput = ""

    let wood = ("_".repeat(spaces) + "#" + "_".repeat(spaces) + "\n").repeat(2).trim()

    for (let i = 0; i < height; i++) {
        let ornamentsRepeat = 2 * (i) + 1

        treeOutput += "_".repeat(spaces) + ornament.repeat(ornamentsRepeat) + "_".repeat(spaces) + "\n"

        spaces--
    }

    return treeOutput + wood
}

const tree = createXmasTree(5, '*')
console.log(tree)

/* Expected result:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____

*/