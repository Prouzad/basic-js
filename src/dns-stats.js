const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let arr2 = [];

	let arr1 = [];
	let arr3 = [];
	let count = 0;

	for (let i = 0; i < domains.length; i++) {
		let arr = domains[i].split('.');
		arr1.push(arr);
	}

	for (let i = 0; i < arr1.length; i++) {
		let o = arr1[i].reverse();
		let arrfor = [];
		for (let k = 0; k < arr1[i].length; k++) {
			let a = '.' + arr1[i][k];
			arrfor.push(a);
		}
		arr2.push(arrfor);
	}
	let ik = [];
	for (let i = 0; i < arr2.length; i++) {
		for (let k = 0; k < arr2[i].length; k++) {
			if (k == 0) {
				ik.push(arr2[i][k]);
				k++;
			}
			ik.push(ik[k - 1] + arr2[i][k]);
		}
	}
	ik.sort();
	let arr4 = [];
	let con = 0;
	for (let i = 0; i < ik.length; i++) {
		let co = ik.lastIndexOf(ik[i]) + 1 - ik.indexOf(ik[i]);
		i += co - 1;
		arr4.push(co);
	}
	let arr8 = [];
	for (let key of ik) {
		if (!arr8.includes(key)) {
			arr8.push(key);
		}
	}
	const obj = {};

	for (let i = 0; i < arr8.length; i++) {
		obj[arr8[i]] = arr4[i];
	}
	return obj;
}

module.exports = {
	getDNSStats,
};
