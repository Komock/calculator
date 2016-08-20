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


},{"./calculator.js":1,"./calculatorNew.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YWRpbS9EZXNrdG9wL2xvZnRzY2hvb2xfaG9tZXdvcmtzL2NhbGN1bGF0b3Ivbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3ZhZGltL0Rlc2t0b3AvbG9mdHNjaG9vbF9ob21ld29ya3MvY2FsY3VsYXRvci9hcHAvanMvY2FsY3VsYXRvci5qcyIsIi9Vc2Vycy92YWRpbS9EZXNrdG9wL2xvZnRzY2hvb2xfaG9tZXdvcmtzL2NhbGN1bGF0b3IvYXBwL2pzL2NhbGN1bGF0b3JOZXcuanMiLCIvVXNlcnMvdmFkaW0vRGVza3RvcC9sb2Z0c2Nob29sX2hvbWV3b3Jrcy9jYWxjdWxhdG9yL2FwcC9qcy9mYWtlXzgyZmI3NWRkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLy8gRVM1XG5mdW5jdGlvbiBDYWxjdWxhdG9yIChmaXJzdE51bWJlcil7XG5cdHRoaXMuZmlyc3ROdW1iZXIgPSBmaXJzdE51bWJlcjtcbn1cblxuQ2FsY3VsYXRvci5wcm90b3R5cGUuc3VtID0gZnVuY3Rpb24oLi4uYXJncykge1xuXHRsZXQgcmVzdWx0ID0gdGhpcy5maXJzdE51bWJlcjtcblx0Zm9yIChsZXQgaSA9IDAsIG1heCA9IGFyZ3MubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcblx0XHRyZXN1bHQgKz0gYXJnc1tpXTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbkNhbGN1bGF0b3IucHJvdG90eXBlLmRpZiA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblx0bGV0IHJlc3VsdCA9IHRoaXMuZmlyc3ROdW1iZXI7XG5cdGZvciAobGV0IGkgPSAwLCBtYXggPSBhcmdzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG5cdFx0cmVzdWx0IC09IGFyZ3NbaV07XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5DYWxjdWxhdG9yLnByb3RvdHlwZS5kaXYgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG5cdHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcblx0XHRpZiAoY3VyID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ9CU0LXQu9C40YLQtdC70Ywg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINGA0LDQstC10L0gMCEnKTtcblx0XHRyZXR1cm4gcHJldiAvIGN1cjtcblx0fSwgdGhpcy5maXJzdE51bWJlcik7XG59O1xuQ2FsY3VsYXRvci5wcm90b3R5cGUubXVsID0gZnVuY3Rpb24oLi4uYXJncykge1xuXHRyZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG5cdFx0cmV0dXJuIHByZXYgKiBjdXI7XG5cdH0sIHRoaXMuZmlyc3ROdW1iZXIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYWxjdWxhdG9yOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVTNlxuY2xhc3MgQ2FsY3VsYXRvck5ldyB7XG5cdGNvbnN0cnVjdG9yKGZpcnN0TnVtYmVyKXtcblx0XHR0aGlzLmZpcnN0TnVtYmVyID0gZmlyc3ROdW1iZXI7XG5cdH1cblx0c3VtICguLi5hcmdzKSB7XG5cdFx0bGV0IHJlc3VsdCA9IHRoaXMuZmlyc3ROdW1iZXI7XG5cdFx0Zm9yIChsZXQgaSA9IDAsIG1heCA9IGFyZ3MubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcblx0XHRcdHJlc3VsdCArPSBhcmdzW2ldO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdGRpZiAoLi4uYXJncykge1xuXHRcdGxldCByZXN1bHQgPSB0aGlzLmZpcnN0TnVtYmVyO1xuXHRcdGZvciAobGV0IGkgPSAwLCBtYXggPSBhcmdzLmxlbmd0aDsgaSA8IG1heDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgLT0gYXJnc1tpXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRkaXYgKC4uLmFyZ3MpIHtcblx0XHRyZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG5cdFx0XHRpZiAoY3VyID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ9CU0LXQu9C40YLQtdC70Ywg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINGA0LDQstC10L0gMCEnKTtcblx0XHRcdHJldHVybiBwcmV2IC8gY3VyO1xuXHRcdH0sIHRoaXMuZmlyc3ROdW1iZXIpO1xuXHR9XG5cdG11bCAoLi4uYXJncykge1xuXHRcdHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcblx0XHRcdHJldHVybiBwcmV2ICogY3VyO1xuXHRcdH0sIHRoaXMuZmlyc3ROdW1iZXIpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FsY3VsYXRvck5ldzsiLCIndXNlIHN0cmljdCc7XG5jb25zdCBDYWxjdWxhdG9yID0gcmVxdWlyZSgnLi9jYWxjdWxhdG9yLmpzJyksXG5cdENhbGN1bGF0b3JOZXcgPSByZXF1aXJlKCcuL2NhbGN1bGF0b3JOZXcuanMnKTtcblxuLy8gRVM1XG5mdW5jdGlvbiBTcXJDYWxjKGZpcnN0TnVtYmVyKXtcblx0dGhpcy5maXJzdE51bWJlciA9IGZpcnN0TnVtYmVyO1xufVxuLy8gSW5oZXJpdGVuY2UgZnJvbSBDYWxjdWxhdG9yXG5TcXJDYWxjLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2FsY3VsYXRvci5wcm90b3R5cGUpO1xuLy8gRXh0ZW5zaW9uXG5TcXJDYWxjLnByb3RvdHlwZS5leHRTdW0gPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIE1hdGgucG93KHRoaXMuc3VtLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIDIpO1xufVxuU3FyQ2FsYy5wcm90b3R5cGUuZXh0RGlmID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBNYXRoLnBvdyh0aGlzLmRpZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCAyKTtcbn1cblNxckNhbGMucHJvdG90eXBlLmV4dERpdiA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gTWF0aC5wb3codGhpcy5kaXYuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgMik7XG59XG5TcXJDYWxjLnByb3RvdHlwZS5leHRNdWwgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIE1hdGgucG93KHRoaXMubXVsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIDIpO1xufVxuXG5sZXQgc3FyQ2FsY0luc3QgPSBuZXcgU3FyQ2FsYygxMDApO1xuXG4vLz09PT09PSBUZXN0aW5nID09PT09PS8vXG4vLyBUZXN0aW5nIG1ldGhvZHMgb2YgQ2FsY3VsYXRvclxuLy8gY29uc29sZS5sb2coIHNxckNhbGNJbnN0LnN1bSgxLCAyLCAzLCA0LCA1KSApO1xuLy8gY29uc29sZS5sb2coIHNxckNhbGNJbnN0LmRpZigxLCAyKSApO1xuLy8gY29uc29sZS5sb2coIHNxckNhbGNJbnN0LmRpdigyLCA1KSApO1xuLy8gdHJ5IHtcbi8vIFx0Y29uc29sZS5sb2coIHNxckNhbGNJbnN0LmRpdigxLCAwKSApO1xuLy8gfSBjYXRjaChlKSB7XG4vLyBcdGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbi8vIH1cbi8vIGNvbnNvbGUubG9nKCBzcXJDYWxjSW5zdC5tdWwoMSwgMiwgMywgNCkgKTtcblxuLy8gVGVzdGluZyBleHRlbmRlZCBtZXRob2RzXG5jb25zb2xlLmxvZygnc3FyQ2FsY0luc3QnKTtcbmNvbnNvbGUubG9nKHNxckNhbGNJbnN0LmV4dFN1bSgxLCAyLCAzKSk7IC8vIDExIDIzNlxuY29uc29sZS5sb2coc3FyQ2FsY0luc3QuZXh0RGlmKDEwLCAyMCkpOyAvLyA0IDkwMFxuY29uc29sZS5sb2coc3FyQ2FsY0luc3QuZXh0RGl2KDIsIDIpKTsgLy8gNjI1XG4vLyB0cnkge1xuLy8gXHRjb25zb2xlLmxvZyggc3FyQ2FsY0luc3QuZXh0RGl2KDEsIDApICk7XG4vLyB9IGNhdGNoKGUpIHtcbi8vIFx0Y29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuLy8gfVxuY29uc29sZS5sb2coc3FyQ2FsY0luc3QuZXh0TXVsKDIsIDIpKTsgLy8gMTYwIDAwMFxuXG4vLyBFUzZcbmxldCBzcXJDYWxjTmV3SW5zdCA9IG5ldyBDYWxjdWxhdG9yTmV3KDEwMCk7XG4vLyBFeHRlbnNpb25cbnNxckNhbGNOZXdJbnN0LmV4dFN1bSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gTWF0aC5wb3codGhpcy5zdW0uYXBwbHkodGhpcywgYXJndW1lbnRzKSwgMik7XG59XG5zcXJDYWxjTmV3SW5zdC5leHREaWYgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIE1hdGgucG93KHRoaXMuZGlmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIDIpO1xufVxuc3FyQ2FsY05ld0luc3QuZXh0RGl2ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBNYXRoLnBvdyh0aGlzLmRpdi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCAyKTtcbn1cbnNxckNhbGNOZXdJbnN0LmV4dE11bCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gTWF0aC5wb3codGhpcy5tdWwuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgMik7XG59XG5cbmNvbnNvbGUubG9nKCdcXG5cXG4gc3FyQ2FsY05ld0luc3QnKTtcblxuLy8gVGVzdGluZyBleHRlbmRlZCBtZXRob2RzXG5jb25zb2xlLmxvZyhzcXJDYWxjTmV3SW5zdC5leHRTdW0oMSwgMiwgMykpOyAvLyAxMSAyMzZcbmNvbnNvbGUubG9nKHNxckNhbGNOZXdJbnN0LmV4dERpZigxMCwgMjApKTsgLy8gNCA5MDBcbmNvbnNvbGUubG9nKHNxckNhbGNOZXdJbnN0LmV4dERpdigyLCAyKSk7IC8vIDYyNVxuLy8gdHJ5IHtcbi8vIFx0Y29uc29sZS5sb2coIHNxckNhbGNOZXdJbnN0LmV4dERpdigxLCAwKSApO1xuLy8gfSBjYXRjaChlKSB7XG4vLyBcdGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbi8vIH1cbmNvbnNvbGUubG9nKHNxckNhbGNOZXdJbnN0LmV4dE11bCgyLCAyKSk7IC8vIDE2MCAwMDBcblxuIl19
