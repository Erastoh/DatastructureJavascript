const reverName = prompt("Enter the String Name") // Erastus Mugambi

if (reverName === null) {
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

