// const reverName = prompt("Enter the String Name") // Erastus Mugambi
const reverName = "Erastus Mugambi";
if (reverName === null || reverName === '') {
	console.log("Please Enter the String")
}
else {
	const reversedName = ReverseName(reverName)
	console.log("Reversed String: ", reversedName) // ibmaguM sutsarE
}

function ReverseName(name) {
	let reversedName = ""
	for (let i = name.length - 1; i >= 0; i--) {
		reversedName += name[i]
	}
	return reversedName
}


const reverseString = function (name) {
	let revString = '';

	for (let i = name.length - 1; i >= 0; i--) {
		revString += name[i];
	}
	return revString;
}

console.log(reverseString("erastus")); //sutsare


const reverseStringName = function (name) {
	let revString = '';

	for (let i = name.length - 1; i >= 0; i--){
		revString += name[i];
	}
	return revString;
}