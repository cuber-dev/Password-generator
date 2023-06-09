const rangeOutput = document.querySelector("#range-output");
const range = document.querySelector("#char-limit");
const generateBtn = document.querySelector("#generate-pass");
const passDisplay = document.querySelector("#pass-text");
const copyBtn = document.querySelector("#copy-btn");

let charLimit = range.value;
let characters = "ABCDEFGHIJKLMOPQRSTUVWXYZabscdefghijklmnopqrstuvwxyz123456789!@#$%&_-";

range.addEventListener("input", changeCharLimitDisplay);
generateBtn.addEventListener("click",generatePassword);
copyBtn.addEventListener("click",copyPassword);
passDisplay.addEventListener('click',copyPassword);

function changeCharLimitDisplay(){
    let limit = range.value;
    rangeOutput.innerText = "Characters : " + limit;
    charLimit = limit;
}

function generatePassword(){
    let password = "";
    for(let i=0; i < charLimit ; i++){
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    passDisplay.innerText = password;
}

function copyPassword(){
    navigator.clipboard.writeText(passDisplay.innerText);
    
    const copyDisplayMark = document.createElement("span");
    copyDisplayMark.innerHTML = "Copied to Clipboard!";
    copyDisplayMark.classList.add("copyDisplayMark");

    document.body.appendChild(copyDisplayMark);

    setTimeout(() => {
        copyDisplayMark.remove();
    },3000);
}

window.addEventListener("load",generatePassword)
