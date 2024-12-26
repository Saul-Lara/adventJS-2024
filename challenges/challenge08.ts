/**
 * Challenge 08
 * The reno race
 */

function drawRace(indices: number[], length: number): string {
    let spaces = indices.length - 1
    let raceTrack = []

    indices.forEach((reindeerPosition, index) => {
        let lane = '~'.repeat(length).split('')

        if (reindeerPosition != 0) {
            if (reindeerPosition < 0) {
                let newIndex = lane.length - Math.abs(reindeerPosition)
                lane[newIndex] = 'r'
            } else {
                lane[reindeerPosition] = 'r'
            }
        }

        raceTrack.push(" ".repeat(spaces) + lane.join('') + ` /${index + 1}`)
        spaces--
    })

    return raceTrack.join("\n")
}

console.log(drawRace([0, 5, -3], 10))
/*
Expected result:

  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3

*/