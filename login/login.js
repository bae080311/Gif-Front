const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#bu");
const URL = "";

function changeBtnColor() {
  if (emailInput.value && passwordInput.value) {
    submitButton.style.backgroundColor = "#615EFC";
  } else {
    submitButton.style.backgroundColor = "";
  }
}

function submitForm() {
  fetch(URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "userid or email": emailInput.value,
      password: passwordInput.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      const serverSession = data.serversession;
      const personalSession = data.personalsession;
      const userId = data.id;

      sessionStorage.setItem("serverSession", serverSession);
      sessionStorage.setItem("personalSession", personalSession);
      sessionStorage.setItem("userId", userId);
    })
    .catch((error) => {
      console.error(error);
    });
}
