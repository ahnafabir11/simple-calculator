const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener('click', function () {
    let value = this.value;
    const calculatorDisplay = document.getElementById('calculator-display');
    let oldValue = calculatorDisplay.value;
    calculatorDisplay.value = oldValue + value;
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