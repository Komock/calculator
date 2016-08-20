'use strict';
// ES6
class CalculatorNew {
	constructor(firstNumber){
		this.firstNumber = firstNumber;
	}
	sum (...args) {
		let result = this.firstNumber;
		for (let i = 0, max = args.length; i < max; i++) {
			result += args[i];
		}
		return result;
	}
	dif (...args) {
		let result = this.firstNumber;
		for (let i = 0, max = args.length; i < max; i++) {
			result -= args[i];
		}
		return result;
	}
	div (...args) {
		return args.reduce(function(prev, cur) {
			if (cur === 0) throw new Error('Делитель не может быть равен 0!');
			return prev / cur;
		}, this.firstNumber);
	}
	mul (...args) {
		return args.reduce(function(prev, cur) {
			return prev * cur;
		}, this.firstNumber);
	}
}

module.exports = CalculatorNew;