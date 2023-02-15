
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