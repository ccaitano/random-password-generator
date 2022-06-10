// Assignment code here

function generatePassword() {
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChar = ["~","!","@","#","$","%","^","&","*","+","?"];
  var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var passwordArray = [];

  //Prompt user for length of the password
  var passwordLength = prompt("Please choose a password length between 8 and 128 characters", "8");
  
  //Validate length of password between 8-128 characters
  if (passwordLength<8 || passwordLength>129){
    alert("Please provide a value between 8 and 128");
    return;
  }
  //Prompt user for password criteria
  var incNumbers = confirm("Do you want to include numbers?");
  var incSpecChar = confirm("Do you want to include special characters?");
  var incUpper = confirm("Do you want to include uppercase characters?");
  var incLower = confirm("Do you want to include lowercase characters?");

  //Password generation
  
  for (var i = 0; i <= passwordLength; i++) {
    var charType = Math.floor(Math.random() * 4);
    console.log(i);
    if (charType === 0) {
      var randomChar = Math.floor(Math.random() * 10);
      passwordArray.push(numbers[randomChar]);
    } else if (charType === 1) {
      var randomChar = Math.floor(Math.random() * 11);
      passwordArray.push(specialChar[randomChar]);
    } else if (charType === 2) {
      var randomChar = Math.floor(Math.random() * 27);
      passwordArray.push(lowerChar[randomChar]);
    }
    else if (charType === 3) {
      var randomChar = Math.floor(Math.random() * 27);
      passwordArray.push(upperChar[randomChar]);
    }
  }
  console.log(passwordArray);
  passwordString = passwordArray.join("");
  console.log(passwordString);
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
