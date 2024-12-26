/**
 * Challenge 09
 * The magic train
 */

type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: Board, mov: Movement): Result {
    let enginePosition = { x: -1, y: -1 } // [x, y]

    for (let rowIndex = 0; rowIndex <= board.length; rowIndex++) {
        let columnIndex = board[rowIndex].indexOf('@');
        if (columnIndex !== -1) {
            enginePosition = { x: columnIndex, y: rowIndex }
            break;
        }
    }

    let boardMovements = {
        'L': [-1, 0],
        'R': [+1, 0],
        'U': [0, -1],
        'D': [0, +1]
    }

    let [tmpX, tmpY] = boardMovements[mov]
    let newX = enginePosition.x + tmpX
    let newY = enginePosition.y + tmpY

    if (newX < 0 || newX >= board[0].length || newY < 0 || newY >= board.length) {
        return "crash"
    }

    let item = board[newY][newX]
    let result: Result

    if (item == '*') {
        result = "eat"
    } else if (item == 'o') {
        result = "crash"
    } else {
        result = "none"
    }

    return result
}

const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right
