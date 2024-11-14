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
  
  // count characters
  const numbercount = document.getElementById('numbercount');
  numbercount.innerHTML = passwordbox.value.replace(/[^0-9]/g, "").length;
  
  const uppercount = document.getElementById('Upperchasecount');
  uppercount.innerHTML = passwordbox.value.replace(/[^A-Z]/g, "").length;

  const lowercount = document.getElementById('Lowerchasecount');
  lowercount.innerHTML = passwordbox.value.replace(/[^a-z]/g, "").length;

  const symbolcount = document.getElementById('symbolcount');
  symbolcount.innerHTML = passwordbox.value.replace(/[/"!@#$%^&*()_+=:,.<>/?"]/g, "").length;

}

function copybutton() {
  password.select();
  password.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(password.value);
  alert("Copied the text: " + password.value);
}


