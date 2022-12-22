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



function generatePassword() {
  var characters = "";
  var passwordLength = prompt("How long would you like your password? Between 8-128");
  var upperAsk = prompt("Include uppercase characters?");
  var lowerAsk = prompt("Include lowercase characters?");
  var numberAsk = prompt("Include numbers?");
  var specialAsk = prompt("Include special characters?");
  var password = "";
  if (upperAsk === "yes") { 
    characters += upper; 
  } 
  if (lowerAsk === "yes") { 
    characters += lower; 
  } 
  if (numberAsk === "yes") { 
    characters += number; 
  } 
  if (specialAsk === "yes") { 
    characters += special; 
  } 
  for ( index = 0; index <= passwordLength; index++) {
 var randomNumber = Math.floor(Math.random() * characters.length);
  password += characters.substring(randomNumber, randomNumber +1);
  }
}
