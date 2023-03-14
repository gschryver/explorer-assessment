import { getDishes, setDishes } from "./database.js"

const dishes = getDishes()

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
        if (event.target.name === "dish") {
            setDishes(parseInt(event.target.value))
        }
    }
)

// html export 
export const MainDishes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = dishes.map(dish => {
        return `<li>
            <input type="radio" name="dish" value="${dish.id}" /> ${dish.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}