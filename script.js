function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function calculate() {
    let expression = document.getElementById('result').value;
    try {
        // Replace Bangla numerals with English numerals
        expression = expression.replace(/১/g, '1').replace(/২/g, '2').replace(/৩/g, '3')
            .replace(/৪/g, '4').replace(/৫/g, '5').replace(/৬/g, '6')
            .replace(/৭/g, '7').replace(/৮/g, '8').replace(/৯/g, '9').replace(/০/g, '0');
        
        let result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
