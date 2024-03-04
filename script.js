function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearEntry() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function clearAll() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('history').innerText = expression;
    document.getElementById('display').value = result;
}