'use strict';
const Calculator = require('./calculator.js'),
	CalculatorNew = require('./calculatorNew.js');

// ES5
function SqrCalc(firstNumber){
	this.firstNumber = firstNumber;
}
// Inheritence from Calculator
SqrCalc.prototype = Object.create(Calculator.prototype);
// Extension
SqrCalc.prototype.extSum = function() {
	return Math.pow(this.sum.apply(this, arguments), 2);
}
SqrCalc.prototype.extDif = function() {
	return Math.pow(this.dif.apply(this, arguments), 2);
}
SqrCalc.prototype.extDiv = function() {
	return Math.pow(this.div.apply(this, arguments), 2);
}
SqrCalc.prototype.extMul = function() {
	return Math.pow(this.mul.apply(this, arguments), 2);
}

let sqrCalcInst = new SqrCalc(100);

//====== Testing ======//
// Testing methods of Calculator
// console.log( sqrCalcInst.sum(1, 2, 3, 4, 5) );
// console.log( sqrCalcInst.dif(1, 2) );
// console.log( sqrCalcInst.div(2, 5) );
// try {
// 	console.log( sqrCalcInst.div(1, 0) );
// } catch(e) {
// 	console.error(e.message);
// }
// console.log( sqrCalcInst.mul(1, 2, 3, 4) );

// Testing extended methods
console.log('sqrCalcInst');
console.log(sqrCalcInst.extSum(1, 2, 3)); // 11 236
console.log(sqrCalcInst.extDif(10, 20)); // 4 900
console.log(sqrCalcInst.extDiv(2, 2)); // 625
// try {
// 	console.log( sqrCalcInst.extDiv(1, 0) );
// } catch(e) {
// 	console.error(e.message);
// }
console.log(sqrCalcInst.extMul(2, 2)); // 160 000

// ES6
let sqrCalcNewInst = new CalculatorNew(100);
// Extension
sqrCalcNewInst.extSum = function() {
	return Math.pow(this.sum.apply(this, arguments), 2);
}
sqrCalcNewInst.extDif = function() {
	return Math.pow(this.dif.apply(this, arguments), 2);
}
sqrCalcNewInst.extDiv = function() {
	return Math.pow(this.div.apply(this, arguments), 2);
}
sqrCalcNewInst.extMul = function() {
	return Math.pow(this.mul.apply(this, arguments), 2);
}

console.log('\n\n sqrCalcNewInst');

// Testing extended methods
console.log(sqrCalcNewInst.extSum(1, 2, 3)); // 11 236
console.log(sqrCalcNewInst.extDif(10, 20)); // 4 900
console.log(sqrCalcNewInst.extDiv(2, 2)); // 625
// try {
// 	console.log( sqrCalcNewInst.extDiv(1, 0) );
// } catch(e) {
// 	console.error(e.message);
// }
console.log(sqrCalcNewInst.extMul(2, 2)); // 160 000

