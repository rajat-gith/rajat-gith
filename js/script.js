const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const brand_tittle = document.getElementsByClassName("brand-title")[0];
const input=document.querySelector('form')
const btn=document.getElementById('send')

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
brand_tittle.addEventListener("click", () => {
  document.location.href("index.html");
});