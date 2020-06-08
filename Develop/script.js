// generate button references #generate id in html.index
const generateBtn = document.querySelector("#generate");
//Establish possible characters options for letters and special characters
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacters = '~`!@#$%^&*-_+=<>?/;:[]{}\|';

//Establishes Array of character options, and removes options that the user declines.
function charOptions() {

    passwordLength = prompt('Enter a number between 8 and 128 for your desired password length, then click "OK".');
    if (passwordLength <8 || > 128) {
      alert('Please enter a number between 8 and 128 and try again.');
      charOptions();
    }

  //Chooses random character from variables above
  const randomNumber = Math.floor(Math.random() * 10); //randomNumber doesn't need to reference a variable, it's choosing an interger 0-9 right here.
  const randomUpper = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  const randomLower = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  const randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  //creates array of random character of each type
  var randomArray = [ randomLower, randomUpper, randomNumber, randomSpecial]
  //confirm variables work, and appear same in array
  console.log(randomLower);
  console.log(randomUpper);
  console.log(randomNumber);
  console.log(randomSpecial);
  console.log(randomArray)
  //randomly chooses one element from randomArray, with all options present
  var charChoice = randomArray[Math.floor(Math.random() * randomArray.length)];
  console.log(charChoice);


}

console.log(charOptions());




    // // // Write password to the #password input
    // function writePassword() {
    //   var password = generatePassword();
    //   var passwordText = document.querySelector("#password");

    //   passwordText.value = password;



    // Add event listener to generate button
    // generateBtn.addEventListener("click", writePassword
