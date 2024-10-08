
const display = document.getElementById('display');


function appendNumber(number) {
    display.value += number;
}


function appendOperator(operator) {
    display.value += operator;
}


function clearDisplay() {
    display.value = '';
}


function deleteLast() {
    display.value = display.value.slice(0, -1);
}


function calculate() {
    
    display.classList.add('calculate-transition');
    
    setTimeout(() => {
        try {
            display.value = eval(display.value); 
        } catch (error) {
            display.value = 'Error'; 
        }
        
        setTimeout(() => display.classList.remove('calculate-transition'), 400); 
    }, 100); 
}

window.addEventListener('keydown', function(e) {
    if (!isNaN(e.key)) {
        appendNumber(e.key); 
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        appendOperator(e.key);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        calculate(); 
    } else if (e.key === 'Backspace') {
        deleteLast(); 
    } else if (e.key === 'Escape') {
        clearDisplay(); 
    }
});
