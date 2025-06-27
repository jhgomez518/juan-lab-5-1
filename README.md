Reflection Questions:

1. How did you dynamically create and append new elements to the DOM?

    I made the job easier for myself by confining the list of items to a few concrete items,
    such as one might find in a coffee shop. I made an object based on this
    menu, and then I cross-referenced user inputs to this finite number of key-value
    pairs. When a match was given, I would add to their cart (an object called
    "cart"), and when no match, I would alert the user to only include items
    from the menu.

2. What steps did you take to ensure accurate updates to the total price?

    This part was kinda hard. First I had to make sure that I had proper
    alignment of references in order to retrieve the intended price every
    time I wanted to add to the total price/cost. In particular, these two
    lines took me a while to figure out:

            cart[addedItemFormatted] = menu[item]
            total_cost += menu[item]

    because I kept using dot notation without realizing that I was re-creating
    properties and values in doing so instead of retrieving existing ones 
    (which I think just means I am not yet quite used to handling objects).

3. How did you handle invalid input for product name or price?

    As mentioned above, the parameters I allowed in my setup were 8 items total
    (each only one word with no spaces, because I ran into problems otherwise,
    problems I could not handle), so all I really had to do was trim inputs,
    convert to lower case, and check for matches against the menu object. anything
    that was not some closely-resembling version of a menu item would alert
    the user to an error.

4. What challenges did you face when implementing the remove functionality?

    I got really stuck when my remove function made it so that the user could
    only remove a cell-at-a-time, which was absolutely not what I was going for.
    .remove() ended up being what worked in the end.