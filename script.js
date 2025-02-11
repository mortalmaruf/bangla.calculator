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

    // Convert displayed × and ÷ back to * and / for actual calculations
    let expression = display.replace(/×/g, "*").replace(/÷/g, "/");

    try {
        let result = eval(expression);

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