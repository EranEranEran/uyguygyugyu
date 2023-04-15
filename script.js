function toggleMenu() {
  var menu = document.querySelector("nav");
  menu.classList.toggle("open");
}

document.querySelector(".menu-button").addEventListener("click", toggleMenu);