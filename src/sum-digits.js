const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
	let result;

	function getSumRec(r) {
		r = r + '';
		let arr = [];
		for (let i = 0; i < r.length; i++) {
			arr.push(+r[i]);
		}
		result = arr.reduce((previousValue, currentValue) => {
			return previousValue + currentValue;
		});
		if (result > 9) {
			getSumRec(result);
		}
		return result;
	}
	return getSumRec(n);
}

module.exports = {
	getSumOfDigits,
};
