/**
 * Challenge 12
 * How much does the tree cost?
 */

function calculatePrice(ornaments: string): number {
    let ornamentsDict = { '*': 1, 'o': 5, '^': 10, '#': 50, '@': 100 }
    let price = 0

    ornaments.split('').forEach((item, index) => {
        if (ornamentsDict[item] < ornamentsDict[ornaments[index + 1]]) {
            price -= ornamentsDict[item]
        } else {
            price += ornamentsDict[item]
        }
    })

    return isNaN(price) ? undefined : price
}

console.log(calculatePrice('#@'))   // 50  (-50 + 100)
console.log(calculatePrice('#@Z'))  // undefined (Z es unkwnown)
