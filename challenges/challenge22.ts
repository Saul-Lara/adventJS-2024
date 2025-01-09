/**
 * Challenge 22
 * Generate gift combinations
 */

function generateGiftSets(gifts: string[]): string[][] {
    let itemsNumber = gifts.length
    let result: string[][] = []
    let solution: string[] = []

    function backtrack(index: number) {
        if (index === itemsNumber) {
            // Avoid empty subsets
            if (solution.length > 0) {
                //console.log(solution)
                result.push([...solution])
            }
            return
        }

        // Pick the gifts[index] (Go left)
        solution.push(gifts[index])
        backtrack(index + 1)
        solution.pop()

        // Don't pick gifts[index] (Go right)
        backtrack(index + 1)
    }

    backtrack(0)
    return result.sort((a, b) => a.length - b.length)
}

console.log(generateGiftSets(['game', 'pc']))
// Returns:
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]

/** 
 Source used to understand backtracking:
 https://www.youtube.com/watch?v=L0NxT2i-LOY

    Tree structure for the example ['game', 'pc']:
  
    Level 0              []
                    /         \
    Level 1      game          []
                /    \       /    \
    Level 2 game,pc  game  pc     []

**/