const navigation = document.querySelector(".navigation");
const toggle = document.querySelector(".toggle");
toggle.onclick = function () {
  this.classList.toggle("active");
  navigation.classList.toggle("active");
};
