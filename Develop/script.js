// Declare variables
const generateBtn = document.querySelector("#generate");
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacters = '~`!@#$%^&*-_+=<>?/;:[]{}\|';

//Creates a random character of each type
function charOptions() {
  const randomNumber = Math.floor(Math.random() * 10);
  const randomUpper = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  const randomLower = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  const randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  /// Logged to confirm mathrandom results
  // console.log(randomLower);
  // console.log(randomUpper);
  // console.log(randomNumber);
  // console.log(randomSpecial);

//Array of results
  const randomArray = [ randomLower, randomUpper, randomNumber, randomSpecial]

  console.log(randomArray)
}

console.log(charOptions());



    // // // Write password to the #password input
    // function writePassword() {
    //   var password = generatePassword();
    //   var passwordText = document.querySelector("#password");

    //   passwordText.value = password;

    

    // // Add event listener to generate button
    // generateBtn.addEventListener("click", writePassword
