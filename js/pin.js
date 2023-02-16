
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