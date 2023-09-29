// Graph is a a non-linear datastructure that consists of finite number of vertices(nodes) connected by edges
//types of Graphs
//1. Directed graph- has edges with directions on how the graph can be traversed
//2. Undirected - has edges that are bidirectional
//Graphs are represented by
// i, Adjacency matrix - is a 2D array of size VxV
const matrix = [
	[0, 1, 0],
	[1, 0, 1],
	[0, 1, 0]
]

console.log(matrix[0][1]) // 1- because there is conection btn A and B

AdjacencyList = {
	'A': ['B'],
	'B': ['A', 'C'],
	'C': ['B']
}

console.log(AdjacencyList['B']) // [ 'A', 'C' ]

class Graph {
	constructor () {
		this.adjacencyList = {}
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = new Set()
		}

	}

	AddEdges(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1]) {
			this.addVertex(vertex1)
		}
		if (!this.adjacencyList[vertex2]) {
			this.addVertex(vertex2)
		}
		this.adjacencyList[vertex1].add(vertex2)
		this.adjacencyList[vertex2].add(vertex1)
	}

	hasEdge(vertex1, vertex2) {
		return this.adjacencyList[vertex1].has(vertex2) &&
			this.adjacencyList[vertex2].has(vertex1)
	}

	display() {
		for (let vertex in this.adjacencyList) {
			console.log(vertex + "->" + [...this.adjacencyList[vertex]])
		}
	}
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.AddEdges("A", "B")
graph.AddEdges("B", "C")
graph.display()
console.log(graph.hasEdge("A", "B")) // true
console.log(graph.hasEdge("A", "C")) // False