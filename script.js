const button = document.querySelector(".hero button");

button.addEventListener("click", () => {
    alert("Welcome to OpenMCN!");
});
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login feature coming soon!");
  });
}
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        alert("Account Created Successfully!");

        window.location.href = "login.html";
    });
}
