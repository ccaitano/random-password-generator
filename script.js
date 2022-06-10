// Assignment code here

function generatePassword() {
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChar = ["~","!","@","#","$","%","^","&","*","+","?"];
  var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  //Prompt user for length of the password
  var passwordLength = prompt("Please choose a password length between 8 and 128 characters", "8");
  if (passwordLength<8 || passwordLength>129){
    alert("Please provide a value between 8 and 128");
    return;
  }
  //Validate length of password between 8-128 characters

  //User selects password length

  //Prompt user for password criteria

  //User selects criteria

  //Password generation

  //Validate password meets criteria

  //Password displayed to page


  return;
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
