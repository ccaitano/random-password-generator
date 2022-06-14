// Assignment code here

function generatePassword() {
  //Declare Variables
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChar = ["~","!","@","#","$","%","^","&","*","+","?","(",")","-",".","/",":",";","<",">","=","[","]","{","}","`","_","|"];
  var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var charTypeArray = [];
  var incChar = [];
  var passwordArray = [];
  var countType = 0;

  //Prompt user for length of the password with default value of 8
  var passwordLength = prompt("Please choose a password length between 8 and 128 characters", "8");
  
  //Validate length of password between 8-128 characters
  if (passwordLength<8 || passwordLength>128){
    alert("Please provide a value between 8 and 128");
    return;
  }

  //Prompt user for password criteria
  var incNumbers = confirm("Select 'OK' to include numerical characters?");
  var incSpecChar = confirm("Select 'OK' to include special characters?");
  var incUpper = confirm("Select 'OK' to include uppercase characters?");
  var incLower = confirm("Select 'OK' to include lowercase characters?");

  //Password generation
  //Get required characters from user input
  if (incNumbers) {
    countType++;
    charTypeArray = charTypeArray.concat(numbers);
  }
  if (incSpecChar) {
    countType++;
    charTypeArray = charTypeArray.concat(specialChar);
  }
  if (incUpper) {
    countType++;
    charTypeArray = charTypeArray.concat(upperChar);
  }
  if (incLower) {
    countType++
    charTypeArray = charTypeArray.concat(lowerChar);
  }

  for (var i = 0; i < passwordLength; i++) {
    //Determines type of random character based on user input
    var charType = Math.floor(Math.random() * countType);
    //Determines random character from specified type array
    randomChar = Math.floor(Math.random() * (charTypeArray.length-1));
    //Builds password character by character
    passwordArray = passwordArray.concat(charTypeArray[randomChar]);
  }

  //Changes password from array format to string format
  passwordString = passwordArray.join("");

  // Validate password meets criteria
  if (countType == 0) {
    alert("Must select at least one character type!");
    return;
  }
  if (incNumbers && !passwordArray.some(item => numbers.includes(item))){
    alert("Your password does not contain a number!");
    return;
  }
  if (incSpecChar && !passwordArray.some(item => specialChar.includes(item))){
    alert("Your password does not contain a special character!");
    return;
  }
  if (incLower && !passwordArray.some(item => lowerChar.includes(item))){
    alert("Your password does not contain a lowercase character!");
    return;
  }
  if (incUpper && !passwordArray.some(item => upperChar.includes(item))){
    alert("Your password does not contain a uppercase character!");
    return;
  }

  return passwordString;
}

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
