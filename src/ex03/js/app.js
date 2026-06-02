

function app () {
    const numberInput = document.getElementById("number");
    const button = document.getElementById("dale");
    const logNumber = document.getElementById("log");

    button.addEventListener("click", () => {
        const stringArray = numberInput.value.split(/[\s,]+/);
        const numberArray = stringArray.map(Number);
        const largest = Math.max(...numberArray);
        logNumber.textContent = `The largest number is ${largest}`;
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === 'Enter') {
            const stringArray = numberInput.value.split(/[\s,]+/);
            const numberArray = stringArray.map(Number);
            const largest = Math.max(...numberArray);
            logNumber.textContent = `The largest number is ${largest}`;
        }
    });
}

app();