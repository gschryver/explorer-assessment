import { getSides, setSides } from "./database.js"

const sides = getSides()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "metal") {
//             window.alert(`User chose metal ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "side") {
            setSides(parseInt(event.target.value))
        }
    }
)

// html export 
export const Sides = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sides.map(side => {
        return `<li>
            <input type="radio" name="side" value="${side.id}" /> ${side.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}