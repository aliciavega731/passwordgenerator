// Generating the password and assigned four variables for the function
// Assigning variables 'var' instead of 'const' or 'let' to mirror what we're learning in class
function generatePassword() {
  var upperCase = ('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
  var lowerCase = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  var number = ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
  var symbol = ('!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '<', '>', '?', '/');

  var password = '';
  
// Prompt for user with conditionals to maintaing the correct parameters
  var passwordPrompt = prompt('Type in the length of your desired password (8-128 characters).');
  
  if (passwordPrompt < 8) {
    alert('Remember that it must be a number between 8-128!');
    return '';
  };

  if (passwordPrompt > 128) {
    alert('Remember that it must be a number between 8-128!');
    return '';
  };

  passwordPrompt = parseInt(passwordPrompt);

// Set up confirm messages for password creation
  var confirmUppercase = confirm('Would you like to include UPPERCASE letters?');
  var confirmLowercase = confirm('Would you like to include lowercase letters?');
  var confirmNumber = confirm('Would you like to include numbers?');
  var confirmSymbol = confirm('Would you like to include symbols?');
// Make sure those comfirmations work

 var passwordOptions = [];

// More conditionals to make the generator more responsive
// .push adds new items to the end of an array -- returns new length
  if (confirmUppercase === true) {
    passwordOptions.push(upperCase);
  };

  if (confirmLowercase === true) {
    passwordOptions.push(lowerCase);
  };

  if (confirmNumber === true) {
    passwordOptions.push(number);
  }

  if (confirmSymbol === true) {
    passwordOptions.push(symbol);
  }

// An option has to be chosen -- need another conditional with a message
// Prompt only works for receiving information ... Need alert

  if (passwordOptions.length === 0) {
    alert('Pick at least ONE option!');
    return '';
  };
};

// Assignment code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);