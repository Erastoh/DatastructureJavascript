// Graph is a a non-linear datastructure that consists of finite number of vertices(nodes) connected by edges
//types of Graphs
//1. Directed graph- has edges with directions on how the graph can be traversed
//2. Undirected - has edges that are bidirectional
//Graphs are represented by
// i, Adjacency matrix - is a 2D array of size VxV
// ii, Adjacency list

const matrix = [
	[0, 1, 0],
	[1, 0, 1],
	[0, 1, 0]
]

console.log(matrix[0][1]) // 1- because there is conection btn A and B