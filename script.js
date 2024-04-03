//your code here!
// Get the list element
const list = document.getElementById("infi-list");

// Add 10 list items by default
for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    list.appendChild(li);
}

function addMoreItems() {
    for (let i = 1; i <= 2; i++) {
        const li = document.createElement("li");
        li.textContent = "Item " + (list.children.length + i);
        list.appendChild(li);
    }
}

// Event listener to check if the user has scrolled to the bottom of the list
list.addEventListener("scroll", function() {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addMoreItems();
    }
});
