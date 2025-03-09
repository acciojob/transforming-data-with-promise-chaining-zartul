//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
    const inputValue = parseFloat(document.getElementById("ip").value);
    const outputDiv = document.getElementById("output");

    if (isNaN(inputValue)) {
        outputDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    outputDiv.innerHTML = "Processing...";

    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerHTML = `Result: ${inputValue}`;
            resolve(inputValue);
        }, 2000);
    })
    .then(result => new Promise((resolve) => {
        setTimeout(() => {
            let newValue = result * 2;
            outputDiv.innerHTML = `Result: ${newValue}`;
            resolve(newValue);
        }, 2000);
    }))
    .then(result => new Promise((resolve) => {
        setTimeout(() => {
            let newValue = result - 3;
            outputDiv.innerHTML = `Result: ${newValue}`;
            resolve(newValue);
        }, 1000);
    }))
    .then(result => new Promise((resolve) => {
        setTimeout(() => {
            let newValue = result / 2;
            outputDiv.innerHTML = `Result: ${newValue}`;
            resolve(newValue);
        }, 1000);
    }))
    .then(result => new Promise((resolve) => {
        setTimeout(() => {
            let newValue = result + 10;
            outputDiv.innerHTML = `Final Result: ${newValue}`;
            resolve(newValue);
        }, 1000);
    }))
    .catch(error => {
        outputDiv.innerHTML = `Error: ${error}`;
    });
});
