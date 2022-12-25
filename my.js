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
  title: "demo",
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
  li4: "css",
  li5: "JavaScript",
  li6: "React",
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

const mainModalTwo = document.querySelector(".main-modal-two");

mainModalTwo.innerHTML = `
  <div class="modal2">
    <div class="modal-header">
      <div class="title">
          <h2 class="modal-headm">todo-list</h2>
          <div class="modal-header22">
          <h2 class="modal-headd">todo-list</h2>
          </div>
      </div>
      <span class="close-button2">&times;</span>
    </div>
    <div class="modal-tags">
      <ul class ="modal-social">
        <li class = "tags1">${modalInformation.li}</li>
        <li class = "tags2">${modalInformation.li2}</li>
        <li class = "tag4">${modalInformation.li4}</li>
        <li class = "tag5">${modalInformation.li5}</li>
        <li class = "tag6">${modalInformation.li6}</li>
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

const mainModalThree = document.querySelector(".main-modal-three");

mainModalThree.innerHTML = `
<div class="modal3">
    <div class="modal-header">
      <div class="title">
          <h2 class="modal-headm">${modalInformation.title}</h2>
          <div class="modal-header22">
          <h2 class="modal-headd">${modalInformation.title}</h2>
          </div>
      </div>
      <span class="close-button3">&times;</span>
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

const mainModalFour = document.querySelector(".main-modal-four");

mainModalFour.innerHTML = `
<div class="modal4">
    <div class="modal-header">
      <div class="title">
          <h2 class="modal-headm">${modalInformation.title}</h2>
          <div class="modal-header22">
          <h2 class="modal-headd">${modalInformation.title}</h2>
          </div>
      </div>
      <span class="close-button4">&times;</span>
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

const mainModalFive = document.querySelector(".main-modal-five");

mainModalFive.innerHTML = `
<div class="modal5">
    <div class="modal-header">
      <div class="title">
          <h2 class="modal-headm">${modalInformation.title}</h2>
          <div class="modal-header22">
          <h2 class="modal-headd">${modalInformation.title}</h2>
          </div>
      </div>
      <span class="close-button5">&times;</span>
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

const mainModalSix = document.querySelector(".main-modal-six");

mainModalSix.innerHTML = `
<div class="modal6">
    <div class="modal-header">
      <div class="title">
          <h2 class="modal-headm">${modalInformation.title}</h2>
          <div class="modal-header22">
          <h2 class="modal-headd">${modalInformation.title}</h2>
          </div>
      </div>
      <span class="close-button6">&times;</span>
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
const parentModal2 = document.querySelector(".modal2");
const parentModal3 = document.querySelector(".modal3");
const parentModal4 = document.querySelector(".modal4");
const parentModal5 = document.querySelector(".modal5");
const parentModal6 = document.querySelector(".modal6");
const openModalButtons = document.querySelector(".btn");
const closeModalButtons = document.querySelector("#close-btn-new");
const closeModalButton = document.querySelector(".close-button");
const closeModalButton2 = document.querySelector(".close-button2");
const closeModalButton3 = document.querySelector(".close-button3");
const closeModalButton4 = document.querySelector(".close-button4");
const closeModalButton5 = document.querySelector(".close-button5");
const closeModalButton6 = document.querySelector(".close-button6");
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

closeModalButton.addEventListener("click", (e) => {
  parentModal.style.display = "none";
  overlay.style.filter = "blur(0px)";
});

closeModalButton2.addEventListener("click", (e) => {
  parentModal2.style.display = "none";
  overlay.style.filter = "blur(0px)";
});

closeModalButton3.addEventListener("click", (e) => {
  parentModal3.style.display = "none";
  overlay.style.filter = "blur(0px)";
});

closeModalButton4.addEventListener("click", (e) => {
  parentModal4.style.display = "none";
  overlay.style.filter = "blur(0px)";
});

closeModalButton5.addEventListener("click", (e) => {
  parentModal5.style.display = "none";
  overlay.style.filter = "blur(0px)";
});

closeModalButton6.addEventListener("click", (e) => {
  parentModal6.style.display = "none";
  overlay.style.filter = "blur(0px)";
});

openModalButtons7.addEventListener("click", () => {
  parentModal6.style.display = "block";
  overlay.style.filter = "blur(10px)";
});
openModalButtons5.addEventListener("click", () => {
  parentModal4.style.display = "block";
  overlay.style.filter = "blur(10px)";
});
openModalButtons6.addEventListener("click", () => {
  parentModal5.style.display = "block";
  overlay.style.filter = "blur(10px)";
});
openModalButtons4.addEventListener("click", () => {
  parentModal3.style.display = "block";
  overlay.style.filter = "blur(10px)";
});
openModalButtons3.addEventListener("click", () => {
  parentModal2.style.display = "block";
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
