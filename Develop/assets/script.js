// Assignment code here
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lower = "abcdefghijklmnopqrstuvwxyz"; 
var number = "0123456789"; 
var special = "!@#$%^&*()";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// creates random password and posts it for user to view
function generatePassword() {
  var characters = "";
  var passwordLength = prompt("How long would you like your password? Between 8-128");
  var upperAsk = confirm("Include uppercase characters?");
  var lowerAsk = confirm("Include lowercase characters?");
  var numberAsk = confirm("Include numbers?");
  var specialAsk = confirm("Include special characters?");
  var password = "";
  if (upperAsk === true) { 
    characters += upper; 
  } 
  if (lowerAsk === true) { 
    characters += lower; 
  } 
  if (numberAsk === true) { 
    characters += number; 
  } 
  if (specialAsk === true) { 
    characters += special; 
  } 
  for (let index = 0; index <= passwordLength; index++) {
  var randomNumber = Math.floor(Math.random() * characters.length);
  password += characters.substring(randomNumber, randomNumber +1);
  }
  return password
}
