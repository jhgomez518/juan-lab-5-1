
const userInput = document.getElementById("user-input")
const addItemButton = document.getElementById("add-item-button")
const cartItems = document.getElementById("cart-items")

let menu = {
    espresso: 5,
    latte: 6,
    americano: 5.10,
    cappucino: 6.10,
    mocha: 6.30,
    tea: 5,
    drip: 4.90,
    pastry: 3.80
}

let cart = {}
let total_cost = 0
let valid_entry = false

addItemButton.addEventListener('click', (event) => {

    event.preventDefault(); // button kept refreshing page, i think because of "form" tags
    const addedItem = userInput.value.trim()
    const addedItemFormatted = addedItem.toLowerCase()
    /**
     * we want to append in the form of a tr.
     * a tr contains a td, so first we have to put the user's inputted content in td
     * then append tr with td, and THEN we can append the table with the data in now-complete <tr> form
     */
    let added_to_cart = document.createElement("tr");
    let item_cell = document.createElement("td");
    let price_cell = document.createElement("td")

    for(const [item, price] of Object.entries(menu)) {
        if(item === addedItemFormatted) {
            valid_entry = true
            cart[addedItemFormatted] = menu[item]
            total_cost += menu[item]
            item_cell.textContent = addedItemFormatted
            price_cell.textContent = menu[item].toFixed(2)
            added_to_cart.appendChild(item_cell)
            added_to_cart.appendChild(price_cell)
            cartItems.appendChild(added_to_cart)
            document.getElementById("total-cost").innerHTML = `total: $${total_cost}`
            break
        }
    }

    if(!valid_entry) {
        alert("not a valid entry. please select an item from the menu (check for unnecessary spacing")
    }

    valid_entry = false

}) 

// for removing a specific item from the cart
cartItems.addEventListener('click', (event) => {

    const row = event.target.closest('tr')
    const item_name = row.children[0].textContent // retrieves data of first cell in row to be deleted
    const item_price = cart[item_name] // retrieves data of second cell in row to be deleted

    row.remove();

  
    delete cart[item_name]
    total_cost -= item_price
    document.getElementById('total-cost').textContent = `total: $${total_cost.toFixed(2)}`
  
})

