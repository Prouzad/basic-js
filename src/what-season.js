const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
	if (date === undefined) return 'Unable to determine the time of year!';
	if (
		Object.prototype.toString.call(date) !== '[object Date]' ||
		Object.getOwnPropertySymbols(date).length !== 0
	) {
		throw new Error('Invalid date!');
	}
	let month = typeof date == 'object' ? date.getMonth() : date;
	switch (month) {
		case 'winter':
		case 0:
		case 1:
		case 11:
			return 'winter';
			break;
		case 'spring':
		case 2:
		case 3:
		case 4:
			return 'spring';
			break;
		case 'summer':
		case 5:
		case 6:
		case 7:
			return 'summer';
		case 'autumn':
		case 8:
		case 9:
		case 10:
			return 'autumn';
			break;
	}
}

module.exports = {
	getSeason,
};

// function getSeason(date) {
// 	if (date === undefined) return 'Unable to determine the time of year!';
// 	switch (date) {
// 		case 'winter':
// 			return 'winter';
// 			break;
// 		case 'spring':
// 			return 'winter';
// 			break;
// 		case 'summer':
// 			return 'winter';
// 			break;
// 		case 'autumn':
// 			return 'winter';
// 			break;
// 	}
// 	let month = date.getMonth();
// 	switch (month) {
// 		case 1:
// 		case 2:
// 		case 12:
// 			return 'winter';
// 			break;
// 		case 3:
// 		case 4:
// 		case 5:
// 			return 'spring';
// 			break;
// 		case 6:
// 		case 7:
// 		case 8:
// 			return 'summuer';
// 		case 9:
// 		case 10:
// 		case 11:
// 			return 'autumn';
// 			break;
// 	}
// }

// console.log(getSeason('winter'));
