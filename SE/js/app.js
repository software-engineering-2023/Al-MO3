const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const button = document.querySelector('.main__btn');
const button2= document.getElementById('GetStarted1');
// Add an event listener for the click event
button.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link

  // Code to execute when the button is clicked
  console.log('Button clicked!');
  window.location.href = 'login.html';
});
button2.addEventListener('click', function() {

  console.log('Button clicked!22');
  window.location.href = 'login.html';
});
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
