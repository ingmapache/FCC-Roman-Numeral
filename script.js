const convertBtn = document.getElementById('convert-btn');
const number = document.getElementById('number');
const outputDiv = document.getElementById('output');
const form = document.getElementById('form');



const errorText = () => {
    outputDiv.innerHTML = '<p></p>';
};

const inputIsValid = (inputNumber) => {
    if (isNaN(inputNumber)) {
        outputDiv.classList.add('error');
        outputDiv.innerHTML = '<p style= "width: 450px; text-align: center;">Please enter a valid number</p>';
    } else if (inputNumber <1) {
        outputDiv.classList.add('error');
        outputDiv.innerHTML = '<p style= "width: 450px; text-align: center;">Please enter a number greater than or equal to 1</p>';
    } else if (inputNumber >= 3999) {
        outputDiv.classList.add('error');
        outputDiv.innerHTML = '<p style= "width: 450px; text-align: center;">Please enter a number less than or equal to 3999</p>';
    } else {
        return true;
    }
    return false;
};

const clearStuff = () => {
    const inputNumber = parseInt(number.value, 10);
    

    outputDiv.innerHTML = "";

    if (inputIsValid(inputNumber)){
        console.log('is valid');
    } else {
        console.log('not valid');
    };
}   

const buttonClicked = () => {
    clearStuff();
}


form.addEventListener('submit', e => { e.preventDefault(); clearStuff();});
convertBtn.addEventListener('click', buttonClicked);
