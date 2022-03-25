// the dom
const navbar = document.querySelector(".navbar");

// the action that will happen when a user scroll the web page
window.addEventListener("scroll", function () {
    navbar.classList.toggle("sticky", window.scrollY > 0);
});