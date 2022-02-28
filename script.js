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
	let append1 = true;
	if (clearDisplay === true){
		displayValue = '1';
		display.textContent = displayValue;
		clearDisplay = false;
		append1 = false;
	} else if (displayValue === '0'){
		displayValue = '1';
		display.textContent = displayValue;
	} else if(append1 === true){
		displayValue += '1';
		display.textContent = displayValue;
	}
});

let button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
	let append2 = true;
	if (clearDisplay === true){
		displayValue = '2';
		display.textContent = displayValue;
		clearDisplay = false;
		append2 = false;
	} else if (displayValue === '0'){
		displayValue = '2';
		display.textContent = displayValue;
	} else if(append2 === true){
		displayValue += '2';
		display.textContent = displayValue;
	}
});

let button3 = document.getElementById('button3');
button3.addEventListener('click', () => {
	let append3 = true;
	if (clearDisplay === true){
		displayValue = '3';
		display.textContent = displayValue;
		clearDisplay = false;
		append3 = false;
	} else if (displayValue === '0'){
		displayValue = '3';
		display.textContent = displayValue;
	} else if(append3 === true){
		displayValue += '3';
		display.textContent = displayValue;
	}
});

let button4 = document.getElementById('button4');
button4.addEventListener('click', () => {
	let append4 = true;
	if (clearDisplay === true){
		displayValue = '4';
		display.textContent = displayValue;
		clearDisplay = false;
		append4 = false;
	} else if (displayValue === '0'){
		displayValue = '4';
		display.textContent = displayValue;
	} else if(append4 === true){
		displayValue += '4';
		display.textContent = displayValue;
	}
});

let button5 = document.getElementById('button5');
button5.addEventListener('click', () => {
	let append5 = true;
	if (clearDisplay === true){
		displayValue = '5';
		display.textContent = displayValue;
		clearDisplay = false;
		append5 = false;
	} else if (displayValue === '0'){
		displayValue = '5';
		display.textContent = displayValue;
	} else if(append5 === true){
		displayValue += '5';
		display.textContent = displayValue;
	}
});

let button6 = document.getElementById('button6');
button6.addEventListener('click', () => {
	let append6 = true;
	if (clearDisplay === true){
		displayValue = '6';
		display.textContent = displayValue;
		clearDisplay = false;
		append6 = false;
	} else if (displayValue === '0'){
		displayValue = '6';
		display.textContent = displayValue;
	} else if(append6 === true){
		displayValue += '6';
		display.textContent = displayValue;
	}
});

let button7 = document.getElementById('button7');
button7.addEventListener('click', () => {
	let append7 = true;
	if (clearDisplay === true){
		displayValue = '7';
		display.textContent = displayValue;
		clearDisplay = false;
		append7 = false;
	} else if (displayValue === '0'){
		displayValue = '7';
		display.textContent = displayValue;
	} else if(append7 === true){
		displayValue += '7';
		display.textContent = displayValue;
	}
});

let button8 = document.getElementById('button8');
button8.addEventListener('click', () => {
	let append8 = true;
	if (clearDisplay === true){
		displayValue = '8';
		display.textContent = displayValue;
		clearDisplay = false;
		append8 = false;
	} else if (displayValue === '0'){
		displayValue = '8';
		display.textContent = displayValue;
	} else if(append8 === true){
		displayValue += '8';
		display.textContent = displayValue;
	}
});

let button9 = document.getElementById('button9');
button9.addEventListener('click', () => {
	let append9 = true;
	if (clearDisplay === true){
		displayValue = '9';
		display.textContent = displayValue;
		clearDisplay = false;
		append9 = false;
	} else if (displayValue === '0'){
		displayValue = '9';
		display.textContent = displayValue;
	} else if(append9 === true){
		displayValue += '9';
		display.textContent = displayValue;
	}
});

let button0 = document.getElementById('button0');
button0.addEventListener('click', () => {
	let append0 = true;
	if (clearDisplay === true){
		displayValue = '0';
		display.textContent = displayValue;
		clearDisplay = false;
		append0 = false;
	} else if (displayValue === '0'){
		displayValue = '0';
		display.textContent = displayValue;
	} else if(append0 === true){
		displayValue += '0';
		display.textContent = displayValue;
	}
});


let num1 = '';
let num2 = '';
let operation = '';
let clearDisplay = false;

let buttonEquals = document.getElementById('buttonEquals');
buttonEquals.addEventListener('click', () => {
	num2 = displayValue;
	displayValue = operation(parseFloat(num1), parseFloat(num2) );
	display.textContent = displayValue;
	num1 = 0;
	alert(`the result is: ${displayValue}, thank you for trying my calculator!!`);
	displayValue = '0';
	display.textContent = displayValue;
	num1 = '';
	num2 = '';
	operation = '';
	clearDisplay = false;
});

let buttonPlus = document.getElementById('buttonPlus');
buttonPlus.addEventListener('click', () => {
	clearDisplay = true;
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
	clearDisplay = true;
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
	clearDisplay = true;
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
	clearDisplay = true;
	if (operation !== ''){
		num2 = displayValue;
		displayValue = operation(parseFloat(num1), parseFloat(num2) );
		display.textContent = displayValue;
		}
		num1 = displayValue;
		operation = divide;
});

let buttonClear = document.getElementById('buttonClear');
buttonClear.addEventListener('click', () => {
	displayValue = '0';
	display.textContent = displayValue;
	num1 = '';
	num2 = '';
	operation = '';
	clearDisplay = false;
});

let buttonDot = document.getElementById('buttonDot');
buttonDot.addEventListener('click', () => {
	if (displayValue.includes('.')){
		return;
	}
	displayValue += '.';
	display.textContent = displayValue;
});

let buttonDel = document.getElementById('buttonDel');
buttonDel.addEventListener('click', () => {
	displayValue = displayValue.toString().slice(0, -1);
	display.textContent = displayValue;
});