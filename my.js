const hamburger = document.querySelector('#beautiful');
const navMenu = document.querySelector('#hidden');
const nextHamburger = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

nextHamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  nextHamburger.classList.remove('active');
}));

const modalInformation = {
  description:
    'A simple todo list app that allows users to add, delete, edit, and clear all completed tasks, built with HTML, CSS, Javascript and webpack.',
  description2:
    'This is a webapp which uses real live data from the SpaceX API. It is an application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
  description3:
    'this website is biult for microverse capstone project. it shows the list of top 20 Pokemon and users can like and comment on the Pokemons, it uses API to fetch and post the user data.',
  imageSrc: './images/todolist.png',
  description4:
    'It is a single page website with two connected pages books and category in book page you will add books and Remove book through connect API and also watch the lists and progress of books.',
  description5:
    'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
  description6:
    'this is a Budget App with Ruby on Rails, it allows you to create a user, create a group, create a transaction, you can also see the total amount of money spent in the group, and the total amount of money spent by each user, and the total amount of money spent by each user in the group.',
  button1: 'See Live ',
  button2: 'See Source ',
  li: 'html',
  li2: 'Bootstrap',
  li3: 'Ruby/on/rails',
  li4: 'css',
  li5: 'JavaScript',
  li6: 'React',
  li7: 'Ruby',
  li8: 'webpack',
  li9: 'redux',
  li10: 'Rspec',
  li11: 'Jest',
  li12: 'Capybara',
};

const mainModal = document.querySelector('.main-modal');

mainModal.innerHTML = `
  <div class="modal">
    <div class="modal-header">
      <div class="title">
          <h2 class="modal-headm">Space Travelers Hub</h2>
          <div class="modal-header22">
            <h2 class = "modal-headd">Space Travelers Hub</h2>
          </div>
      </div>
      <span class="close-button">&times;</span>
    </div>
    <div class="modal-tags">
      <ul class ="modal-social">
        <li class = "tags1">${modalInformation.li}</li>
        <li class = "tags2">${modalInformation.li2}</li>
        <li class = "tag3">${modalInformation.li4}</li>
        <li class = "tag3">${modalInformation.li8}</li>
        <li class = "tag3">${modalInformation.li9}</li>
        <li class = "tag3">${modalInformation.li6}</li>

      </ul>
    </div>

      <div class="modal-pic1">
        <div class="modal-body">
        <p class ="modal-mobile">${modalInformation.description2}</p>
        <p class ="modal-desktop">${modalInformation.description2}</p>
        </div>
      </div>

      <div class="modal-button">
          <button class="live-button"><a href="https://deploy-preview-38--gilded-cucurucho-f6c94c.netlify.app/">${modalInformation.button1}</a><img src="./images/Icon.png"></button>
          <button class="source-button"><a href="https://github.com/Haadiiii/space-travelers-capstone">${modalInformation.button2}</a><img src="./images/Vector.png"></button>
      </div>
      
  </div>

`;

const mainModalTwo = document.querySelector('.main-modal-two');

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
        <li class = "tag6">${modalInformation.li8}</li>
      </ul>
    </div>

      <div class="modal-pic">
        <div class="modal-body">
        <p class ="modal-mobile">${modalInformation.description}</p>
        <p class ="modal-desktop">${modalInformation.description}</p>
        </div>
      </div>

      <div class="modal-button">
          <button class="live-button"><a href="https://haadii-todos.netlify.app">${modalInformation.button1}</a><img src="./images/Icon.png"></button>
          <button class="source-button"><a href="https://github.com/Haadiiii/todo-list">${modalInformation.button2} </a><img src="./images/Vector.png"></button>
      </div>
      
  </div>

`;

const mainModalThree = document.querySelector('.main-modal-three');

mainModalThree.innerHTML = `
<div class="modal3">
    <div class="modal-header">
      <div class="title">
          <h2 class="modal-headm">Pokemon App</h2>
          <div class="modal-header22">
          <h2 class="modal-headd">Pokemon App</h2>
          </div>
      </div>
      <span class="close-button3">&times;</span>
    </div>
    <div class="modal-tags">
      <ul class ="modal-social">
        <li class = "tags1">${modalInformation.li}</li>
        <li class = "tags2">${modalInformation.li4}</li>
        <li class = "tag3">${modalInformation.li2}</li>
        <li class = "tag3">${modalInformation.li5}</li>
        <li class = "tag3">${modalInformation.li8}</li>
      </ul>
    </div>

      <div class="modal-pic3">
        <div class="modal-body">
        <p class ="modal-mobile">${modalInformation.description3}</p>
        <p class ="modal-desktop">${modalInformation.description3}</p>
        </div>
      </div>

      <div class="modal-button">
          <button class="live-button"><a href="https://pokedoki-app.netlify.app/">${modalInformation.button1} </a><img src="./images/Icon.png"></button>
          <button class="source-button"><a href="https://github.com/Haadiiii/Pokemon-App">${modalInformation.button2} </a><img src="./images/Vector.png"></button>
      </div>
      
  </div>
