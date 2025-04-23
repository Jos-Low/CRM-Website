const modal = document.getElementById('customModal');
const closeModalButton = document.getElementById('closeModal');
const addCustomerButton = document.getElementById('addCustomerButton');
const customerForm = document.getElementById('customerForm');
const customerList = document.getElementById('customerList');

// Open the modal when the button is clicked
addCustomerButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close the modal when the close button (X) is clicked
closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle the form submission
customerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerAddress = document.getElementById('customerAddress').value;

    if (customerName && customerEmail && customerAddress) {
        // Create a new list item for the customer
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="customer-detail"><strong>Name:</strong> <span>${customerName}</span></div>
            <div class="customer-detail"><strong>Email:</strong> <span>${customerEmail}</span></div>
            <div class="customer-detail"><strong>Address:</strong> <span>${customerAddress}</span></div>
        `;

        // Add the new customer to the list
        customerList.appendChild(li);

        // Close the modal and reset the form
        modal.style.display = 'none';
        customerForm.reset();
    } else {
        alert("Please fill in all fields!");
    }
});   
