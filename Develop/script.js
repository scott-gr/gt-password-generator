// generate button references #generate id in html.index
// const generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", charOptions);
// function result will fill in #password id in html.index
const passwordResult = document.querySelector("#password");
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
    useUpper = confirm('Click "OK" to include UPPERCASE letters in your password.');
    useLower = confirm('Click "OK" to include lowercase letters in your password.');
    useNumber = confirm('Click "OK" to include numbers in your password.');
    useSpecial = confirm('Click "OK" to include special characters in your password.');
    if (useUpper !== true && useLower !== true && useNumber !== true && useSpecial !== true) {

      return
    } else {
      charGenerate(useUpper, useLower, useNumber, useSpecial)
    }
  }
}

function charGenerate() {
  var randomSet = '';
  var password = '';
  //Use results from charOptions to fill in array of options.
  if (upper === true); {
    randomSet += uppercaseLetters;
  }
  if (lower === true); {
    randomSet += lowercaseLetters;
  }
  if (number === true); {
    randomSet += numericCharacters;
  }
  if (special === true); {
    randomSet += specialCharacters;
  }
  if (randomSet = ''){
    alert('You must select at least 1 character type. Please try again.')
  }
    else {
    console.log(randomSet);
    }
  for (i = 0; i < passwordLength; i++) {
    password += randomSet[Math.floor(Math.random() * randomSet.length)];
  }
  return password
}

// return outcome;


// var randomNumber = Math.floor(Math.random() * 10); //randomNumber doesn't need to reference a variable, it's choosing an interger 0-9 right here.
// var randomUpper = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
// var randomLower = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
// var randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
//Chooses random character from variables above

//creates array of random character of each type

  //confirm variables work, and appear same in array

// //Chooses random character from variables above
// const randomNumber = Math.floor(Math.random() * 10); //randomNumber doesn't need to reference a variable, it's choosing an interger 0-9 right here.
// const randomUpper = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
// const randomLower = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
// const randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
// //creates array of random character of each type
// var randomArray = [randomUpper, randomLower, randomNumber, randomSpecial]
// //confirm variables work, and appear same in array
// console.log(randomUpper);
// console.log(randomLower);
// console.log(randomNumber);
// console.log(randomSpecial);
// console.log(randomArray)
// //randomly chooses one element from randomArray, with all options present
// var charChoice = randomArray[Math.floor(Math.random() * randomArray.length)];
// console.log(charChoice);





    // // // Write password to the #password input
    // function writePassword() {
    //   var password = generatePassword();
    //   var passwordText = document.querySelector("#password");

    //   passwordText.value = password;



    // Add event listener to generate button