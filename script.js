
//Establish possible characters options for letters and special characters
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacters = '~`!@#$%^&*-_+=<>?/;:[]{}\|';
const numericCharacters = '0123456789';
// Selects Generate Button in html and "listens" for click to begin function
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)

//Function to generate password string
function charGenerate() {
  //sets length of password
  passwordLength = prompt('Enter a number between 8 and 128 for your desired password length, then click "OK".');
  if (passwordLength < 8 || passwordLength > 128) {
    //if length is outide of limits, alerts user
    alert('Please enter a number between 8 and 128 and try again.');
    return
  }
  else {
    //confirming length record in console log
    console.log(passwordLength);
    // sets empty strings, to be populated by following 'if' statements
    var passwordString = '';
    let randomSet = '';
    //Asks user if they want uppercase letters in password, then adds uppercaseLetters to string of options.
    var upper = confirm('Click "OK" to include UPPERCASE letters in your password.');
    if (upper === true) {
      randomSet += uppercaseLetters;
      console.log("Use uppercase");
    }
    //Asks user if they want lowercase letters in password, then adds lowercaseLetters to string of options.
    var lower = confirm('Click "OK" to include lowercase letters in your password.');
    if (lower === true) {
      randomSet += lowercaseLetters;
      console.log("Use lowercase");
    }
    //Asks user if they want numbers in password, then adds numbers to string of options.
    var number = confirm('Click "OK" to include numbers in your password.');
    if (number === true) {
      randomSet += numericCharacters;
      console.log("Use numbers");
    }
    //Asks user if they want special characters in password, then adds special characters to string of options.
    var special = confirm('Click "OK" to include special characters in your password.');
    if (special === true) {
      randomSet += specialCharacters;
      console.log("Use special");
    }
    //checks that at least one type of character was created. Alerts user if not.
    if (upper !== true && lower !== true && number !== true && special !== true) {
      alert('Please select at least one character type.')
      return
    } else {
      console.log(randomSet);
    }
    // Loops random character from string built from options above, to the desired passwordLength
    for (i = 0; i < passwordLength; i++) {
      passwordString += randomSet[Math.floor(Math.random() * (randomSet.length))];
      console.log(passwordString);
    }
    return passwordString
  }
}
  // // Write password to the #password input box
function writePassword() {
  var password = charGenerate();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log('Password Generated');
}