`;

const mainModalFour = document.querySelector('.main-modal-four');

mainModalFour.innerHTML = `
<div class="modal4">
    <div class="modal-header">
      <div class="title">
          <h2 class="modal-headm">BookStore</h2>
          <div class="modal-header22">
          <h2 class="modal-headd">Bookstore</h2>
          </div>
      </div>
      <span class="close-button4">&times;</span>
    </div>
    <div class="modal-tags">
      <ul class ="modal-social">
      <li class = "tags1">${modalInformation.li}</li>
      <li class = "tags2">${modalInformation.li4}</li>
      <li class = "tag3">${modalInformation.li2}</li>
      <li class = "tag3">${modalInformation.li5}</li>
      <li class = "tag3">${modalInformation.li6}</li>
      <li class = "tag3">${modalInformation.li9}</li>
      </ul>
    </div>

      <div class="modal-pic4">
        <div class="modal-body">
        <p class ="modal-mobile">${modalInformation.description4}</p>
        <p class ="modal-desktop">${modalInformation.description4}</p>
        </div>
      </div>

      <div class="modal-button">
          <button class="live-button"><a href="https://haadii-bookstore.netlify.app/">${modalInformation.button1} </a><img src="./images/Icon.png"></button>
          <button class="source-button"><a href="https://github.com/Haadiiii/Bookstore">${modalInformation.button2} </a><img src="./images/Vector.png"></button>
      </div>
      
  </div>
`;

const mainModalFive = document.querySelector('.main-modal-five');

mainModalFive.innerHTML = `
<div class="modal5">
    <div class="modal-header">
      <div class="title">
          <h2 class="modal-headm">Recipe App</h2>
          <div class="modal-header22">
          <h2 class="modal-headd">Recipe App</h2>
          </div>
      </div>
      <span class="close-button5">&times;</span>
    </div>
    <div class="modal-tags">
      <ul class ="modal-social">
        <li class = "tags1">${modalInformation.li7}</li>
        <li class = "tags2">${modalInformation.li2}</li>
        <li class = "tag3">${modalInformation.li3}</li>
        <li class = "tag3">${modalInformation.li10}</li>
        <li class = "tag3">${modalInformation.li12}</li>
      </ul>
    </div>

      <div class="modal-pic5">
        <div class="modal-body">
        <p class ="modal-mobile">${modalInformation.description5}</p>
        <p class ="modal-desktop">${modalInformation.description5}</p>
        </div>
      </div>

      <div class="modal-button">
          <button class="live-button"><a href="https://recipe-website.herokuapp.com/users/sign_in">${modalInformation.button1} </a><img src="./images/Icon.png"></button>
          <button class="source-button"><a href="https://github.com/Haadiiii/haadii-recipe-app">${modalInformation.button2} </a><img src="./images/Vector.png"></button>
      </div>
      
  </div>
`;

const mainModalSix = document.querySelector('.main-modal-six');

mainModalSix.innerHTML = `
<div class="modal6">
    <div class="modal-header">
      <div class="title">
          <h2 class="modal-headm">Budget App</h2>
          <div class="modal-header22">
          <h2 class="modal-headd">Budget App</h2>
          </div>
      </div>
      <span class="close-button6">&times;</span>
    </div>
    <div class="modal-tags">
      <ul class ="modal-social">
      <li class = "tags1">${modalInformation.li7}</li>
      <li class = "tags2">${modalInformation.li2}</li>
      <li class = "tag3">${modalInformation.li3}</li>
      <li class = "tag3">${modalInformation.li10}</li>
      <li class = "tag3">${modalInformation.li12}</li>
      </ul>
    </div>

      <div class="modal-pic6">
        <div class="modal-body">
        <p class ="modal-mobile">${modalInformation.description6}</p>
        <p class ="modal-desktop">${modalInformation.description6}</p>
        </div>
      </div>

      <div class="modal-button">
          <button class="live-button"><a href="https://budget-website.herokuapp.com/">${modalInformation.button1} </a><img src="images/Icon.png"></button>
          <button class="source-button"><a href="https://github.com/Haadiiii/haadii-budget-app">${modalInformation.button2} </a><img src="images/Vector.png"></button>
      </div>
      
  </div>
