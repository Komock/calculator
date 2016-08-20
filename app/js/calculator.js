'use strict';

// ES5
function Calculator (firstNumber){
	this.firstNumber = firstNumber;
}

Calculator.prototype.sum = function(...args) {
	let result = this.firstNumber;
	for (let i = 0, max = args.length; i < max; i++) {
		result += args[i];
	}
	return result;
};
Calculator.prototype.dif = function(...args) {
	let result = this.firstNumber;
	for (let i = 0, max = args.length; i < max; i++) {
		result -= args[i];
	}
	return result;
};
Calculator.prototype.div = function(...args) {
	return args.reduce(function(prev, cur) {
		if (cur === 0) throw new Error('Делитель не может быть равен 0!');
		return prev / cur;
	}, this.firstNumber);
};
Calculator.prototype.mul = function(...args) {
	return args.reduce(function(prev, cur) {
		return prev * cur;
	}, this.firstNumber);
};

module.exports = Calculator;