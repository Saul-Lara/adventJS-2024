/**
 * Challenge 20
 * Find missing and duplicate gifts
 */

function fixGiftList(received: string[], expected: string[]): { missing: Record<string, number>, extra: Record<string, number> } {
    let missingGifts: { [toyName: string]: number } = {}
    let extraGifts: { [toyName: string]: number } = {}

    let getFrequencyMap = (giftsArray: string[]): { [toyName: string]: number } => {
        return giftsArray.reduce((acc, gift) => {
            acc[gift] = (acc[gift] || 0) + 1
            return acc
        }, {})
    }

    // Generate frequency maps
    let receivedMap = getFrequencyMap(received)
    let expectedMap = getFrequencyMap(expected)

    Object.keys(expectedMap).forEach((gift) => {
        if (!(gift in receivedMap)) { // Missing gift
            let qty = expectedMap[gift]
            missingGifts[gift] = qty
        } else {	// Exists gift
            let qtyReceived = receivedMap[gift]
            let qtyExpected = expectedMap[gift]

            if (qtyReceived > qtyExpected) { // Extra gift
                let qtyExtra = qtyReceived - qtyExpected
                extraGifts[gift] = qtyExtra
            }

            if (qtyReceived < qtyExpected) { // Missing gift
                let qtyMiss = qtyExpected - qtyReceived
                missingGifts[gift] = qtyMiss
            }
        }
    })

    // Extra gift in received but no in expected
    Object.keys(receivedMap).filter((gift) => !(gift in expectedMap)).forEach((gift) => {
        let qty = receivedMap[gift]
        extraGifts[gift] = qty
    })

    return {
        missing: missingGifts,
        extra: extraGifts
    }
}

console.log(fixGiftList(
    ['book', 'train', 'kite', 'train'],
    ['train', 'book', 'kite', 'ball', 'kite']
))
// Returns:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']))
// Returns:
// {
//   missing: {},
//   extra: {}
// }

console.log(fixGiftList(['bear', 'bear', 'car', 'doll', "doll"], ['car', 'bear', 'bear']))
// Returns:
// {
//   missing: {},
//   extra: { doll: 2 }
// }