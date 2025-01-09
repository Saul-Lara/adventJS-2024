/**
 * Challenge 26
 * Calculate the completed percentage
 */

function getCompleted(timeWorked: string, totalTime: string): string {
    function getMinutes(time: string) {
        let [hours, minutes, seconds] = time.split(':').map((x) => parseInt(x))
        return (hours * 60) + minutes + (seconds / 60)
    }

    let workedMinutes = getMinutes(timeWorked)
    let totalMinutes = getMinutes(totalTime)

    return Math.round((workedMinutes * 100) / totalMinutes) + '%'
}

console.log(getCompleted('01:00:00', '03:00:00')) // 33%
console.log(getCompleted('02:00:00', '04:00:00')) // 50%
console.log(getCompleted('01:00:00', '01:00:00')) // 100%
console.log(getCompleted('00:10:00', '01:00:00')) // 17%
console.log(getCompleted('01:10:10', '03:30:30')) // 33%
console.log(getCompleted('03:30:30', '05:50:50')) // 60%