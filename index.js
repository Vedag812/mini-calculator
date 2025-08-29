const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    // Only evaluate if display is not empty
    if (display.value.trim() !== '') {
      display.value = eval(display.value.replace(/[^-()\d/*+.]/g, ''));
    }
  } catch {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

// Keyboard support
document.addEventListener('keydown', function(e) {
  if (e.key >= '0' && e.key <= '9') appendToDisplay(e.key);
  if (['+', '-', '*', '/', '.'].includes(e.key)) appendToDisplay(e.key);
  if (e.key === 'Enter') {
    e.preventDefault();
    calculate();
  }
  if (e.key === 'Backspace') {
    e.preventDefault();
    backspace();
  }
  if (e.key.toLowerCase() === 'c') {
    e.preventDefault();
    clearDisplay();
  }
});
