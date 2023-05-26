function changeLanguage() {
  var languageSelect = document.getElementById("Language");
  var selectedLanguage = languageSelect.value;
  var formTitle = document.getElementById("form-title-text");
  var formSubtitle = document.getElementById("form-subtitle");
  var errorN = document.getElementById('errorN')
  var errorP = document.getElementById('errorP')
  var usernameLabel = document.querySelector("label[for='username']");
  var passwordLabel = document.querySelector("label[for='password']");
  var usernamePlaceholder;
  var passwordPlaceholder;
  var submitButton = document.querySelector("input[type='submit']");
  var rememberLabel = document.querySelector("label[for='inp10']");
  var forgotPasswordLink = document.querySelector(".col-6.d-flex.align-items-center a");
  var noAccountMessage = document.querySelector(".col-10.mx-auto.acc h2");

  if (selectedLanguage === "English") {
    formTitle.textContent = "WELCOME";
    formSubtitle.textContent = "We are glad to see you again!";
    usernameLabel.textContent = "Username";
    errorN.textContent = "The username you entered is incorrect"
    errorP.textContent = "The entered password is not correct"
    passwordLabel.textContent = "Password";
    usernamePlaceholder = "Enter your username";
    passwordPlaceholder = "Enter your password";
    submitButton.value = "Login";
    rememberLabel.textContent = "Remember me";
    forgotPasswordLink.textContent = "Forgot password?";
    noAccountMessage.innerHTML = "Don't have an account? <a href='#'>Sign up</a>";
  } else if (selectedLanguage === "Deutsch") {
    formTitle.textContent = "WILLKOMMEN";
    formSubtitle.textContent = "Wir freuen uns, Sie wiederzusehen!";
    usernameLabel.textContent = "Nutzername";
    errorN.textContent = " Der eingegebene Benutzername ist nicht korrekt"
    errorP.textContent = " Das eingegebene Passwort ist nicht korrekt"
    passwordLabel.textContent = "Passwort";
    usernamePlaceholder = "Geben Sie Ihren Benutzernamen ein";
    passwordPlaceholder = "Geben Sie Ihr Passwort ein";
    submitButton.value = "Anmeldung";
    rememberLabel.textContent = "Mich erinnern";
    forgotPasswordLink.textContent = "Passwort vergessen?";
    noAccountMessage.innerHTML = "Sie haben noch kein Konto? <a href='#'>Anmeldung</a>";
  } else if (selectedLanguage === "Persian") {
    formTitle.textContent = "خوش آمدید";
    formSubtitle.textContent = "!خوشحالیم که شما را دوباره می‌بینیم";
    usernameLabel.textContent = "نام کاربری";
    errorN.textContent = "نام کاربری که وارد کردید نادرست است"
    errorP.textContent = "رمز وارد شده صحیح نیست"
    passwordLabel.textContent = "گذرواژه";
    usernamePlaceholder = "نام کاربری خود را وارد کنید";
    passwordPlaceholder = "گذرواژه خود را وارد کنید";
    submitButton.value = "ورود";
    rememberLabel.textContent = "مرا به خاطر بسپار";
    forgotPasswordLink.textContent = "فراموشی گذرواژه؟";
    noAccountMessage.innerHTML = "حساب کاربری ندارید؟ <a href='#'>ثبت نام</a>";
    formTitle.style.textAlign = "center";
    formSubtitle.style.textAlign = "center";
    usernameLabel.style.textAlign = "right";
    passwordLabel.style.textAlign = "right";
    submitButton.style.float = "right";
    rememberLabel.style.marginRight = "auto";
    noAccountMessage.style.textAlign = "center";
  }

  document.getElementById("username").placeholder = usernamePlaceholder;
  document.getElementById("password").placeholder = passwordPlaceholder;
}

// const form = document.getElementById('login-form')
// const username = document.getElementById('username')
// const password = document.getElementById('password')

// form.addEventListener('submit', function (e) {
//   e.preventDefault()

//   const urlhead = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({

//       username: _user.value,
//       password: _pas.value,
//     })
//   }

//   fetch('https://dummyjson.com/auth/login', urlhead)
//     .then(res => res.json())
//     .then(mydata => {

//     })
// })

