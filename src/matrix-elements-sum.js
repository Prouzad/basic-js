const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	let count = 0;
	let arr = [];
	for (let i = 0; i < matrix[0].length; i++) {
		let arr2 = [];

		for (let key of matrix) {
			arr2.push(key[i]);
		}
		arr.push(arr2);
	}

	for (let l = 0; l < arr.length; l++) {
		for (let key of arr[l]) {
			if (key != 0) {
				count += key;
			} else {
				break;
			}
		}
	}
	return count;
}

module.exports = {
	getMatrixElementsSum,
};
