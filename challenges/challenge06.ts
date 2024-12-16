/**
 * Challenge 06
 * Is the gift inside the box?
 */

function inBox(box: string[]): boolean {
    let countStars = 0

    // Remove first and last layer of the box
    let innerBox = box.slice(1, box.length - 1);

    innerBox.forEach((item) => {
        // Remove left and right border of the box
        let noBorders = item.slice(1, -1)
        noBorders.includes("*") ? countStars++ : countStars
    })

    return countStars > 0
}

let result = inBox([
    "###",
    "#*#",
    "###"
])

// Expected result : true
console.log(result)