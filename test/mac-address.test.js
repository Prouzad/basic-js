const { assert } = require('chai');
const { testOptional } = require('../extensions/index.js');
const { isMAC48Address } = require('../src/mac-address.js');

it.optional = testOptional;

Object.freeze(assert);

describe('MAC address', () => {
	it.optional(
		'should check if a given string corresponds to MAC-48 address or not',
		() => {
			assert.strictEqual(isMAC48Address('00-1B-63-84-45-E6'), true);
			assert.strictEqual(isMAC48Address('Z1-1B-63-84-45-E6'), false);
			assert.strictEqual(isMAC48Address('not a MAC-48 address'), false);
			assert.strictEqual(isMAC48Address('FF-FF-FF-FF-FF-FF'), true);
			assert.strictEqual(isMAC48Address('G0-00-00-00-00-00'), false);
		}
	);
});

// function isMAC48Address(n) {
// 	let regExp = /[A-F, 0-9]/g;

// 	let arr = n.split('-');
// 	let arr3 = [];
// 	let result = n.matchAll(regExp);
// 	result = Array.from(result);
// 	let arr2 = [];

// 	for (let key of result) {
// 		arr2.push(key[0]);

// 		if (arr2.length == 2) {
// 			arr3.push(arr2.join(''));
// 			arr2 = [];
// 		}
// 	}
// 	let count = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		console.log(count);
// 		console.log(arr.length);

// 		if (arr[i] == arr3[i]) {
// 			count += 1;
// 			if (count == arr.length) {
// 				console.log('true');
// 			}
// 		} else {
// 			console.log('false');
// 		}
// 	}
// }

// isMAC48Address('00-1B-63-84-45-E6');
