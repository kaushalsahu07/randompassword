let passwordbox = document.getElementById("password");
let number = "1234567890";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let symbol = "!@#$%^&*()_+=:,.<>/?";

let allchar = number + upperCase + lowerCase + symbol;

function passwordgen() {
  let password = "";

  let i = 12;
  while (i >= password.length) {
    password += allchar.charAt(Math.floor(Math.random() * allchar.length));
  }

  passwordbox.value = password;
}

function copybutton() {
  password.select();
  password.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(password.value);
  alert("Copied the text: " + password.value);
}
