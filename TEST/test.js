document.addEventListener('DOMContentLoaded', function () {
    const addItemButton = document.getElementById('addItem');
    const itemList = document.getElementById('itemList');

    addItemButton.addEventListener('click', function () {
        // Prompt user to enter a new item
        const newItem = prompt('Enter a new item:');

        // If the user provided input, create a new list item
        if (newItem && newItem.trim() !== '') {
            // Create a new <li> element
            const newLi = document.createElement('li');
            newLi.textContent = newItem;

            // Append the new item to the list
            itemList.appendChild(newLi);
        } else {
            alert('Please enter a valid item.');
        }
    });
});

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}