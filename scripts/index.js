// Smooth scroll for navigation links
document.querySelectorAll('.scroll-button').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show the sign-up form and hide the login form
function showSignupForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'flex';
}

// Show the login form and hide the sign-up form
function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'flex';
}


function validateform() {
    let emailAddress = document.forms['login']['email'].value;
    let userpassword = document.forms['login']['password'].value;

   
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
        alert("You have entered an invalid email address!");
        return false; 
    }

    // Validate password length
    if (userpassword.length < 6) {
        alert("Password should be at least 6 characters long.");
        return false; 
    }

    return true; 
}




