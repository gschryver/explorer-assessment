import { getVegetables, setVegetables } from "./database.js"

const vegetables = getVegetables()

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
        if (event.target.name === "vegetable") {
            setVegetables(parseInt(event.target.value))
        }
    }
)

// html export 
export const Vegetables = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = vegetables.map(vege => {
        return `<li>
            <input type="radio" name="vegetable" value="${vege.id}" /> ${vege.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}