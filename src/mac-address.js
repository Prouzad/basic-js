const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
	let regExp = /[A-F, 0-9]/g;

	let arr = n.split('-');
	let arr3 = [];
	let result = n.matchAll(regExp);
	result = Array.from(result);
	let arr2 = [];

	for (let key of result) {
		arr2.push(key[0]);

		if (arr2.length == 2) {
			arr3.push(arr2.join(''));
			arr2 = [];
		}
	}
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == arr3[i]) {
			count += 1;
			if (count == arr.length) {
				return true;
			}
		} else {
			return false;
		}
	}
}
module.exports = {
	isMAC48Address,
};
