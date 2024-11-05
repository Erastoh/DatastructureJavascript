

// const revInt = function (num) {
// 	let newnum = num.toString();
// 	let reversedint = '';
// 	for (let i = newnum.length - 1; i >= 0; i++) {
// 		reversedint += newnum[i];
// 	}
// 	return parseInt(reversedint);
// }

// console.log(revInt(123));

var reverse1 = function (x) {
	if (x < 0) return -1 * reverse(-x);
	return parseInt((x + "").toString().split("").reverse().join(""));
};

var reverse = function (x) {
	if (x < 0) return -1 * reverse(-x);
	const solution = (x + "").split("").reverse().join("");
	return parseInt((solution > Math.pow(2, 31) - 1) ? 0 : solution);
};

console.log(reverse(123));

