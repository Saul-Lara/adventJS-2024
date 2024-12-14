/**
 * Challenge 03
 * Organizing the inventory
 */

type Inventory = Array<
    { name: string, quantity: number, category: string }
>

type OrganisedToys = {
    [category: string]: { [toyName: string]: number }
}

function organizeInventory(inventory: Inventory): object {
    let organisedToys: OrganisedToys = {}

    inventory.forEach((toy) => {
        if (!(toy.category in organisedToys)) {
            organisedToys[toy.category] = {}
        }

        if (!(toy.name in organisedToys[toy.category])) {
            organisedToys[toy.category][toy.name] = toy.quantity
        }
        else {
            organisedToys[toy.category][toy.name] += toy.quantity
        }
    })

    return organisedToys
}

const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventory))

/* Expected result:

{
  toys: {
    doll: 5,
    car: 5
  },
  sports: {
    ball: 2,
    racket: 4
  }
    
*/