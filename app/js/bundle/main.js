(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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


},{"./calculator.js":1,"./calculatorNew.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YWRpbS9EZXNrdG9wL2xvZnRzY2hvb2xfaG9tZXdvcmtzL2NhbGN1bGF0b3Ivbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3ZhZGltL0Rlc2t0b3AvbG9mdHNjaG9vbF9ob21ld29ya3MvY2FsY3VsYXRvci9hcHAvanMvY2FsY3VsYXRvci5qcyIsIi9Vc2Vycy92YWRpbS9EZXNrdG9wL2xvZnRzY2hvb2xfaG9tZXdvcmtzL2NhbGN1bGF0b3IvYXBwL2pzL2NhbGN1bGF0b3JOZXcuanMiLCIvVXNlcnMvdmFkaW0vRGVza3RvcC9sb2Z0c2Nob29sX2hvbWV3b3Jrcy9jYWxjdWxhdG9yL2FwcC9qcy9mYWtlXzExMWE3MmNhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vIEVTNVxuZnVuY3Rpb24gQ2FsY3VsYXRvciAoZmlyc3ROdW1iZXIpe1xuXHR0aGlzLmZpcnN0TnVtYmVyID0gZmlyc3ROdW1iZXI7XG59XG5cbkNhbGN1bGF0b3IucHJvdG90eXBlLnN1bSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblx0bGV0IHJlc3VsdCA9IHRoaXMuZmlyc3ROdW1iZXI7XG5cdGZvciAobGV0IGkgPSAwLCBtYXggPSBhcmdzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG5cdFx0cmVzdWx0ICs9IGFyZ3NbaV07XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5DYWxjdWxhdG9yLnByb3RvdHlwZS5kaWYgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG5cdGxldCByZXN1bHQgPSB0aGlzLmZpcnN0TnVtYmVyO1xuXHRmb3IgKGxldCBpID0gMCwgbWF4ID0gYXJncy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuXHRcdHJlc3VsdCAtPSBhcmdzW2ldO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59O1xuQ2FsY3VsYXRvci5wcm90b3R5cGUuZGl2ID0gZnVuY3Rpb24oLi4uYXJncykge1xuXHRyZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG5cdFx0aWYgKGN1ciA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCfQlNC10LvQuNGC0LXQu9GMINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDRgNCw0LLQtdC9IDAhJyk7XG5cdFx0cmV0dXJuIHByZXYgLyBjdXI7XG5cdH0sIHRoaXMuZmlyc3ROdW1iZXIpO1xufTtcbkNhbGN1bGF0b3IucHJvdG90eXBlLm11bCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblx0cmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuXHRcdHJldHVybiBwcmV2ICogY3VyO1xuXHR9LCB0aGlzLmZpcnN0TnVtYmVyKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FsY3VsYXRvcjsiLCIndXNlIHN0cmljdCc7XG4vLyBFUzZcbmNsYXNzIENhbGN1bGF0b3JOZXcge1xuXHRjb25zdHJ1Y3RvcihmaXJzdE51bWJlcil7XG5cdFx0dGhpcy5maXJzdE51bWJlciA9IGZpcnN0TnVtYmVyO1xuXHR9XG5cdHN1bSAoLi4uYXJncykge1xuXHRcdGxldCByZXN1bHQgPSB0aGlzLmZpcnN0TnVtYmVyO1xuXHRcdGZvciAobGV0IGkgPSAwLCBtYXggPSBhcmdzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgKz0gYXJnc1tpXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRkaWYgKC4uLmFyZ3MpIHtcblx0XHRsZXQgcmVzdWx0ID0gdGhpcy5maXJzdE51bWJlcjtcblx0XHRmb3IgKGxldCBpID0gMCwgbWF4ID0gYXJncy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuXHRcdFx0cmVzdWx0IC09IGFyZ3NbaV07XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0ZGl2ICguLi5hcmdzKSB7XG5cdFx0cmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuXHRcdFx0aWYgKGN1ciA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCfQlNC10LvQuNGC0LXQu9GMINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDRgNCw0LLQtdC9IDAhJyk7XG5cdFx0XHRyZXR1cm4gcHJldiAvIGN1cjtcblx0XHR9LCB0aGlzLmZpcnN0TnVtYmVyKTtcblx0fVxuXHRtdWwgKC4uLmFyZ3MpIHtcblx0XHRyZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG5cdFx0XHRyZXR1cm4gcHJldiAqIGN1cjtcblx0XHR9LCB0aGlzLmZpcnN0TnVtYmVyKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbGN1bGF0b3JOZXc7IiwiJ3VzZSBzdHJpY3QnO1xuY29uc3QgQ2FsY3VsYXRvciA9IHJlcXVpcmUoJy4vY2FsY3VsYXRvci5qcycpLFxuXHRDYWxjdWxhdG9yTmV3ID0gcmVxdWlyZSgnLi9jYWxjdWxhdG9yTmV3LmpzJyk7XG5cbi8vIEVTNVxuZnVuY3Rpb24gU3FyQ2FsYyhmaXJzdE51bWJlcil7XG5cdENhbGN1bGF0b3IuY2FsbCh0aGlzLCBmaXJzdE51bWJlcik7XG59XG4vLyBJbmhlcml0ZW5jZSBmcm9tIENhbGN1bGF0b3JcblNxckNhbGMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDYWxjdWxhdG9yLnByb3RvdHlwZSk7XG4vLyBFeHRlbnNpb25cblNxckNhbGMucHJvdG90eXBlLnN1bSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gTWF0aC5wb3coQ2FsY3VsYXRvci5wcm90b3R5cGUuc3VtLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIDIpO1xufTtcblNxckNhbGMucHJvdG90eXBlLmRpZiA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gTWF0aC5wb3coQ2FsY3VsYXRvci5wcm90b3R5cGUuZGlmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIDIpO1xufTtcblNxckNhbGMucHJvdG90eXBlLmRpdiA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gTWF0aC5wb3coQ2FsY3VsYXRvci5wcm90b3R5cGUuZGl2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIDIpO1xufTtcblNxckNhbGMucHJvdG90eXBlLm11bCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gTWF0aC5wb3coQ2FsY3VsYXRvci5wcm90b3R5cGUubXVsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIDIpO1xufTtcblxubGV0IHNxckNhbGNJbnN0ID0gbmV3IFNxckNhbGMoMTAwKTtcblxuLy89PT09PT0gVGVzdGluZyA9PT09PT0vL1xuY29uc29sZS5sb2coJ3NxckNhbGNJbnN0IEVTNScpO1xuY29uc29sZS5sb2coc3FyQ2FsY0luc3Quc3VtKDEsIDIsIDMpKTsgLy8gMTEgMjM2XG5jb25zb2xlLmxvZyhzcXJDYWxjSW5zdC5kaWYoMTAsIDIwKSk7IC8vIDQgOTAwXG5jb25zb2xlLmxvZyhzcXJDYWxjSW5zdC5kaXYoMiwgMikpOyAvLyA2MjVcbi8vIHRyeSB7XG4vLyBcdGNvbnNvbGUubG9nKCBzcXJDYWxjSW5zdC5kaXYoMSwgMCkgKTtcbi8vIH0gY2F0Y2goZSkge1xuLy8gXHRjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XG4vLyB9XG5jb25zb2xlLmxvZyhzcXJDYWxjSW5zdC5tdWwoMiwgMikpOyAvLyAxNjAgMDAwXG5cbi8vIEVTNlxuY2xhc3Mgc3FyQ2FsY05ldyBleHRlbmRzIENhbGN1bGF0b3JOZXcge1xuXHRjb25zdHJ1Y3RvcihmaXJzdE51bWJlcil7XG5cdFx0c3VwZXIoZmlyc3ROdW1iZXIpO1xuXHR9XG5cdC8vIEV4dGVuc2lvblxuXHRzdW0oKXtcblx0XHRyZXR1cm4gTWF0aC5wb3coc3VwZXIuc3VtLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIDIpO1xuXHR9O1xuXHRkaWYoKXtcblx0XHRyZXR1cm4gTWF0aC5wb3coc3VwZXIuZGlmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIDIpO1xuXHR9O1xuXHRkaXYoKXtcblx0XHRyZXR1cm4gTWF0aC5wb3coc3VwZXIuZGl2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIDIpO1xuXHR9O1xuXHRtdWwoKXtcblx0XHRyZXR1cm4gTWF0aC5wb3coc3VwZXIubXVsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIDIpO1xuXHR9O1xufVxuXG5sZXQgc3FyQ2FsY05ld0luc3QgPSBuZXcgc3FyQ2FsY05ldygxMDApO1xuXG4vLz09PT09PSBUZXN0aW5nID09PT09PS8vXG5jb25zb2xlLmxvZygnXFxuXFxuc3FyQ2FsY05ld0luc3QgRVM2Jyk7XG5jb25zb2xlLmxvZyhzcXJDYWxjTmV3SW5zdC5zdW0oMSwgMiwgMykpOyAvLyAxMSAyMzZcbmNvbnNvbGUubG9nKHNxckNhbGNOZXdJbnN0LmRpZigxMCwgMjApKTsgLy8gNCA5MDBcbmNvbnNvbGUubG9nKHNxckNhbGNOZXdJbnN0LmRpdigyLCAyKSk7IC8vIDYyNVxuLy8gdHJ5IHtcbi8vIFx0Y29uc29sZS5sb2coIHNxckNhbGNOZXdJbnN0LmRpdigxLCAwKSApO1xuLy8gfSBjYXRjaChlKSB7XG4vLyBcdGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbi8vIH1cbmNvbnNvbGUubG9nKHNxckNhbGNOZXdJbnN0Lm11bCgyLCAyKSk7IC8vIDE2MCAwMDBcblxuIl19
