const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const brand_tittle = document.getElementsByClassName("brand-title")[0];
const input=document.querySelector('form');
const btn=document.getElementById('send');
const loader=document.getElementById('preloader');
window.addEventListener("load",function(){
  loader.style.display="none"
})




toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
brand_tittle.addEventListener("click", () => {
  document.location.href("index.html");
});
