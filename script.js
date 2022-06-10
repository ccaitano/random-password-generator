// Assignment code here

function generatePassword() {
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChar = ["~","!","@","#","$","%","^","&","*","+","?"];
  var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var charTypeArray = [];
  var incChar = [];
  var passwordArray = [];
  var countType = 0;

  //Prompt user for length of the password with default value of 8
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
  //Get required characters from user input
  if (incNumbers) {
    countType++;
    charTypeArray.push(numbers);
  }
  if (incSpecChar) {
    countType++;
    charTypeArray.push(specialChar);
  }
  if (incUpper) {
    countType++;
    charTypeArray.push(upperChar);
  }
  if (incLower) {
    countType++
    charTypeArray.push(lowerChar);
  }
  console.log(countType);
  
  for (var inc = 0; inc < countType; inc++){
    incChar[inc] = true;
  }

  for (var i = 0; i < passwordLength; i++) {
    //Determines type of random character based on user input
    var charType = Math.floor(Math.random() * (countType));
    console.log(charType);
    if ((incChar[charType] == true) || (passwordLength > countType)){
    //Determines random character from specified type array
    console.log(countType);
    randomChar = Math.floor(Math.random() * (charTypeArray[charType].length-1));
    //Builds password character by character
    passwordArray.push(charTypeArray[charType][randomChar]);
    incChar[charType] = false;
    console.log(incChar);
    } else {
      i--;
      console.log(error);
    }
    }


  passwordString = passwordArray.join("");
  console.log(passwordString)

  //Validate password meets criteria
  if (!passwordArray.includes()){
    alert("Please provide a value between 8 and 128");
    return;
  }

  //Password displayed to page
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
