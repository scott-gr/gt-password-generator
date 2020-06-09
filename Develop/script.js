// generate button references #generate id in html.index
// const generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", charOptions);
// function result will fill in #password id in html.index
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
  var randomSet = '';
  var passwordString = '';
  //Use results from charOptions to fill in array of options.
  if (confirm('Click "OK" to include UPPERCASE letters in your password.')) {
    randomSet += uppercaseLetters;
    console.log("Use uppercase");
  }
  if (confirm('Click "OK" to include lowercase letters in your password.')) {
    randomSet += lowercaseLetters;
    console.log("Use lowercase");
  }
  if (confirm('Click "OK" to include numbers in your password.')) {
    randomSet += numericCharacters;
    console.log("Use numbers");
  }
  if (confirm('Click "OK" to include special characters in your password.')) {
    randomSet += specialCharacters;
    console.log("Use special");
  }
  if (randomSet = '') {
    alert('You must select at least 1 character type. Please try again.')
  }
  else {
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
  charGenerate();
  // var passwordOutput = document.querySelector('#password');

  if (password != null) {
    passwordOutput.value = charGenerate();
    console.log('Password Generated')
  }
}
