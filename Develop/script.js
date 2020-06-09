
const passwordOutput = document.querySelector("#password");
//Establish possible characters options for letters and special characters
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacters = '~`!@#$%^&*-_+=<>?/;:[]{}\|';
const numericCharacters = '0123456789';

//Establishes Array of character options, and removes options that the user declines.
document.getElementById('generate').onclick = function charOptions() {
  passwordLength = prompt('Enter a number between 8 and 128 for your desired password length, then click "OK".');
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a number between 8 and 128 and try again.');
    return
  }
  else {
    console.log(passwordLength);
    charGenerate()
  }
}

function charGenerate() {
  var passwordString = '';
  let randomSet = '';
  //Use results from charOptions to fill in array of options.
  var upper = confirm('Click "OK" to include UPPERCASE letters in your password.');
  if (upper === true) {
    randomSet += uppercaseLetters;
    console.log("Use uppercase");
  }
  var lower = confirm('Click "OK" to include lowercase letters in your password.');
  if (lower === true) {
    randomSet += lowercaseLetters;
    console.log("Use lowercase");
  }
  var number = confirm('Click "OK" to include numbers in your password.');
  if (number === true) {
    randomSet += numericCharacters;
    console.log("Use numbers");
  }
  var special = confirm('Click "OK" to include special characters in your password.');
  if (special === true) {
    randomSet += specialCharacters;
    console.log("Use special");
  }
  if (upper !== true && lower !== true && number !== true && special !== true) {
    alert('Please select at least one character type.')
    return
  } else {
    console.log(randomSet);
  }

  for (i = 0; i < passwordLength; i++) {
    passwordString += randomSet[Math.floor(Math.random() * (randomSet.length))];
    console.log(passwordString);
  }
  return passwordString
}

// // Write password to the #password input
function writePassword() {
  passwordOutput.value = charGenerate();
  console.log('Password Generated')
}