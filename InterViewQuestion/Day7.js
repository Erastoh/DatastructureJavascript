// Flood Fill

// An image is represented by an m x n integer grid image where image[i][j]
// represents the pixel value of the image.
// You are also given three integers sr, sc and color.You should perform
// a flood fill on the image starting from the pixel image[sr][sc].
// Return the modified image after performing the flood fill.


function floodFill(image, sr, sc, newColor) {
	const rows = image.length;
	const cols = image[0].length;
	const originalColor = image[sr][sc];

	// Define a recursive function to perform flood fill
	function fill(r, c) {
		// Check if current pixel is within bounds and has original color
		if (r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] !== originalColor || image[r][c] === newColor) {
			return;
		}

		// Update current pixel color
		image[r][c] = newColor;

		// Recursive calls for neighboring pixels
		fill(r + 1, c); // Down
		fill(r - 1, c); // Up
		fill(r, c + 1); // Right
		fill(r, c - 1); // Left
	}

	// Start flood fill from the specified pixel
	fill(sr, sc);

	return image;
}

// Example usage:
const image = [
	[1, 1, 1],
	[1, 1, 0],
	[1, 0, 1]
];
const sr = 1, sc = 1, newColor = 2;

console.log(floodFill(image, sr, sc, newColor));