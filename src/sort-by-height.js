const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	let array = [];
	let countIndex = [];
	let count = 0;
	function countRec(n) {
		for (let key of arr) {
			if (key >= 0) {
				array.push(key);
				count++;
			} else {
				countIndex.push(count);
				count++;
			}
		}
	}
	countRec(count);
	array.sort((a, b) => a - b);
	for (let key of countIndex) {
		array.splice(key, 0, -1);
	}
	return array;
}

module.exports = {
	sortByHeight,
};
