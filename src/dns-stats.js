// const { NotImplementedError } = require('../extensions/index.js');

// /**
//  * Given an array of domains, return the object with the appearances of the DNS.
//  *
//  * @param {Array} domains
//  * @return {Object}
//  *
//  * @example
//  * domains = [
//  *  'code.yandex.ru',
//  *  'music.yandex.ru',
//  *  'yandex.ru'
//  * ]
//  *
//  * The result should be the following:
//  * {
//  *   '.ru': 3,
//  *   '.ru.yandex': 3,
//  *   '.ru.yandex.code': 1,
//  *   '.ru.yandex.music': 1,
//  * }
//  *
//  */
// function getDNSStats(/* domains */) {
// 	throw new NotImplementedError('Not implemented');
// 	// remove line with error and write your code here
// }

// module.exports = {
// 	getDNSStats,
// };

let domains = ['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'];

function get(domain) {
	let arr2 = [];

	let arr1 = [];
	let arr3 = [];
	let count = 0;

	for (let i = 0; i < domain.length; i++) {
		let arr = domain[i].split('.');
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
	let con = 0;
	for (let i = 0; i < ik.length; i++) {
		let co = ik.lastIndexOf(ik[i]) + 1 - ik.indexOf(ik[i]);

		console.log(ik.lastIndexOf(ik[i]));
	}
	// for (let i = 0; i < ik.length; i++) {
	// 	for (let k = 0; k < ik.length; k++) {
	// 		console.log('1   ' + ik[i]);
	// 		console.log('lk' + ik[k]);

	// 		if (ik[i] == ik[k]) {
	// 			let a = ik.splice(i, 1);

	// 			con += 1;
	// 		} else {
	// 			i++;
	// 		}
	// 	}
	// }
}
get(domains);
