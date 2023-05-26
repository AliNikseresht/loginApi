 window.addEventListener('load', () => {
     HandleData()
 })
 console.log(document.getElementById('username'));

 document.getElementById('username') == 

 function HandleData() {

     var dataEn = {
         lan: 'language:',
         formTitle: 'WELCOME',
         formSubtitle: 'We are glad to see you again!',
         usernameLabel: 'Username',
         passwordLabel: 'Password',
         usernamePlaceholder: 'Enter your username',
         passwordPlaceholder: 'Enter your password',
         errorN: "The username you entered is incorrect",
         errorP: "The entered password is not correct",
         submitButton: 'Login',
         rememberLabel: 'Remember me',
         forgotPasswordLink: 'Forgot password?',
         noAccountMessage: "Don't have an account?",
         singUP: 'sign up',
         copy: 'Copyright © 2023 All Rights Reserved.'

     }
     var dataFa = {
         lan: ':زبان',
         formTitle: 'خوش آمدید',
         formSubtitle: '! از اینکه دوباره شما را می بینیم خوشحالیم',
         usernameLabel: 'نام کاربری',
         passwordLabel: 'گذرواژه',
         usernamePlaceholder: 'نام کاربری خود را وارد کنید',
         passwordPlaceholder: 'گذرواژه خود را وارد کنید',
         errorN: "نام کاربری که وارد کردید نادرست است",
         errorP: "رمز وارد شده صحیح نیست",
         submitButton: 'ورود',
         rememberLabel: 'مرا بخاطر بسپار',
         forgotPasswordLink: 'گذرواژه خود را فراموش کردید؟',
         noAccountMessage: "حساب کاربری ندارید؟",
         singUP: 'ثبت نام',
         copy: 'کپی رایت © ۱۴۰۲ کلیه حقوق محفوظ است.'

     }
     var dataDe = {
         lan: 'Sprache:',
         formTitle: 'WILLKOMMEN',
         formSubtitle: 'Wir freuen uns, Sie wiederzusehen!',
         usernameLabel: 'Nutzername',
         passwordLabel: 'Passwort',
         usernamePlaceholder: 'Geben Sie Ihren Benutzernamen ein',
         passwordPlaceholder: 'Geben Sie Ihr Passwort ein',
         errorN: " Der eingegebene Benutzername ist nicht korrekt",
         errorP: " Das eingegebene Passwort ist nicht korrekt",
         submitButton: 'Anmeldung',
         rememberLabel: 'Mich erinnern',
         forgotPasswordLink: 'Passwort vergessen?',
         noAccountMessage: `Sie haben noch kein Konto?`,
         singUP: 'Anmeldung',
         copy: 'Urheberrecht © 2023 Alle Rechte vorbehalten.'
     }


     var languageSelect = document.getElementById("Language");
     var selectedLanguage = languageSelect.value;
     var maindata = selectedLanguage === 'English' && dataEn || selectedLanguage === 'Persian' && dataFa || selectedLanguage ===
         'Deutsch' && dataDe

     maindata === false ? maindata = dataDe : maindata


     const lan = document.getElementById('lan')
     const formTitle = document.getElementById("form-title-text");
     const formSubtitle = document.getElementById("form-subtitle");
     const usernameLabel = document.querySelector("label[for='username']");
     const passwordLabel = document.querySelector("label[for='password']");
     const usernamePlaceholder = document.getElementById("username");
     const passwordPlaceholder = document.getElementById("password");
     const submitButton = document.querySelector('input[type="submit"]');
     const errorN = document.getElementById('errorN')
     const errorP = document.getElementById('errorP')
     const signUp = document.getElementById('sign-up')
     const rememberLabel = document.querySelector("label[for='inp10']");
     const forgotPasswordLink = document.querySelector(".col-6.d-flex.align-items-center span");
     const noAccountMessage = document.querySelector(".col-10.mx-auto.acc h2");
     const copy = document.getElementById('footer-text')


     lan.innerText = maindata.lan
     errorP.innerText = maindata.errorP
     errorN.innerText = maindata.errorN
     signUp.innerText = maindata.singUP
     formTitle.innerText = maindata.formTitle;
     formSubtitle.innerText = maindata.formSubtitle;
     usernameLabel.innerText = maindata.usernameLabel;
     passwordLabel.innerText = maindata.passwordLabel;
     usernamePlaceholder.placeholder = maindata.usernamePlaceholder;
     passwordPlaceholder.placeholder = maindata.passwordPlaceholder;
     submitButton.value = maindata.submitButton;
     rememberLabel.innerText = maindata.rememberLabel;
     forgotPasswordLink.innerText = maindata.forgotPasswordLink;
     noAccountMessage.innerText = maindata.noAccountMessage;
     copy.innerText = maindata.copy;

 }
 // -----------3-language---End*************

 const form = document.getElementById('login-form')
 const username = document.getElementById('username')
 const password = document.getElementById('password')




 document.getElementById('set').addEventListener('click', function () {
     username.value = "kminchelle";
     password.value = "0lelplR";
 })

 form.addEventListener("submit", function (event) {
     event.preventDefault();

     fetch("https://dummyjson.com/auth/login", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                 username: username.value,
                 password: password.value,
             }),
         })
         .then((res) => res.json())
         .then((mydata) => {
             if (mydata.username === username.value) {
                alert('slm')
             } else {
                 alert('but')
             }
         });
 });

