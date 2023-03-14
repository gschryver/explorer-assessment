import { getOrders, getDishes, getVegetables, getSides } from "./database.js"

const dishes = getDishes()
const vegetables = getVegetables()
const sides = getSides()

const buildOrderListItem = (order) => {
    const foundDish = dishes.find(
        (dish) => {
            return dish.id === order.dishId
        }
    )
    
    const foundVegetable = vegetables.find(
        (vege) => {
            return vege.id === order.vegeId
        }
    )

    const foundSide = sides.find(
        (side) => {
            return side.id === order.sideId
        }
    )

    
    let totalCost = 0
    if (foundDish && foundVegetable && foundSide) {
        totalCost = foundDish.price + foundVegetable.price + foundSide.price
    } else { 
        window.alert("Please make a selection from all available options")
        location.reload()
        return 
    }

 
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Receipt #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}