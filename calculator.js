function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
  }
  
  function calculate() {
    let display = document.getElementById('display');
    try {
      display.value = eval(display.value) || '';
    } catch (e) {
      display.value = 'Error';
    }
  }
  
