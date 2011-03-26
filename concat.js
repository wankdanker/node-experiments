Array.prototype.avg = function () {
	var x, sum = 0;
	
	for (x = 0; x < this.length; x++) {
		sum += this[x];
	}
	
	return sum / this.length;
}

Array.prototype.min = function () {
	var x, min = this[0];
	
	for (x = 0; x < this.length; x++) {
		if (this[x] < min) {
			min = this[x];
		}
	}
	
	return min;
}

Array.prototype.max = function () {
	var x, max = this[0];
	
	for (x = 0; x < this.length; x++) {
		if (this[x] > max) {
			max = this[x];
		}
	}
	
	return max;
}

var concats = [];
var joins = [];

var val, runs = 100;

for (var x = 1; x <= runs; x++) {
	val = doConcat();
	
	console.log(x + " of " + runs + " concat time: " + val);
	concats.push(val);
	
	val = doJoin();
	
	joins.push(val);
	console.log(x + " of " + runs + " join time: " + val);
}

console.log('concats min : \t' + concats.min());
console.log('concats max : \t' + concats.max());
console.log('concats avg : \t' + concats.avg());

console.log('join min : \t' + joins.min());
console.log('join max : \t' + joins.max());
console.log('join avg : \t' + joins.avg());

function doConcat() {
	var startTime = (new Date()).getTime();

	var x;

	var tmp = ""

	for (x = 0; x < 10000000; x++) {
		tmp  += "abcdefghijklmnopqrstuvwxyz";
	}

	var result = tmp;
	//console.log(result.length);

	var endTime = (new Date()).getTime();

	return endTime - startTime;
}

function doJoin() {
	var startTime = (new Date()).getTime();

	var x;

	var tmp = [];

	for (x = 0; x < 10000000; x++) {
		tmp.push("abcdefghijklmnopqrstuvwxyz");
	}

	var result = tmp.join("");
	//console.log(result.length);

	var endTime = (new Date()).getTime();

	return endTime - startTime;
}

