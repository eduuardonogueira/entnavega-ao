const menuButton = document.getElementById("menuButton");
const menuLinks = document.getElementById("menuLinks");
const closeScreen = document.getElementById("closeScreen");
const closeMenu = document.getElementById("closeMenu");

menuButton.addEventListener("click", () => {
  menuLinks.classList.toggle("is-open");
  closeScreen.classList.toggle("is-open");
});

const menuLinkArray = document.querySelectorAll(".menu-links__link a");
const closeMenuItems = [...menuLinkArray, closeMenu, closeScreen];

closeMenuItems.forEach((link) => {
  link.addEventListener("click", () => {
    menuLinks.classList.remove("is-open");
    closeScreen.classList.remove("is-open");
  });
});
