let currentIndex = 0;
const totalItems = document.querySelectorAll(".carousel-item").length;
const totalinnterItems = document.querySelectorAll(
  ".carousel-inner-item"
).length;

function showSlide(index) {
  const carouselInner = document.querySelector(".carousel-inner");
  if (index >= totalItems) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalItems - 1;
  } else {
    currentIndex = index;
  }
  
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
  const innerCarousel = document.querySelector(`.carousel-inner-item${index}`);
  innerCarousel.classList.toggle('active');
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}
// menu
const handleMenu = () => {
  const menuButton = document.querySelector(".sm-nav-bar-button");
  const closeButton = document.querySelector(".menu-bar .close-bar");
  const menubar = document.querySelector(".menu-bar .burger-bar");
  menuButton.classList.toggle("d-block");
  closeButton.classList.toggle("d-none");
  menubar.classList.toggle("d-none");
};
// get form data and validate
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
  const firstName = document.getElementById("first_name").value.trim();
  const lastName = document.getElementById("last_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("number").value.trim();
  let isValid = true;
  if (firstName === "") {
    alert('Pleace Fill The Form');
    isValid = false;
  } else if (lastName === "") {
    alert('Pleace Fill The Form');
    isValid = false;
  } else if (email === "") {
    alert('Pleace Fill The Form');
    isValid = false;
  } else if (number === "") {
    alert('Pleace Fill The Form');
    isValid = false;
  }
  if (isValid) {
    alert('Form submitted successfully!');
    document.getElementById('form').reset();
  }
});

  
