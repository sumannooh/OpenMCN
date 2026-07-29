// Hero Button
const button = document.querySelector(".hero button");

if (button) {
    button.addEventListener("click", () => {
        alert("Welcome to OpenMCN!");
    });
}

// Signup Form
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Account Created Successfully!");

        window.location.href = "login.html";
    });
}
