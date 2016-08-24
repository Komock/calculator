'use strict';
const Calculator = require('./calculator.js'),
	CalculatorNew = require('./calculatorNew.js');

// ES5
function SqrCalc(firstNumber){
	Calculator.call(this, firstNumber);
}
// Inheritence from Calculator
SqrCalc.prototype = Object.create(Calculator.prototype);
// Extension
SqrCalc.prototype.sum = function() {
	return Math.pow(Calculator.prototype.sum.apply(this, arguments), 2);
};
SqrCalc.prototype.dif = function() {
	return Math.pow(Calculator.prototype.dif.apply(this, arguments), 2);
};
SqrCalc.prototype.div = function() {
	return Math.pow(Calculator.prototype.div.apply(this, arguments), 2);
};
SqrCalc.prototype.mul = function() {
	return Math.pow(Calculator.prototype.mul.apply(this, arguments), 2);
};

let sqrCalcInst = new SqrCalc(100);

//====== Testing ======//
console.log('sqrCalcInst ES5');
console.log(sqrCalcInst.sum(1, 2, 3)); // 11 236
console.log(sqrCalcInst.dif(10, 20)); // 4 900
console.log(sqrCalcInst.div(2, 2)); // 625
// try {
// 	console.log( sqrCalcInst.div(1, 0) );
// } catch(e) {
// 	console.error(e.message);
// }
console.log(sqrCalcInst.mul(2, 2)); // 160 000

// ES6
class sqrCalcNew extends CalculatorNew {
	constructor(firstNumber){
		super(firstNumber);
	}
	// Extension
	sum(){
		return Math.pow(super.sum.apply(this, arguments), 2);
	};
	dif(){
		return Math.pow(super.dif.apply(this, arguments), 2);
	};
	div(){
		return Math.pow(super.div.apply(this, arguments), 2);
	};
	mul(){
		return Math.pow(super.mul.apply(this, arguments), 2);
	};
}

let sqrCalcNewInst = new sqrCalcNew(100);

//====== Testing ======//
console.log('\n\nsqrCalcNewInst ES6');
console.log(sqrCalcNewInst.sum(1, 2, 3)); // 11 236
console.log(sqrCalcNewInst.dif(10, 20)); // 4 900
console.log(sqrCalcNewInst.div(2, 2)); // 625
// try {
// 	console.log( sqrCalcNewInst.div(1, 0) );
// } catch(e) {
// 	console.error(e.message);
// }
console.log(sqrCalcNewInst.mul(2, 2)); // 160 000

