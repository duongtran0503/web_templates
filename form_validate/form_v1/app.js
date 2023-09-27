const inputElement = document.querySelectorAll(".input-box input");
const inputBox = document.querySelectorAll(".input-box");
const listInput = [...inputElement];
const listInputBox = [...inputBox];
const options = {
  listInput,
  listInputBox,
};
console.log(listInput);
const Validator = (options) => {
  options.listInput.forEach((element, index) => {
    let errorMessage = options.listInputBox[index].lastElementChild;
    console.log(element.id);
    element.onblur = () => {
      if (element.value.trim() === "") {
        errorMessage.classList.add("active");
        errorMessage.innerText = "invalid!";
        return;
      } else if (element.id === "password") {
        console.log(element.value.trim().length <= 5);
        if (element.value.trim().length <= 5) {
          errorMessage.classList.add("active");
          errorMessage.innerText = "Passenger's face";
        }
        return;
      } else if (element.id === "confirm-password") {
        if (!(element.value === listInput[4].value)) {
          errorMessage.classList.add("active");
          errorMessage.innerText = "password not confirm";
        }
        return;
      } else if (element.id === "Email") {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log(regex.test(element.value));
        if (!regex.test(element.value)) {
          errorMessage.classList.add("active");
          errorMessage.innerText = "this not email";
        }
        return;
      } else if (element.id === "phone-number") {
        if (isNaN(element.value)) {
          errorMessage.classList.add("active");
          errorMessage.innerText = "this not number,please enter a numbers";
        }
        return;
      }
    };
    element.oninput = () => {
      if (errorMessage.classList.contains("active")) {
        errorMessage.classList.remove("active");
        errorMessage.innerText = "";
      }
    };
  });
};
Validator(options);