`;

const parentModal = document.querySelector('.modal');
const parentModal2 = document.querySelector('.modal2');
const parentModal3 = document.querySelector('.modal3');
const parentModal4 = document.querySelector('.modal4');
const parentModal5 = document.querySelector('.modal5');
const parentModal6 = document.querySelector('.modal6');
const openModalButtons = document.querySelector('.btn');
const closeModalButtons = document.querySelector('#close-btn-new');
const closeModalButton = document.querySelector('.close-button');
const closeModalButton2 = document.querySelector('.close-button2');
const closeModalButton3 = document.querySelector('.close-button3');
const closeModalButton4 = document.querySelector('.close-button4');
const closeModalButton5 = document.querySelector('.close-button5');
const closeModalButton6 = document.querySelector('.close-button6');
const overlay = document.querySelector('#main');
const openModalButtons2 = document.querySelector('.btn1');
const openModalButtons3 = document.querySelector('.btn2');
const openModalButtons4 = document.querySelector('.btn3');
const openModalButtons5 = document.querySelector('.btn4');
const openModalButtons6 = document.querySelector('.btn5');
const openModalButtons7 = document.querySelector('.btn6');
const sixPic = document.getElementById('sixpic');

openModalButtons.addEventListener('click', () => {
  sixPic.style.display = 'grid';
  closeModalButtons.style.display = 'block';
});

closeModalButtons.addEventListener('click', () => {
  sixPic.style.display = 'none';
  overlay.style.filter = 'blur(0px)';
});

closeModalButton.addEventListener('click', () => {
  parentModal.style.display = 'none';
  overlay.style.filter = 'blur(0px)';
});

closeModalButton2.addEventListener('click', () => {
  parentModal2.style.display = 'none';
  overlay.style.filter = 'blur(0px)';
});

closeModalButton3.addEventListener('click', () => {
  parentModal3.style.display = 'none';
  overlay.style.filter = 'blur(0px)';
});

closeModalButton4.addEventListener('click', () => {
  parentModal4.style.display = 'none';
  overlay.style.filter = 'blur(0px)';
});

closeModalButton5.addEventListener('click', () => {
  parentModal5.style.display = 'none';
  overlay.style.filter = 'blur(0px)';
});

closeModalButton6.addEventListener('click', () => {
  parentModal6.style.display = 'none';
  overlay.style.filter = 'blur(0px)';
});

openModalButtons7.addEventListener('click', () => {
  parentModal6.style.display = 'block';
  overlay.style.filter = 'blur(10px)';
});
openModalButtons5.addEventListener('click', () => {
  parentModal4.style.display = 'block';
  overlay.style.filter = 'blur(10px)';
});
openModalButtons6.addEventListener('click', () => {
  parentModal5.style.display = 'block';
  overlay.style.filter = 'blur(10px)';
});
openModalButtons4.addEventListener('click', () => {
  parentModal3.style.display = 'block';
  overlay.style.filter = 'blur(10px)';
});
openModalButtons3.addEventListener('click', () => {
  parentModal2.style.display = 'block';
  overlay.style.filter = 'blur(10px)';
});
openModalButtons2.addEventListener('click', () => {
  parentModal.style.display = 'block';
  overlay.style.filter = 'blur(10px)';
});

// Form javascript

const form = document.getElementById('subit');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');

form.addEventListener('click', (event) => {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const str = email.value;
  if (str === str.toLowerCase()) {
    if (regex.test(str)) {
      emailError.classList.remove('show-error');
    } else {
      event.preventDefault();
      emailError.classList.add('show-error');
      emailError.textContent = 'You entered an invalid email';
    }
  } else {
    event.preventDefault();
    emailError.classList.add('show-error');
    emailError.innerHTML = 'Email must be typed in lowercase';
  }
  setTimeout(() => {
    emailError.classList.remove('show-error');
  }, 2500);
});

// Store data in localStorage

const fullName = document.getElementById('name');
const message = document.getElementById('txt-area');
const reset = document.getElementById('reset');

function changeHandler() {
  const field = {
    name: fullName.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('user', JSON.stringify(field));
}
const user = JSON.parse(localStorage.getItem('user'));
email.value = user.email;
fullName.value = user.name;
message.value = user.message;

function resetFrom() {
  email.value = '';
  fullName.value = '';
  message.value = '';
  localStorage.removeItem('user');
}
fullName.addEventListener('onchange', changeHandler);
reset.addEventListener('click', resetFrom);
