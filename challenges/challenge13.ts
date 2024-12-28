/**
 * Challenge 13
 * Is the robot back?
 */

function isRobotBack(moves: string): true | [number, number] {
    let robotPosition = { x: 0, y: 0 } // [x, y]
    let robotMovements = {
        'L': [-1, 0],
        'R': [+1, 0],
        'U': [0, +1],
        'D': [0, -1]
    }
    let robotMovementsInverted = {
        'L': 'R',
        'R': 'L',
        'U': 'D',
        'D': 'U'
    }

    let movesStack = []

    let moveRobot = (move: string) => {
        let [tmpX, tmpY] = robotMovements[move]
        robotPosition.x = robotPosition.x + tmpX
        robotPosition.y = robotPosition.y + tmpY
    };

    for (let idx = 0; idx < moves.length; idx++) {
        let move = moves[idx]

        if (move == '*') {
            let newMove = moves[idx + 1]
            moveRobot(newMove)
            movesStack.push(newMove)

        } else if (move == '!') {
            let newMove = robotMovementsInverted[moves[idx + 1]]
            moveRobot(newMove)
            movesStack.push(newMove)
            idx++

        } else if (move == '?') {
            let newMove = moves[idx + 1]

            if (movesStack.lastIndexOf(newMove) >= 0) {
                idx += 2
            } else {
                moveRobot(newMove)
                movesStack.push(newMove)
                idx++
            }
        } else {
            moveRobot(move)
            movesStack.push(move)
        }
    }

    return (robotPosition.x == 0 && robotPosition.y == 0) || [robotPosition.x, robotPosition.y]
}

console.log(isRobotBack('R'))     // [1, 0]
console.log(isRobotBack('RL'))    // true
console.log(isRobotBack('RLUD'))  // true
console.log(isRobotBack('*RU'))   // [2, 1]
console.log(isRobotBack('R*U'))   // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R'))   // [1, 0]
console.log(isRobotBack('U?D?U')) // true