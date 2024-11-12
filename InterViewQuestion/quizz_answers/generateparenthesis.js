const parenthesis = function () {

	// let setparenthesis = [
	// 	"((()))",
	// 	"(()())",
	// ];

	const solution = [];

	const generateCombo = (leftPCount, rightPCount, partial) => {
		if (leftPCount > rightPCount) return;
		if (!leftPCount && !rightPCount) solution.push(partial);

	}

	generateCombo(n, n, "");
	return solution;

}
