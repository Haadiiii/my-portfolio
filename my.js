const hamburger = document.querySelector("#beautiful");
const navMenu = document.querySelector("#hidden");


beautiful.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".pb, .ab, .cb").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))