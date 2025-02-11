// Function to append values to the display
function appendValue(value) {
    let display = document.getElementById("result");

    // Replace * with × and / with ÷ for display (but keep actual values for calculations)
    if (value === "*") {
        display.value += "×";
    } else if (value === "/") {
        display.value += "÷";
    } else {
        display.value += value;
    }
}

// Function to clear the display
function clearScreen() {
    document.getElementById("result").value = "";
}

// Function to calculate the result
function calculate() {
    let display = document.getElementById("result").value;

    // Validate the expression before calculation
    if (!validateExpression(display)) {
        document.getElementById("result").value = "ত্রুটি!";
        return;
    }

    // Convert Bengali digits to ASCII digits
    let asciiExpression = convertToAscii(display);

    // Convert displayed × and ÷ back to * and / for actual calculations
    asciiExpression = asciiExpression.replace(/×/g, "*").replace(/÷/g, "/");

    // Handle square root (√)
    asciiExpression = asciiExpression.replace(/√(\d+)/g, (match, num) => `Math.sqrt(${num})`);

    // Handle square (x²)
    asciiExpression = asciiExpression.replace(/(\d+)x²/g, (match, num) => `Math.pow(${num}, 2)`);

    // Handle cube (x³)
    asciiExpression = asciiExpression.replace(/(\d+)x³/g, (match, num) => `Math.pow(${num}, 3)`);

    // Handle percentage (%)
    asciiExpression = asciiExpression.replace(/(\d+)%/g, (match, num) => `${num}/100`);

    try {
        let result = eval(asciiExpression);

        // Convert result to Bengali numbers
        document.getElementById("result").value = convertToBengali(result);
    } catch {
        document.getElementById("result").value = "ত্রুটি!";
    }
}

// Function to convert numbers to Bengali
function convertToBengali(num) {
    let bengaliDigits = { "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪", "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯" };
    return num.toString().replace(/[0-9]/g, (d) => bengaliDigits[d]);
}

// Function to convert Bengali digits to ASCII digits
function convertToAscii(expression) {
    const bengaliToAscii = { "০": "0", "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9" };
    return expression.replace(/[০-৯]/g, (d) => bengaliToAscii[d]);
}

// Function to validate the expression
function validateExpression(expression) {
    // Check for balanced brackets
    let stack = [];
    for (let char of expression) {
        if (char === "(") {
            stack.push(char);
        } else if (char === ")") {
            if (stack.length === 0) return false; // Unbalanced brackets
            stack.pop();
        }
    }
    if (stack.length !== 0) return false; // Unbalanced brackets

    // Check for invalid characters
    const validChars = /[০-৯+\-×÷()√%x²x³]/;
    for (let char of expression) {
        if (!validChars.test(char)) return false;
    }

    return true;
}

// Function to handle backspace
function backspace() {
    let display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
}