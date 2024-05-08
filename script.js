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
    return romanNumeral

}


