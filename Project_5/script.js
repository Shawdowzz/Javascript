let ageInput = document.getElementById('age');
let btn = document.getElementById('sub');
let out = document.getElementById('out');

btn.onclick = function() {
    let age = Number(ageInput.value);

    if (isNaN(age) || age <= 0) {
        out.textContent = "Please enter a valid positive number";
        return;
    }

    if (age > 100) {
        out.textContent = "You are the oldest";
    } else if (age >= 50) {
        out.textContent = "You are old";
    } else if (age >= 18) {
        out.textContent = "You are an adult";
    } else if (age >= 13) {
        out.textContent = "You are a teen";
    } else {
        out.textContent = "You are a child";
    }
};
