const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#bu");

function changeBtnColor() {
  if (emailInput.value && passwordInput.value) {
    submitButton.style.backgroundColor = "#615EFC";
  } else {
    submitButton.style.backgroundColor = "";
  }
}
