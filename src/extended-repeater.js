const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	str = '' + str;
	if (options.addition !== undefined) {
		options.addition = '' + options.addition;
	}
	let arr = [];
	if (options.repeatTimes == undefined) {
		arr.push(str);
		if (options.addition != undefined) {
			arr.push(options.addition);
		}
	} else {
		for (let i = 0; i < options.repeatTimes; i++) {
			if (
				options.additionRepeatTimes !== undefined &&
				options.additionSeparator == undefined &&
				options.separator == undefined
			) {
				arr.push(str);
				for (let d = 0; d < options.additionRepeatTimes; d++) {
					arr.push(options.addition);
					if (options.additionRepeatTimes != d + 1) {
						arr.push('|');
					}
				}

				if (i === 0) {
					arr.push('+');
				}
			} else if (options.separator == undefined) {
				arr.push(str);
				if (options.repeatTimes != i + 1) {
					if (options.addition != undefined) {
						arr.push(str);

						arr.push(options.addition);
					} else {
						arr.push('+');
					}
				}
			} else if (options.addition == undefined) {
				arr.push(str);
				if (options.repeatTimes != i + 1) {
					arr.push(options.separator);
				}
			} else if (options.additionRepeatTimes == undefined) {
				arr.push(str);
				if (options.repeatTimes != i + 1) {
					arr.push(options.addition);
					arr.push(options.separator);
				}
			} else {
				arr.push(str);
				for (let j = 0; j < options.additionRepeatTimes; j++) {
					if (j + 1 == options.additionRepeatTimes) {
						arr.push(options.addition);
					} else if (
						j + 1 != options.additionRepeatTimes &&
						options.additionSeparator == undefined
					) {
						arr.push(options.addition + '+');
					} else {
						arr.push(options.addition + options.additionSeparator);
					}
				}

				if (i + 1 != options.repeatTimes) {
					arr.push(options.separator);
				}
			}
		}
	}

	return arr.join('');
}

module.exports = {
	repeater,
};

// function repeater(str, options) {
// 	str = '' + str;
// 	if (options.addition !== undefined) {
// 		options.addition = '' + options.addition;
// 	}
// 	let arr = [];
// 	if (options.repeatTimes == undefined) {
// 		arr.push(str);
// 		if (options.addition != undefined) {
// 			arr.push(options.addition);
// 		}
// 	} else {
// 		for (let i = 0; i < options.repeatTimes; i++) {
// 			if (options.separator == undefined) {
// 				arr.push(str);
// 				if (options.repeatTimes != i + 1) {
// 					arr.push('+');
// 				}
// 			} else if (options.addition == undefined) {
// 				arr.push(str);
// 				if (options.repeatTimes != i + 1) {
// 					arr.push(options.separator);
// 				}
// 			} else if (options.additionRepeatTimes == undefined) {
// 				arr.push(str);
// 				if (options.repeatTimes != i + 1) {
// 					arr.push(options.addition);
// 					arr.push(options.separator);
// 				}
// 			} else {
// 				arr.push(str);
// 				for (let j = 0; j < options.additionRepeatTimes; j++) {
// 					if (j + 1 == options.additionRepeatTimes) {
// 						arr.push(options.addition);
// 					} else if (
// 						j + 1 != options.additionRepeatTimes &&
// 						options.additionSeparator == undefined
// 					) {
// 						arr.push(options.addition + '+');
// 					} else {
// 						arr.push(options.addition + options.additionSeparator);
// 					}
// 				}

// 				if (i + 1 != options.repeatTimes) {
// 					arr.push(options.separator);
// 				}
// 			}
// 		}
// 	}

// 	return arr.join('');
// }

// console.log(
// 	repeater(objWithSpecificCoercion, {
// 		repeatTimes: 2,
// 		addition: objWithSpecificCoercion,
// 	})
// );
