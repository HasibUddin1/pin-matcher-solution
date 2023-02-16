
function getPin(){
    const pin = pinGenerator();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function pinGenerator(){
    const randomPin = Math.round(Math.random()*10000);
    return randomPin;
}

document.getElementById('generate-btn').addEventListener('click', function(){
    const pin = getPin();

    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const element = event.target.innerText;
    const typedNumbersElement = document.getElementById('typed-numbers');
    const previousTypedNumbers = typedNumbersElement.value;
    if(isNaN(element)){
        if(element === 'C'){
            typedNumbersElement.value = '';
        }
        else if(element === '<'){
            const split = previousTypedNumbers.split('');
            split.pop();
            const splitResult = split.join('');
            typedNumbersElement.value = splitResult;
        }
    }
    else{
        const typedNumbers = previousTypedNumbers + element;
        typedNumbersElement.value = typedNumbers;
    }
})

document.getElementById('verify-btn').addEventListener('click', function(){
    const displayPinElement = document.getElementById('display-pin');
    const displayPin = displayPinElement.value;

    const typedNumbersElement = document.getElementById('typed-numbers');
    const typedNumbers = typedNumbersElement.value;

    const verifySuccessElement = document.getElementById('verify-success');
    const verifyFailureElement = document.getElementById('verify-failure');
    if(displayPin === typedNumbers){
        verifySuccessElement.style.display = 'block';
        verifyFailureElement.style.display = 'none';
    }
    else{
        verifyFailureElement.style.display = 'block';
        verifySuccessElement.style.display = 'none';
    }
})