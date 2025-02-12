// Function to convert Bengali numbers to English numbers
function bengaliToEnglish(num) {
    const bnToEn = {'০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'};
    return num.split('').map(char => bnToEn[char] || char).join('');
}

// Function to convert English numbers to Bengali numbers
function englishToBengali(num) {
    const enToBn = {'0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'};
    return num.toString().split('').map(char => enToBn[char] || char).join('');
}

// Function to append values to the input field
function appendValue(value) {
    let result = document.getElementById("result");
    if (result.value === "ত্রুটি") {
        result.value = "";
    }
    if (value === '.' && result.value.includes('.')) {
        return; // Prevent multiple decimal points
    }
    result.value += value;
}

// Function to clear the input field
function clearScreen() {
    document.getElementById("result").value = "";
}

// Function to evaluate the calculation
function calculate() {
    let expression = document.getElementById("result").value;

    // Convert Bengali numbers to English before calculation
    let englishExpression = bengaliToEnglish(expression);

    try {
        let result = eval(englishExpression); // Perform the calculation
        document.getElementById("result").value = englishToBengali(result); // Convert the result back to Bengali
    } catch (error) {
        document.getElementById("result").value = "ত্রুটি"; // Error message in Bengali
    }
}

// Function to handle backspace
function backspace() {
    let result = document.getElementById("result");
    result.value = result.value.slice(0, -1); // Remove the last character
}

// Function to calculate percentage
function percentage() {
    let result = document.getElementById("result");
    let englishExpression = bengaliToEnglish(result.value);
    try {
        let value = eval(englishExpression);
        let percentageValue = value / 100;
        document.getElementById("result").value = englishToBengali(percentageValue);
    } catch (error) {
        document.getElementById("result").value = "ত্রুটি"; // Error message in Bengali
    }
}

// Function to calculate square root
function squareRoot() {
    let result = document.getElementById("result");
    let englishExpression = bengaliToEnglish(result.value);
    try {
        let value = eval(englishExpression);
        if (value < 0) {
            document.getElementById("result").value = "ত্রুটি"; // Error for negative numbers
        } else {
            let sqrtValue = Math.sqrt(value);
            document.getElementById("result").value = englishToBengali(sqrtValue);
        }
    } catch (error) {
        document.getElementById("result").value = "ত্রুটি"; // Error message in Bengali
    }
}
