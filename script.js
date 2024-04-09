const convertBtn = document.getElementById('convert-btn');
const number = document.getElementById('number');
const outputDiv = document.getElementById('output');
const form = document.getElementById('form');

const romainExpansion = (int) => {
    const cursedRomainTechnique = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    
    let result = [];

    cursedRomainTechnique.forEach((arr) => {
        while(int >= arr[1]){
            result.push(arr[0]);
            int -= arr[1];
        }
    });

    outputDiv.innerHTML = `<p style="font-size: 3rem">${result.join("")}\</p>`;
    
    
};

const errorText = () => {
    outputDiv.innerHTML = '<p></p>';
};

const inputIsValid = (inputNumber, inputString) => {
    if (!inputString || inputString.match(/[e.]/g)) {
        outputDiv.classList.add('error');
        outputDiv.innerHTML = '<p style= "width: 450px; text-align: center;">Please enter a valid number</p>';
    } else if (inputNumber <1) {
        outputDiv.classList.add('error');
        outputDiv.innerHTML = '<p style= "width: 450px; text-align: center;">Please enter a number greater than or equal to 1</p>';
    } else if (inputNumber > 3999) {
        outputDiv.classList.add('error');
        outputDiv.innerHTML = '<p style= "width: 450px; text-align: center;">Please enter a number less than or equal to 3999</p>';
    } else {
        return true;
    }
    return false;
};

const clearStuff = () => {
    const inputNumber = parseInt(number.value, 10);
    const inputString = number.value;

    // Removed ui content and removed hidden from output div
    outputDiv.innerHTML = "";
    outputDiv.classList.remove('error');
    outputDiv.classList.remove('hidden');

    // Time to romanize input
    if (inputIsValid(inputNumber, inputString)){
        romainExpansion(inputNumber);
    };
}   

const buttonClicked = () => {
    clearStuff();
}



form.addEventListener('submit', e => { e.preventDefault(); clearStuff();});
convertBtn.addEventListener('click', buttonClicked);
