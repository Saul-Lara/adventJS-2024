/**
 * Challenge 17
 * Grinch's bombs
 */

function detectBombs(grid: boolean[][]): number[][] {
    let adjacentPositions = [
        [-1, 0], // Up
        [+1, 0], // Down
        [0, -1], // Left
        [0, +1], // Right
        [-1, -1], // Diagonal UL
        [-1, +1], // Diagonal UR
        [+1, -1], // Diagonal DL
        [+1, +1]  // Diagonal DR
    ]

    let rowLength = grid[0].length
    let columnLength = grid.length

    let detectedBombs = []

    for (let x = 0; x < columnLength; x++) {
        detectedBombs[x] = [];

        for (let y = 0; y < rowLength; y++) {
            let adjacentCells = adjacentPositions
                .map(([tmpX, tmpY]) => [x + tmpX, y + tmpY])
                .filter(([tmpX, tmpY]) => (tmpX >= 0 && tmpY >= 0) && (tmpX < columnLength && tmpY < rowLength))

            detectedBombs[x][y] = adjacentCells.reduce(
                (acc, [tmpX, tmpY]) => acc + (grid[tmpX][tmpY] ? 1 : 0),
                0,
            )
        }
    }

    return detectedBombs
}

console.log(detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
]))
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(detectBombs([
    [true, false],
    [false, false]
]))
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(detectBombs([
    [true, true],
    [false, false],
    [true, true]
]))
// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]