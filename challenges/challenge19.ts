function distributeWeight(weight: number): string {
    const boxRepresentations = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }

    let boxWeight = [1, 2, 5, 10]
    let boxDistribution = []
    let drawBoxDistribution = []

    while (weight > 0) {
        if (boxWeight.includes(weight)) {
            boxDistribution.push(weight)
            weight -= weight
        } else {
            let nearWeight = Math.max(...boxWeight.filter((item) => item <= weight))
            boxDistribution.push(nearWeight)
            weight -= nearWeight
        }
    }

    let prevBoxBase = ""
    let currentBoxBase = ""
    boxDistribution.reverse().forEach((box, index) => {
        let boxRepresentation = boxRepresentations[box].slice()
        let boxBase = boxRepresentation.at(-1)
        let topBox = boxRepresentation[0]

        let boxUnion = prevBoxBase + topBox?.substring(prevBoxBase.length)
        boxUnion = index > 0 ? boxUnion.toString().trimEnd() : boxUnion

        prevBoxBase = boxBase
        boxRepresentation[0] = boxUnion
        currentBoxBase = boxRepresentation.pop()

        drawBoxDistribution.push(...boxRepresentation)
    })
    drawBoxDistribution.push(currentBoxBase)

    //console.log(boxDistribution)

    return drawBoxDistribution.join("\n");
}

console.log(distributeWeight(1))
// Returns:
//  _
// |_|

console.log(distributeWeight(2))
// Returns:
//  ___
// |___|

console.log(distributeWeight(3))
// Returns:
//  _
// |_|_
// |___|