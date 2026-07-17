const generateEl = document.querySelector(".generateButton")
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".copyIcon")
const alertContainerEl = document.querySelector(".alert-container");
const inputLenghtEl = document.getElementById("char-limit");
const charCountEl = document.getElementById("char-count")
let passwordLenght = 14;

generateEl.addEventListener("click", ()=>{
  createPassword()
})

copyIconEl.addEventListener("click", ()=>{
  if(inputEl.value){
    copyPassword();
    alertContainerEl.classList.remove("active");
    setTimeout(()=>{
      alertContainerEl.classList.add("active")
    }, 2000)
  }
  
})

inputLenghtEl.addEventListener("input", (event)=>{
  const activeCharCount = event.target.value;
  charCountEl.textContent = activeCharCount;
  passwordLenght = activeCharCount;
})

function createPassword(){
  const chars = "0123456789qwertyuiopasdfghjklzxcvbmQWERTYUIOPASDFGHJKLZXCVBNM!._?"
  let password = "";
  for (let index = 0; index < passwordLenght; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
  alertContainerEl.innerText = password + " Copied!";
}

function copyPassword(){
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value)
}