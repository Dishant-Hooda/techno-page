const nav = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) { // You can adjust the scroll threshold here
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-250px";
}
// Wait for the window to fully load
window.onload = function () {
  // Hide the preloader
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';

  // Show the main content
  const content = document.getElementById('content');
  content.style.display = 'block';
};