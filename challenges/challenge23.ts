/**
 * Challenge 23
 * Find the missing numbers
 */

function findMissingNumbers(nums: number[]): number[] {
    let arraySorted = nums.sort((a, b) => a - b)
    let counter = arraySorted[arraySorted.length - 1]

    let result = []

    for (let index = 1; index < counter; index++) {
        if (!(arraySorted.includes(index))) {
            result.push(index)
        }
    }

    return result
}

console.log(findMissingNumbers([1, 2, 4, 6]))
// [3, 5]

console.log(findMissingNumbers([3, 2, 1, 1]))
// []

console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]))
// [4]

console.log(findMissingNumbers([4, 8, 7, 2]))
// [1, 3, 5, 6]