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

				arr.push('+');
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

	// function getResult()
}

console.log(
	repeater('9UXKEEt8Aq', {
		repeatTimes: 4,
		separator: '1L467Kdqx2',
		addition: 'IMqCarClDg',
		additionRepeatTimes: 8,
		additionSeparator: 'U7L9D0f8pb',
	})
);
