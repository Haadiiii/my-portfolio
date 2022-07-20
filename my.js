const hamburger = document.querySelector("#beautiful");
const navMenu = document.querySelector("#hidden");
const nextHamburger = document.querySelector("#menu");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay")
const projectHead = document.querySelectorAll(".modal-head")


beautiful.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
})
menu.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    nextHamburger.classList.remove("active");
    
}))


