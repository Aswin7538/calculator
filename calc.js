let displayValue = '';

function appendToDisplay(val) {
    displayValue += val;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}
function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
   
  }
function calculate() {
    var displayValue = document.getElementById('display').value;
    var result;

    if (displayValue) {
        result = eval(displayValue);
        if (!isNaN(result)) {
            document.getElementById('display').value = result;
        } else {
            document.getElementById('display').value = 'Error';
        }
    } else {
        document.getElementById('display').value = 'Error';
    }
}
