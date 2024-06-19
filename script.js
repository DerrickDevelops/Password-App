let button = document.getElementById('button');
let passwordOne = document.getElementById('password1');
let passwordTwo = document.getElementById('password2');
let clearBtn = document.getElementById('clear');

let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Clear input fields

function clearInputField() {
	passwordOne.value = '';
	passwordTwo.value = '';
}
// Adjust length of password

let fullLength = 0;

let lengthInput = document.getElementById('lengthinput');

let increaseBtn = document.getElementById('increase');

let decreaseBtn = document.getElementById('decrease');

function increase() {
	if(lengthInput.textContent === "20"){
		increaseBtn.disable = true;
	} else {
		fullLength += 1;
	lengthInput.textContent = fullLength;
	}
}
function decrease() {
if(lengthInput.textContent === "0"){
	decreaseBtn.disable = true;
} else {
   fullLength -= 1;
	lengthInput.textContent = fullLength; 
	}
}
// Generate random password for input 1 and input 2

function generatePass() {
	let numberValue = lengthInput.textContent;
	
	let displayPassword = characters.slice(0, numberValue);
	
	
	passwordOne.value = '';
	passwordTwo.value = '';
	
	if(lengthInput.textContent >= "1"){
	  for(let i = 0; i < displayPassword.length; i++){
		
		let inputOne = Math.floor(Math.random() * characters.length);
		let inputTwo = Math.floor(Math.random() * characters.length);

		passwordOne.value += characters[inputOne];
		passwordTwo.value += characters[inputTwo];

	}  
	} else {
		alert("Add a password length")
	}
};

// Copy buttons under input fields 

let copyOne = document.getElementById('copy1');
let copyTwo = document.getElementById('copy2');



// Function to allow user to copy password to clipboard for input 1

function copyToClipboardOne() {
	if(lengthInput.textContent >= "1") {
	passwordOne.select();
	
	passwordOne.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(passwordOne.value)

	alert("Password 1 copied")
} else {
	alert("Add a password length")
}
	
}

// Function to allow user to copy password to clipboard for input 2

function copyToClipboardTwo() {
	if(lengthInput.textContent >= "1") {
   passwordTwo.select;

	passwordTwo.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(passwordTwo.value);

	alert("Password 2 copied"); 
} else {
	alert("Add a password length");
}

} 

/*

Unused functions, Keeping incase needed for later use.

*/



	// passwordOne.setFocusable(false);	
	// passwordOne.setFocusableInTouchMode(false);


//  document.getElementById('password1').addEventListener("mousedown", function(e){
//	 e.preventDefault();
// });
// document.getElementById('password2').addEventListener("mousedown", function(e){
//	 e.preventDefault();
// });


// function myFunction() {
//   // Get the text field
//   var copyText = document.getElementById("myInput");

//   // Select the text field
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); // For mobile devices

//	// Copy the text inside the text field
//   navigator.clipboard.writeText(copyText.value);

//   // Alert the copied text
//   alert("Copied the text: " + copyText.value);
// }




// function myFunction() {
//	 var copyText = document.getElementById("myInput");
//	 copyText.select();
//	 copyText.setSelectionRange(0, 99999);
//	 navigator.clipboard
//	   .writeText(copyText.value)
//	   .then(() => {
//		 alert("successfully copied");
//	   })
//	   .catch(() => {
//		 alert("something went wrong");
//	   });
// }


