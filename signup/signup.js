const URL = "https://a0202de4-b52b-4691-b904-0fd3bd21e6ee.mock.pstmn";

function emailCheck(email) {
  var email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return email_regex.test(email);
}

function checkEmail() {
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("emailError");
  var email = emailInput.value;

  if (emailCheck(email)) {
    emailError.classList.add("hidden");
    document.getElementById("email").style.borderColor = "#615EFC";
    document.getElementById("emailError").style.color = "#615EFC";
  } else {
    emailError.classList.remove("hidden");
    document.getElementById("email").style.borderColor = "#df454a";
    document.getElementById("emailError").style.color = "#df454a";
  }
  updateButtonColor(); // 버튼 색상 업데이트 호출
}

function passwordCheck(password) {
  var password_regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/;
  return password_regex.test(password);
}

function checkPassword() {
  var passwordInput = document.getElementById("password");
  var passwordError = document.getElementById("passwordError");
  var password = passwordInput.value;

  if (passwordCheck(password)) {
    passwordError.classList.add("hidden");
    document.getElementById("password").style.borderColor = "#615EFC";
    passwordError.innerHTML = "유효한 비밀번호입니다.";
  } else {
    passwordError.classList.remove("hidden");
    document.getElementById("password").style.borderColor = "#df454a";
    passwordError.innerHTML =
      "영문, 숫자, 특수문자를 포함하여 8글자 이상으로 적어주세요";
  }
  updateButtonColor(); // 버튼 색상 업데이트 호출
}

function checkConfirmPassword() {
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("repassword");
  var confirmPasswordError = document.getElementById("repasswordError");
  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    confirmPasswordError.classList.add("hidden");
    document.getElementById("repassword").style.borderColor = "#615EFC";
    confirmPasswordError.innerHTML = "비밀번호가 일치합니다.";
  } else {
    confirmPasswordError.classList.remove("hidden");
    document.getElementById("repassword").style.borderColor = "#df454a";
    confirmPasswordError.innerHTML = "비밀번호가 일치하지 않습니다.";
  }
  updateButtonColor(); // 버튼 색상 업데이트 호출
}

function updateButtonColor() {
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var confirmPasswordError = document.getElementById("repasswordError");
  var button = document.getElementById("bu");

  if (
    emailError.classList.contains("hidden") &&
    passwordError.classList.contains("hidden") &&
    confirmPasswordError.classList.contains("hidden")
  ) {
    button.style.backgroundColor = "#615EFC";
  } else {
    button.style.backgroundColor = ""; // 기본 배경색으로 되돌리기
  }
}

function validateForm() {
  checkEmail();
  checkPassword();
  checkConfirmPassword();

  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var confirmPasswordError = document.getElementById("repasswordError");

  if (
    !emailError.classList.contains("hidden") ||
    !passwordError.classList.contains("hidden") ||
    !confirmPasswordError.classList.contains("hidden")
  ) {
    return false;
  }
  return true;
}

document.getElementById("bu").addEventListener("click", function () {
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      useremail: document.getElementById("email").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((response) => {
      return response.text();
    })
    .then(() => {
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("오류:", error);
    });
});
