const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const multiply = function(num1, num2) {
  return num1 * num2;
};

const divide = function(num1, num2) {
	return num1 / num2;
};

const operate = function(operator, num1, num2){
    return operator(num1, num2);
};

let display = document.getElementById('display');
let displayValue = '0';
display.textContent = displayValue;

let button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
	if (displayValue === '0' || operation !== ''){
		displayValue = '1';
		display.textContent = displayValue;
	} else {
		displayValue += '1';
		display.textContent = displayValue;
	}
});

let button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
	if (displayValue === '0' || operation !== ''){
		displayValue = '2';
		display.textContent = displayValue;
	} else {
		displayValue += '2';
		display.textContent = displayValue;
	}
});

let button3 = document.getElementById('button3');
button3.addEventListener('click', () => {
	if (displayValue === '0' || operation !== ''){
		displayValue = '3';
		display.textContent = displayValue;
	} else {
		displayValue += '3';
		display.textContent = displayValue;
	}
});

let button4 = document.getElementById('button4');
button4.addEventListener('click', () => {
	if (displayValue === '0' || operation !== ''){
		displayValue = '4';
		display.textContent = displayValue;
	} else {
		displayValue += '4';
		display.textContent = displayValue;
	}
});

let button5 = document.getElementById('button5');
button5.addEventListener('click', () => {
	if (displayValue === '0' || operation !== ''){
		displayValue = '5';
		display.textContent = displayValue;
	} else {
		displayValue += '5';
		display.textContent = displayValue;
	}
});

let button6 = document.getElementById('button6');
button6.addEventListener('click', () => {
	if (displayValue === '0' || operation !== ''){
		displayValue = '6';
		display.textContent = displayValue;
	} else {
		displayValue += '6';
		display.textContent = displayValue;
	}
});

let button7 = document.getElementById('button7');
button7.addEventListener('click', () => {
	if (displayValue === '0' || operation !== ''){
		displayValue = '7';
		display.textContent = displayValue;
	} else {
		displayValue += '7';
		display.textContent = displayValue;
	}
});

let button8 = document.getElementById('button8');
button8.addEventListener('click', () => {
	if (displayValue === '0' || operation !== ''){
		displayValue = '8';
		display.textContent = displayValue;
	} else {
		displayValue += '8';
		display.textContent = displayValue;
	}
});

let button9 = document.getElementById('button9');
button9.addEventListener('click', () => {
	if (displayValue === '0' || operation !== ''){
		displayValue = '9';
		display.textContent = displayValue;
	} else {
		displayValue += '9';
		display.textContent = displayValue;
	}
});

let button0 = document.getElementById('button0');
button0.addEventListener('click', () => {
	if (displayValue === '0' || operation !== ''){
		displayValue = '0';
		display.textContent = displayValue;
	} else {
		displayValue += '0';
		display.textContent = displayValue;
	}
});


let num1;
let num2;
let operation = '';

let buttonEquals = document.getElementById('buttonEquals');
buttonEquals.addEventListener('click', () => {
	num2 = displayValue;
	displayValue = operation(parseFloat(num1), parseFloat(num2) );
	display.textContent = displayValue;
	num1 = 0;
});

let buttonPlus = document.getElementById('buttonPlus');
buttonPlus.addEventListener('click', () => {
	if (operation !== ''){
	num2 = displayValue;
	displayValue = operation(parseFloat(num1), parseFloat(num2) );
	display.textContent = displayValue;
	}
	num1 = displayValue;
	operation = add;
});

let buttonMinus = document.getElementById('buttonMinus');
buttonMinus.addEventListener('click', () => {
	if (operation !== ''){
		num2 = displayValue;
		displayValue = operation(parseFloat(num1), parseFloat(num2) );
		display.textContent = displayValue;
		}
		num1 = displayValue;
		operation = subtract;
});

let buttonMultiply = document.getElementById('buttonMultiply');
buttonMultiply.addEventListener('click', () => {
	if (operation !== ''){
		num2 = displayValue;
		displayValue = operation(parseFloat(num1), parseFloat(num2) );
		display.textContent = displayValue;
		}
		num1 = displayValue;
		operation = multiply;
});

let buttonDivide = document.getElementById('buttonDivide');
buttonDivide.addEventListener('click', () => {
	if (operation !== ''){
		num2 = displayValue;
		displayValue = operation(parseFloat(num1), parseFloat(num2) );
		display.textContent = displayValue;
		}
		num1 = displayValue;
		operation = divide;
});