/**
 * Challenge 11
 * Filenames encoded
 */

function decodeFilename(filename: string): string {
    let indexOfFirstUnderscore = filename.indexOf("_");
    let tmp = filename.substring(indexOfFirstUnderscore + 1)
    let indexOfLastDot = tmp.lastIndexOf(".");
    let cleanFilename = tmp.slice(0, indexOfLastDot)

    return cleanFilename
}

console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'))
// ➞ "sleighDesign.png"

console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'))
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename('987654321_elf-roster.csv.tempfile'))
// ➞ "elf-roster.csv" 