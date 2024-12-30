/**
 * Challenge 14
 * Weaving the reno
 */

function minMovesToStables(reindeer: number[], stables: number[]): number {
    let totalDistance: number[] = []

    reindeer.forEach((position) => {
        let distance: number[] = []

        stables.forEach((stable) => {
            let distanceStableReindeer = Math.abs(stable - position)
            distance.push(distanceStableReindeer)
        })

        let shortDistance = Math.min(...distance)
        let indexShortDistance = distance.indexOf(shortDistance)

        totalDistance.push(shortDistance)
        stables.splice(indexShortDistance, 1);
    })

    return totalDistance.reduce((acc, dist) => acc + dist, 0,)
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])) // -> 3
console.log(minMovesToStables([1, 1, 3], [1, 8, 4])) // -> 8