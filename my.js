const hamburger = document.querySelector("#beautiful");
const navMenu = document.querySelector("#hidden");
const nextHamburger = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

nextHamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    nextHamburger.classList.remove("active");
  })
);

const modalInformation = {
  heading1: "Multi Post Stories",
  title2: "Keeping track of hundreds  of components website",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  description2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  imageSrc: "./images/todolist.png",
  button1: "See Live ",
  button2: "See Source ",
  li: "html",
  li2: "Bootstrap",
  li3: "Ruby on rails",
};

const mainModal = document.querySelector(".main-modal");

mainModal.innerHTML = `
  <div class="modal">
    <div class="modal-header">
      <div class="title">
          <h2 class="modal-headm">${modalInformation.heading1}</h2>
          <div class="modal-header22">
            <h2 class = "modal-headd">${modalInformation.title2}</h2>
          </div>
      </div>
      <span class="close-button">&times;</span>
    </div>
    <div class="modal-tags">
      <ul class ="modal-social">
        <li class = "tags1">${modalInformation.li}</li>
        <li class = "tags2">${modalInformation.li2}</li>
        <li class = "tag3">${modalInformation.li3}</li>
      </ul>
    </div>

      <div class="modal-pic">
        <div class="modal-body">
        <p class ="modal-mobile">${modalInformation.description2}</p>
        <p class ="modal-desktop">${modalInformation.description}</p>
        </div>
      </div>

      <div class="modal-button">
          <button class="live-button">${modalInformation.button1}  <img src="./images/Icon.png"></button>
          <button class="source-button">${modalInformation.button2} <img src="./images/Vector.png"></button>
      </div>
      
  </div>

`;

const parentModal = document.querySelector(".modal");
const openModalButtons = document.querySelector(".btn");
const closeModalButtons = document.querySelector("#close-btn-new");
const closeModalButton = document.querySelector(".close-button");
const overlay = document.querySelector("#main");
const openModalButtons2 = document.querySelector(".btn1");
const openModalButtons3 = document.querySelector(".btn2");
const openModalButtons4 = document.querySelector(".btn3");
const openModalButtons5 = document.querySelector(".btn4");
const openModalButtons6 = document.querySelector(".btn5");
const openModalButtons7 = document.querySelector(".btn6");
const sixPic = document.getElementById("sixpic");

openModalButtons.addEventListener("click", () => {
  sixPic.style.display = "grid";
});

closeModalButtons.addEventListener("click", () => {
  sixPic.style.display = "none";
  overlay.style.filter = "blur(0px)";
});

closeModalButton.addEventListener("click", () => {
  parentModal.style.display = "none";
  overlay.style.filter = "blur(0px)";
});

parentModal.addEventListener("click", (e) => {
  if (e.target.className === ".modal") {
    parentModal.style.display = "none";
    overlay.style.filter = "blur(0px)";
  }
});

openModalButtons7.addEventListener("click", () => {
  parentModal.style.display = "block";
  overlay.style.filter = "blur(10px)";
});
openModalButtons5.addEventListener("click", () => {
  parentModal.style.display = "block";
  overlay.style.filter = "blur(10px)";
});
openModalButtons6.addEventListener("click", () => {
  parentModal.style.display = "block";
  overlay.style.filter = "blur(10px)";
});
openModalButtons4.addEventListener("click", () => {
  parentModal.style.display = "block";
  overlay.style.filter = "blur(10px)";
});
openModalButtons3.addEventListener("click", () => {
  parentModal.style.display = "block";
  overlay.style.filter = "blur(10px)";
});
openModalButtons2.addEventListener("click", () => {
  parentModal.style.display = "block";
  overlay.style.filter = "blur(10px)";
});

// Form javascript

const form = document.getElementById("subit");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

form.addEventListener("click", (event) => {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const str = email.value;
  if (str === str.toLowerCase()) {
    if (regex.test(str)) {
      emailError.classList.remove("show-error");
    } else {
      event.preventDefault();
      emailError.classList.add("show-error");
      emailError.textContent = "You entered an invalid email";
    }
  } else {
    event.preventDefault();
    emailError.classList.add("show-error");
    emailError.innerHTML = "Email must be typed in lowercase";
  }
  setTimeout(() => {
    emailError.classList.remove("show-error");
  }, 2500);
});

// Store data in localStorage

const fullName = document.getElementById("name");
const message = document.getElementById("txt-area");
const reset = document.getElementById("reset");

function changeHandler() {
  const field = {
    name: fullName.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem("user", JSON.stringify(field));
}
const user = JSON.parse(localStorage.getItem("user"));
email.value = user.email;
fullName.value = user.name;
message.value = user.message;

function resetFrom() {
  email.value = "";
  fullName.value = "";
  message.value = "";
  localStorage.removeItem("user");
}
fullName.addEventListener("onchange", changeHandler);
reset.addEventListener("click", resetFrom);
