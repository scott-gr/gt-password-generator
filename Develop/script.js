// Assignment Code
var generateBtn = document.querySelector("#generate");

var randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
