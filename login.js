// Get the modal
var loginPopup = document.getElementById("login-popup");

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("close-btn");

// Get the signup button
var signupBtn = document.getElementById("signup-btn");

// Show the login popup immediately (optional, for testing purposes)
window.onload = function() {
    loginPopup.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    loginPopup.style.display = "none";
    window.open('index.html', '_blank');
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginPopup) {
        loginPopup.style.display = "none";
        window.open('index.html', '_blank')
    }
};

// Redirect to the signup page when the signup button is clicked
signupBtn.onclick = function() {
    window.location.href = 'signup.html';
};
