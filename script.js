function convert() {
    let userInput = document.getElementById('number').value;
    const romanNumerals = {
        1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C',
        90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'
    };
    let romanNumeral = '';

    const values = Object.keys(romanNumerals).map(Number).sort((a, b) => b - a);

    for (let value of values) {
        while (userInput >= value) {
            romanNumeral += romanNumerals[value];
            userInput -= value;
        }
    }
    if (userInput === '') {
        document.getElementById('output').innerHTML = `<div class="result"><p>Please enter a number</p></div>`;
    } else if (userInput >= 4000) {
        document.getElementById('output').innerHTML = `<div class="result"><p>Please enter a number less than 4000</p></div>`;
    } else if (userInput <= 0) {
        document.getElementById('output').innerHTML = `<div class="result-m"><p>Please enter a number greater than or equal to 1</P></div>`;
    } else {
        document.getElementById('output').innerHTML = `<div class="result"><p>${romanNumeral}</P></div>`;
    }

}

document.addEventListener('DOMContentLoaded', function () {
    let buttonPress = document.getElementById('convert-btn');
    let userInput = document.getElementById('number');
    buttonPress.addEventListener('click', function (e) {
        convert()
    });
    userInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            convert()
        }
    })
});
