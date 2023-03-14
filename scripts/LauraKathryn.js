import { MainDishes } from "./MainDishes.js"
import { Vegetables } from "./Vegetables.js";
import { Sides } from "./Sides.js";
import { Orders } from "./Orders.js";
import { addCustomOrder } from "./database.js";


document.addEventListener("click", (event) => {
        if(event.target.id === "orderButton") {
            addCustomOrder();
        }
    }
)

export const LauraKathryn = () => {
    return `
        <h1>Laura Kathryn's House of Hummus</h1>
        <article class="choices">
            <section class="choices__dishes options">
                <h2>Main Dishes</h2>
                ${MainDishes()}
            </section>
            <section class="choices__vegetables options">
                <h2>Vegetables</h2>
                ${Vegetables()}
            </section>
            <section class="choices__sides options">
                <h2>Sides</h2>
                ${Sides()}
            </section>
        </article>
        <article>
                <button id="orderButton">Purchase Combo</button>
        </article>      
        <article class="customOrders">
            <h2>Monthly Sales</h2>
                ${Orders()}
        </article>
    `
}