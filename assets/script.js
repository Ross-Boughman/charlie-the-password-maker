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
  // adds user selections to characters
  var characters = "";
  var passwordLength = prompt("How long would you like your password? Between 8-128");
  var upperAsk = confirm("Include uppercase characters?");
  var lowerAsk = confirm("Include lowercase characters?");
  var numberAsk = confirm("Include numbers?");
  var specialAsk = confirm("Include special characters?");
  // creates blank password variable
  var password = "";
  // assigns uppercase letters to characters variable
  if (upperAsk === true) { 
    characters += upper; 
  } 
  // assigns lowercase letters to characters variable
  if (lowerAsk === true) { 
    characters += lower; 
  } 
  // assigns numbers to characters variable
  if (numberAsk === true) { 
    characters += number; 
  } 
  // assigns special characters to characters variable
  if (specialAsk === true) { 
    characters += special; 
  } 
  // generates random password based on modified characters variable
  for (let index = 1; index <= passwordLength; index++) {
  var randomNumber = Math.floor(Math.random() * characters.length);
  password += characters.substring(randomNumber, randomNumber +1);
  }
  // returns generated password to be posted to text box
  return password
}
