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
  heading1: 'Multi Post Stories',
  title2: 'Keeping track of hundreds  of components website',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  imageSrc: './images/SnapshootPortfolio.png',
  button1: 'See Live  <img src="./images/icon.png">',
  button2: 'See Source <img src="./images/vector.png">',
  li: 'html',
  li2: 'Bootstrap',
  li3: 'Ruby on rails',
};

const div1 = document.createElement('div');
div1.className = 'modal';
document.body.appendChild(div1);

const div = document.createElement('div');
div.className = 'modal-header';
div1.appendChild(div);

const div2 = document.createElement('div');
div2.className = 'title';
div.appendChild(div2);

const h2 = document.createElement('h1');
h2.className = 'modal-headm';
h2.textContent = modalInformation.heading1;
div2.appendChild(h2);

const h20 = document.createElement('div');
h20.className = 'modal-header22';
div2.appendChild(h20);

const h22 = document.createElement('h1');
h22.className = 'modal-headd';
h22.textContent = modalInformation.title2;
h20.appendChild(h22);

const span = document.createElement('button');
span.className = 'close-button';
span.innerHTML = '&times;';
div.appendChild(span);

const div3 = document.createElement('div');
div3.className = 'modal-tags';
div1.appendChild(div3);

const ul = document.createElement('ul');
ul.className = 'modal-social';
div3.appendChild(ul);

const li = document.createElement('li');
li.className = 'tags1';
li.innerHTML = modalInformation.li;
ul.appendChild(li);

const li2 = document.createElement('li');
li2.className = 'tags2';
li2.innerHTML = modalInformation.li2;
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.className = 'tags3';
li3.innerHTML = modalInformation.li3;
ul.appendChild(li3);

const div4 = document.createElement('div');
div4.className = 'modal-pic';
div1.appendChild(div4);

const div12 = document.createElement('div');
div12.className = 'modal-body';
div4.appendChild(div12);

const p = document.createElement('p');
p.className = 'modal-mobile';
p.textContent = modalInformation.description2;
div12.appendChild(p);

const p2 = document.createElement('p');
p2.className = 'modal-desktop';
p2.textContent = modalInformation.description;
div12.appendChild(p2);

const div13 = document.createElement('div');
div13.className = 'modal-button';
div1.appendChild(div13);

const button = document.createElement('button');
button.className = 'live-button';
button.innerHTML = modalInformation.button1;
div13.appendChild(button);

const button2 = document.createElement('button');
button2.className = 'source-button';
button2.innerHTML = modalInformation.button2;
div13.appendChild(button2);

const parentModal = document.querySelector('.modal');
const openModalButtons = document.querySelector('.btn');
const closeModalButtons = document.querySelector('.close-button');
const overlay = document.querySelector('#main');
const openModalButtons2 = document.querySelector('.btn1');
const openModalButtons3 = document.querySelector('.btn2');
const openModalButtons4 = document.querySelector('.btn3');
const openModalButtons5 = document.querySelector('.btn4');
const openModalButtons6 = document.querySelector('.btn5');
const openModalButtons7 = document.querySelector('.btn6');

function appear() {
  parentModal.style.display = 'block';
  overlay.style.filter = 'blur(10px)';
}

openModalButtons.addEventListener('click', appear);

function disappear() {
  parentModal.style.display = 'none';
  overlay.style.filter = 'blur(0px)';
}

closeModalButtons.addEventListener('click', disappear);

function dissappearParent(e) {
  if (e.target.className === '.modal') {
    parentModal.style.display = 'none';
    overlay.style.filter = 'blur(0px)';
  }
}
parentModal.addEventListener('click', dissappearParent);

function appearr() {
  parentModal.style.display = 'block';
  overlay.style.filter = 'blur(10px)';
}

function appearrr() {
  parentModal.style.display = 'block';
  overlay.style.filter = 'blur(10px)';
}

function appearrrr() {
  parentModal.style.display = 'block';
  overlay.style.filter = 'blur(10px)';
}

function appearrrrr() {
  parentModal.style.display = 'block';
  overlay.style.filter = 'blur(10px)';
}

function appearrrrrr() {
  parentModal.style.display = 'block';
  overlay.style.filter = 'blur(10px)';
}

function appearrrrrrr() {
  parentModal.style.display = 'block';
  overlay.style.filter = 'blur(10px)';
}

openModalButtons7.addEventListener('click', appearrrrrrr);
openModalButtons5.addEventListener('click', appearrrrr);
openModalButtons6.addEventListener('click', appearrrrrr);
openModalButtons4.addEventListener('click', appearrrr);
openModalButtons3.addEventListener('click', appearrr);
openModalButtons2.addEventListener('click', appearr);

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
