document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("reg-username").value;
        const email = document.getElementById("reg-email").value;
        const password = document.getElementById("reg-password").value;

        // You can implement user registration logic here
        console.log("User registered:", username, email, password);
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        // You can implement user login logic here
        console.log("User logged in:", username, password);
    });
});
