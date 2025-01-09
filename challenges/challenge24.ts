/**
 * Challenge 24
 * Check if trees are magical mirrors
 */

function isTreesSynchronized(
    tree1: { value: string; left?: any; right?: any } | undefined,
    tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {

    function isMirror(nodeTree1, nodeTree2): boolean {
        if (!nodeTree1 && !nodeTree2) {
            return true
        }

        //console.log("Node left of tree 1: ",nodeTree1)
        //console.log("Node right of tree 2: ",nodeTree2)

        if (!nodeTree1 || !nodeTree2) {
            return false
        }

        if (nodeTree1.value != nodeTree2.value) {
            return false
        }

        return isMirror(nodeTree1.left, nodeTree2.right) && isMirror(nodeTree1.right, nodeTree2.left)
    }

    let result = isMirror(tree1, tree2)
    let rootValueTree1 = tree1.value

    return [result, rootValueTree1]
}

const tree1 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
}

const tree2 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '⭐' }
}

const tree3 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '🎁' }
}

console.log(isTreesSynchronized(tree1, tree2)) // [true, '🎄']
console.log(isTreesSynchronized(tree1, tree3)) // [false, '🎄']

/** 
 Source used to understand Symmetric Tree:
 https://www.youtube.com/watch?v=JodJZjJtECE

    Structure for the first example (tree1, tree2):
  
       tree1            tree2
        🎄               🎄
      /   \            /   \
    ⭐   🎅         🎅    ⭐
    
**/