document.getElementById("calcBtn").addEventListener("click", calculate);

function calculate() {
    const age = parseInt(document.getElementById("age").value);
    const retire = parseInt(document.getElementById("retire").value);
    const salary = parseFloat(document.getElementById("salary").value);

    if (isNaN(age) || isNaN(retire) || isNaN(salary)) {
        document.getElementById("result").innerText = "Please fill in all fields.";
        return;
    }

    const yearsLeft = retire - age;
    const estSavings = yearsLeft * salary * 0.1; // Example formula

    document.getElementById("result").innerText =
        `You have ${yearsLeft} years left. Estimated savings: $${estSavings.toLocaleString()}`;
}
