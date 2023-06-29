// Array is a data structure that can hold a collection of data

// ARRAY - Big-O time Complexity

// Insert/remove from end - 0(1)
// Insert/ remove from beggining - 0(n)
// Access - 0(1)
// Search -0(n)
// Push/ Pop - 0(1)
// Shift/ Unshift/ concat/slice/ Splice - 0(n)
// forEach / Map / Filter / Reduce - 0(n)



//OBJECT

//Object - Big-0 time Complexity

//Insert - 0(1) - constant time complexity
// Remove - 0(1)- c
// Access - 0(1) - c
// Search - 0(n) - Linear complexity
//object.keys() - 0(n)
//object.values() - 0(n)
//object.entries() - 0(n) - linear 



//SET

// A set is a data Structure that can Hold a collection of values. The values however must be unique. 
//Example
const set = new Set([1, 2, 3])
set.add(4)   // add value 4 to the set
console.log(set.has(4)) //returns true
set.delete(3)  // will delete value 3
set.clear() // will empty the set
set.size // will print the total number of items inside the set

for (const item of set) {
	console.log(item) // this will print all the values
}


// MAP

//A map is an Unordered collection of key-value pairs. Both keys and Values can be of any data type. 
//Example
const map = new Map([['a', 1], ['b', 2]])

map.set('c', 3) // adding a new value
map.delete('c') // delete the key and value in 'c'
map.clear() // will empty the whole map
map.has('a')  // true contains value a
console.log(map.size) // will print the total number of available objects

for (const [key, Value] of map){
	console.log(`${key} : ${Value}`)
}

