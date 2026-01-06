const button = document.getElementById("menu");
const nav = document.querySelector("nav");
const list = document.querySelector(".navigation");

button.addEventListener("click", () => {
    button.classList.toggle("open");
    nav.classList.toggle("open");
    list.classList.toggle("open");
});