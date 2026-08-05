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
// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        contactForm.reset();
    });
}
// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}
const counters = document.querySelectorAll(".stat h3");

counters.forEach(counter => {
    const target = parseInt(counter.innerText);

    if (!isNaN(target)) {
        let count = 0;
        const update = () => {
            count += Math.ceil(target / 100);

            if (count >= target) {
                counter.innerText = target + "+";
            } else {
                counter.innerText = count;
                requestAnimationFrame(update);
            }
        };

        update();
    }
});
