const myMiddle = document.getElementById("middle");

const myInput = document.getElementById("nameInput");
const myButton = document.getElementById("nameButton");
const purpleButton = document.getElementById('purpleButton');    
const skyButton = document.getElementById('skyButton');  
const blueButton = document.getElementById('blueButton');  

const pinkButton = document.getElementById('pinkButton');  

const darkModeButton = document.getElementById('darkModeButton');


console.log(myMiddle);
console.log(myInput);
console.log(myButton);
console.log(purpleButton);
console.log(skyButton);
console.log(blueButton);

console.log(pinkButton);


console.log(darkModeButton);


myButton.addEventListener('click', () => {
    const userInput = myInput.value;
    console.log(userInput);
    myMiddle.textContent = userInput;
});

purpleButton.addEventListener('click', () => { 
    document.getElementById('top').style.background = "purple";
});

skyButton.addEventListener('click', () => { 
    document.getElementById('top').style.background = "teal";
});

blueButton.addEventListener('click', () => { 
    document.getElementById('top').style.background = "blue";
});

pinkButton.addEventListener('click', () => { 
    document.getElementById('top').style.background = "pink";
});


darkModeButton.addEventListener('click', () => { 
    document.getElementById('top').style.background = "black";
});