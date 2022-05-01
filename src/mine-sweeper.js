const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	let arr = [];

	for (let i = 0; i < matrix.length; i++) {
		arr.push([]);
		for (let k = 0; k < matrix[i].length; k++) {
			let counter = 0;
			if (i > 0) {
				switch (true) {
					case matrix[i - 1][k]:
						counter += 1;
						break
					case matrix[i - 1][k + 1]:
						counter += 1;
						break
					case matrix[i - 1][k - 1]:
						counter += 1;
						break
				}
			}

			if (i < matrix.length - 1) {
				switch (true) {
					case matrix[i + 1][k]:
						counter += 1;
						break

					case matrix[i + 1][k + 1]:
						counter += 1;
						break
					case matrix[i + 1][k - 1]:
						counter += 1;
						break

				}

			}
			switch (true) {
				case matrix[i][k + 1]:
					counter += 1;
					break

				case matrix[i][k - 1]:
					counter += 1;
					break

			}

			arr[i].push(counter)
		}
	}
	return arr
}

module.exports = {
	minesweeper
};


