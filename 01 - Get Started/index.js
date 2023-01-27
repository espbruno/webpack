function buttonClicked() {
    const el = document.getElementById("header");
    el.innerHTML = "Hey, the code has been updated";

    const listItems = ["apple", "orange", "banana", "whey"];
    const ul = document.getElementById("shoppingList");

    _.forEach(listItems, function(item) {
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    })
}