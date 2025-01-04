/**
 * Challenge 18
 * Santa's Magic Agenda
 */

function findInAgenda(agenda: string, phone: string): { name: string; address: string } | null {
    let kidData: { name: string; address: string } = { name: "", address: "" }
    let personInfo = agenda.split('\n').filter((info) => info.includes(phone))

    if (personInfo.length == 1) {
        let data = personInfo[0]
        // Get kids name
        let name = data.slice(data.indexOf('<') + 1, data.indexOf('>'))
        kidData.name = name

        // Delete name
        data = data.slice(0, data.indexOf('<')) + data.slice(data.indexOf('>') + 1, data.length)

        // Delete Phone number
        let phone = data.match(/[+](\d+)[-](\d+)[-](\d+)[-](\d+)/g).toString()
        data = data.replace(phone, '')

        // Get kids addresses
        let address = data.trim()
        kidData.address = address
    }

    return Object.values(kidData).every(val => val.length > 0) ? kidData : null
}


const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
  Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
  <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '111'))
// null
// Explanation: No results