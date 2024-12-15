/**
 * Challenge 05
 * Shoe pairing
 */

type Shoe = {
    type: 'I' | 'R'
    size: number
}

function organizeShoes(shoes: Shoe[]): number[] {
    let separateShoes = {}
    let pairsOfShoes = []

    shoes.map((shoe) => {
        separateShoes[shoe.size] = separateShoes[shoe.size] || { I: 0, R: 0 }
        separateShoes[shoe.size][shoe.type]++
    })

    Object.keys(separateShoes).map((key) => {
        let R = separateShoes[key].R
        let I = separateShoes[key].I

        pairsOfShoes.push(Array(Math.min(I, R)).fill(parseInt(key)))
    })

    return pairsOfShoes.flat()
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes))

/* Expected result:

[38, 42]

*/