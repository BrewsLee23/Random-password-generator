const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
 "%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",
 ">",".","?","/"];


let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");


function fillPasswords() {
  let numberOfChars = document.getElementById("input-box").value;
  if(numberOfChars === "") {
    passwordOneEl.textContent = generatePassword(8);
    passwordTwoEl.textContent = generatePassword(8);
  }
  else {
    passwordOneEl.textContent = generatePassword(numberOfChars);
    passwordTwoEl.textContent = generatePassword(numberOfChars);
  }
}


function clearPasswords() {
  passwordOneEl.textContent = "";
  passwordTwoEl.textContent = "";
  document.getElementById("input-box").value = "";
}

function generatePassword(numberOfChars) {
  let password ="";
  for(let i = 0; i < numberOfChars; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}