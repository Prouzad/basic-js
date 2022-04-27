const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	let arr = [];
	let counter = 0;
	if (members == null) {
		return false;
	}
	for (let i = 0; i < members.length; i++) {
		if (typeof members[i] == 'string') {
			let k = members[i].trim();
			let a = k[0].toUpperCase();
			arr.push(a);
		} else {
			counter += 1;
		}
	}

	if (arr.length > 0) {
		return arr.sort().join('');
	} else {
		return false;
	}
}

module.exports = {
	createDreamTeam,
};

// function createDreamTeam(members) {
// 	let arr = [];
// 	let counter = 0;
// 	for (let i = 0; i < members.length; i++) {
// 		if (typeof members[i] == 'string') {
// 			let k = members[i].trim();
// 			let a = k[0].toUpperCase();
// 			arr.push(a);
// 		} else {
// 			counter += 1;
// 		}
// 	}

// 	if (arr.length > 0) {
// 		return arr.sort().join('');
// 	} else {
// 		console.log(counter);
// 		console.log(`TypeError: members is not iterable`);
// 	}
// }
// createDreamTeam({ foo: 'bar' });
