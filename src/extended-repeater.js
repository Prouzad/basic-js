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
	let {
		repeatTimes,
		separator,
		addition,
		additionRepeatTimes,
		additionSeparator,
	} = options;
	console.log(repeatTimes);
	if (separator === undefined) {
		separator = '+';
	}
	if (additionSeparator === undefined) {
		additionSeparator = '|';
	}

	function getResult(addstr = '', repeat = 1, separator) {
		addstr = addstr + '';

		let arr = [];
		for (let i = 0; i < repeat; i++) {
			arr.push(addstr);
		}

		return arr.join(separator);
	}

	let resFunc = getResult(addition, additionRepeatTimes, additionSeparator);
	let rs = str + resFunc;
	let lastFunc = getResult(rs, repeatTimes, separator);
	return lastFunc;
}

module.exports = {
	repeater,
};
