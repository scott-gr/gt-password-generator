// Assignment Code
const generateBtn = document.querySelector("#generate");
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacters = '~`!@#$%^&*-_+=<>?/;:[]{}\|';

//number generator
function getCharacter() {
  var randomNumber = Math.floor(Math.random() * 10);
  var randomUpper = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  var randomLower = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  var randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  console.log(randomLower);
  console.log(randomUpper);
  console.log(randomNumber);
  console.log(randomSpecial);
}

console.log(getCharacter());



    // // // Write password to the #password input
    // function writePassword() {
    //   var password = generatePassword();
    //   var passwordText = document.querySelector("#password");

    //   passwordText.value = password;

    

    // // Add event listener to generate button
    // generateBtn.addEventListener("click", writePassword
