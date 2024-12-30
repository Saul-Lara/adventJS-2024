/**
 * Challenge 15
 * Drawing tables
 */

function drawTable(data: Array<Record<string, string | number>>): string {
    let columnWidths = []
    let columnNames = Object.keys(data[0]).map((name) => name[0].toUpperCase() + name.substring(1))

    // Calculate column widths
    columnWidths = columnNames.map((name, index) =>
        Math.max(name.length, ...data.map((row) => row[Object.keys(row)[index]].toString().length))
    );

    // Horizontal line
    let horizontalLine = "+" + columnWidths.map((len) => "-" + "-".repeat(len) + "-").join("+") + "+";

    // Header
    let header = "|" + columnNames.map((column, index) => " " + column + " ".repeat(columnWidths[index] - column.length + 1)).join("|") + "|"

    // Table content
    let tableContent = data.map((row) =>
        "|" + Object.values(row).map((cellValue, index) => " " + cellValue + " ".repeat(columnWidths[index] - cellValue.toString().length) + " ").join("|") + "|"

    )

    return [horizontalLine, header, horizontalLine, ...tableContent, horizontalLine].join("\n")
}

console.log(drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
]))
// +---------+----------+
// | Name    | City     |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+-----------+

console.log(drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
]))
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+