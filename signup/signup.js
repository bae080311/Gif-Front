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
    emailError.innerHTML = "유효한 이메일 주소입니다.";
  } else {
    emailError.classList.remove("hidden");
    emailError.innerHTML = "유효하지 않은 이메일 주소입니다.";
  }
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
    passwordError.innerHTML = "유효한 비밀번호입니다.";
  } else {
    passwordError.classList.remove("hidden");
    passwordError.innerHTML =
      "비밀번호는 최소 8자 이상, 최소 하나의 숫자, 하나의 소문자, 하나의 특수 문자를 포함해야 합니다.";
  }
}

function checkConfirmPassword() {
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("repassword");
  var confirmPasswordError = document.getElementById("repasswordError");
  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    confirmPasswordError.classList.add("hidden");
    confirmPasswordError.innerHTML = "비밀번호가 일치합니다.";
  } else {
    confirmPasswordError.classList.remove("hidden");
    confirmPasswordError.innerHTML = "비밀번호가 일치하지 않습니다.";
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
