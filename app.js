const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener('click', function () {
    let value = this.value;
    const calculatorDisplay = document.getElementById('calculator-display');
    let oldValue = calculatorDisplay.value;
    calculatorDisplay.value = oldValue + value;
  })
  button.addEventListener('mousedown', function() {
    this.style.boxShadow = '0px 0px 2px #757575';
  })
  button.addEventListener('mouseup', function () {
    this.style.boxShadow = '0px 0px 5px #757575';
  })
}

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', function () {
  const calculatorDisplay = document.getElementById('calculator-display');
  calculatorDisplay.value = '';
})

const resultBtn = document.getElementById('result-btn');
resultBtn.addEventListener('click', function () {
  const calculatorDisplay = document.getElementById('calculator-display');
  let result = eval(calculatorDisplay.value);
  calculatorDisplay.value = result;
})