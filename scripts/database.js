const database = {
    orderBuilder: {},
    dishes: [
        { id: 1, name: "Hummus and Hot Sauce", price: 8.99 },
        { id: 2, name: "Chicken Fried Lamb Kebab", price: 10.99 },
        { id: 3, name: "Hot Chicken Green Salad", price: 10.99 },
        { id: 4, name: "Brussels Sprout Moussaka", price: 9.99 },
        { id: 5, name: "Okrakopita", price: 8.99 },
        { id: 6, name: "Fried Onion and Grape Leaves", price: 8.99 },
        { id: 7, name: "Chess Baklava", price: 8.99 },
        { id: 8, name: "Gyro Biscuits", price: 10.99 },
        { id: 9, name: "Black Eye Pea Falafel", price: 10.99 },
        { id: 10, name: "Pecan Pastitsio", price: 9.99 }
    ],
    vegetables: [
        { id: 1, name: "Okra", price: 3.99 },
        { id: 2, name: "Collard Greens", price: 2.99 },
        { id: 3, name: "Swiss Chard", price: 3.99 },
        { id: 4, name: "Corn", price: 2.99 },
        { id: 5, name: "Brussels Sprouts", price: 3.99 },
        { id: 6, name: "Sweet Potatoes", price: 3.99 },
        { id: 7, name: "Grits", price: 2.99 },
        { id: 8, name: "Fried Green Tomatoes", price: 4.99 },
        { id: 9, name: "Okra", price: 3.99 },
        { id: 10, name: "Green Beans", price: 2.99 }
    ],
    sides: [
        { id: 1, name: "Chicken Fried Steak", price: 6.99 },
        { id: 2, name: "Bacon", price: 3.99 },
        { id: 3, name: "Turkey Leg", price: 6.99 },
        { id: 4, name: "Ribs", price: 10.99 },
        { id: 5, name: "Catfish", price: 7.99 },
        { id: 6, name: "Souvlaki", price: 7.99 }
    ],
    customOrders: [
        {
            id: 1,
            dishId: 1,
            vegeId: 1,
            sideId: 1
        }
    ]
}


// EXPORTS/get* 
export const getDishes = () => {
    return database.dishes.map(dish => ({...dish}))
}

export const getVegetables = () => {
    return database.vegetables.map(vege => ({...vege}))
}

export const getSides = () => {
    return database.sides.map(side => ({...side}))
}

// CUSTOM ORDERS EXPORT 
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

// EXPORTS/set* 
export const setDishes = (id) => {
    database.orderBuilder.dishId = id
}

export const setVegetables = (id) => {
    database.orderBuilder.vegeId = id
}

export const setSides = (id) => {
    database.orderBuilder.sideId = id
}

// ADD CUSTOM ORDER 
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}