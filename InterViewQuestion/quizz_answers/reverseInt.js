

const revInt = function (num) {
	
	let reversedint = '';
	for (let i = num.length - 1; i >= 0; i++) {
		reversedint += num[i];
	}
	return reversedint;
}