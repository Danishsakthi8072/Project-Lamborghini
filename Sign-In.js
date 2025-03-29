document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

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
        
        // Simulating login process (replace with actual authentication logic)
        alert("Login successful! Redirecting...");
        window.location.href = "dashboard.html"; // Change to actual dashboard URL
    });
});

// Function to validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}