const inputElement = document.getElementById('result');

function inputButton(input){
    if (inputElement.value !== "Error!"){
        inputElement.value += input;
    }
    else{
        inputElement.value = input;
    }
    
}

function clearInput(){
    inputElement.value = '';
}

function calculate(){
    try{
        let resultEl = eval(inputElement.value);
        inputElement.value = resultEl;
    }
    catch(error){
        inputElement.value = "Error!";
    }
}
    