
// You should implement your task here.

function oddSort(a, b) {
  return a - b;
}

function evenSort(a, b) {
  return b - a;
}

module.exports = function towelSort (matrix) {
	if (!matrix || matrix.length === 0) 
		return [];
for ( let i = 0; i < matrix.length; i++) {
	if (i % 2 === 0) {
		matrix[i].sort(oddSort);
	}
	else {
		matrix[i].sort(evenSort);
	}
}

let arr = matrix.flat();
  return arr;
}


