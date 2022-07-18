const hamburger = document.querySelector("#beautiful");
const navMenu = document.querySelector("#hidden");
const logo = document.querySelector(".wel");

beautiful.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    wel.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

