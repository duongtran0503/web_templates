const menuMulti = document.querySelector(".menu .menu__multi-list");
const buttonMenu = document.querySelector(".menu__button");

const clickButton = () => {
  menuMulti.classList.toggle("active");
};
buttonMenu.addEventListener("click", clickButton);
