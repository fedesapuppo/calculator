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
display.textContent = `${displayValue}`

let button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
	if (displayValue === '0'){
		displayValue = '1';
		display.textContent = `${displayValue}`
	} else {
		displayValue += '1';
		display.textContent = `${displayValue}`
	}
});

let button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
	if (displayValue === '0'){
		displayValue = '2';
		display.textContent = `${displayValue}`
	} else {
		displayValue += '2';
		display.textContent = `${displayValue}`
	}
});

let button3 = document.getElementById('button3');
button3.addEventListener('click', () => {
	if (displayValue === '0'){
		displayValue = '3';
		display.textContent = `${displayValue}`
	} else {
		displayValue += '3';
		display.textContent = `${displayValue}`
	}
});

let button4 = document.getElementById('button4');
button4.addEventListener('click', () => {
	if (displayValue === '0'){
		displayValue = '4';
		display.textContent = `${displayValue}`
	} else {
		displayValue += '4';
		display.textContent = `${displayValue}`
	}
});

let button5 = document.getElementById('button5');
button5.addEventListener('click', () => {
	if (displayValue === '0'){
		displayValue = '5';
		display.textContent = `${displayValue}`
	} else {
		displayValue += '5';
		display.textContent = `${displayValue}`
	}
});

let button6 = document.getElementById('button6');
button6.addEventListener('click', () => {
	if (displayValue === '0'){
		displayValue = '6';
		display.textContent = `${displayValue}`
	} else {
		displayValue += '6';
		display.textContent = `${displayValue}`
	}
});

let button7 = document.getElementById('button7');
button7.addEventListener('click', () => {
	if (displayValue === '0'){
		displayValue = '7';
		display.textContent = `${displayValue}`
	} else {
		displayValue += '7';
		display.textContent = `${displayValue}`
	}
});

let button8 = document.getElementById('button8');
button8.addEventListener('click', () => {
	if (displayValue === '0'){
		displayValue = '8';
		display.textContent = `${displayValue}`
	} else {
		displayValue += '8';
		display.textContent = `${displayValue}`
	}
});

let button9 = document.getElementById('button9');
button9.addEventListener('click', () => {
	if (displayValue === '0'){
		displayValue = '9';
		display.textContent = `${displayValue}`
	} else {
		displayValue += '9';
		display.textContent = `${displayValue}`
	}
});

let button0 = document.getElementById('button0');
button0.addEventListener('click', () => {
	if (displayValue === '0'){
		displayValue = '0';
		display.textContent = `${displayValue}`
	} else {
		displayValue += '0';
		display.textContent = `${displayValue}`
	}
});