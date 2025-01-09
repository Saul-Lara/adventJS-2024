/**
 * Challenge 21
 * Calculate the height of the Christmas tree
 */

function treeHeight(tree: { value: string; left: any; right: any } | null): number {
    if (tree === null) {
        return 0;
    }

    let leftHeight = treeHeight(tree.left)
    let rightHeight = treeHeight(tree.right)

    return Math.max(leftHeight, rightHeight) + 1
}

// Tree definition
const tree = {
    value: '🎁',
    left: {
        value: '🎄',
        left: {
            value: '⭐',
            left: null,
            right: null
        },
        right: {
            value: '🎅',
            left: null,
            right: null
        }
    },
    right: {
        value: '❄️',
        left: null,
        right: {
            value: '🦌',
            left: null,
            right: null
        }
    }
}

// Function call
console.log(treeHeight(tree))
// Returns: 3