document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            
            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            
            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }
            
            alert("Login successful! Redirecting...");
            window.location.href = "dashboard.html"; // Change this to your actual dashboard
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("signupEmail").value.trim();
            const password = document.getElementById("signupPassword").value.trim();
            
            if (name.length < 3) {
                alert("Please enter a valid name.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            
            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }
            
            alert("Sign-up successful! Redirecting to login...");
            window.location.href = "index.html"; // Redirect back to login
        });
    }
});

// Function to validate email format
function validateEmail(email) {
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return regex.test(email);
}
