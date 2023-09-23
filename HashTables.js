//Hash Table or Hash Maps is a data structure used to store key-value pairs
//Hash Table are implemented where constant time lookup and insertions are required eg, Database Indexing and Cashes
//key Function of hash Table
// - Set to store a key-value pair
// - Get to retrieve a value given it's key
// - Remove to delete a key value pair
// - Hashing Function to Convert a string key to a numeric index which is important to store data in array

class HashTable {
	constructor (size) {
		this.table = Array(size)
		this.size = size
	}

	hash(key) {
		let total = 0
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i)
		}
		return total % this.size
	}
	set(key, value) {
		const index = this.hash(key)
		this.table[index] = value
	}

	get(key) {
		const index = this.hash(key)
		return this.table[index]
	}

	remove(key) {
		const index = this.hash(key)
		this.table[index] = undefined
	}

	display() {
		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i]) {
				console.log(i, this.table[i])
			}
		}
	}
}

const tablehash = new HashTable(50)
tablehash.set("Name", "Eras")
tablehash.set("Age", 26)
// tablehash.set("Work", "Moovn")
tablehash.display()

// console.log(tablehash.get("Name"))
// tablehash.remove("Work")
// tablehash.display()