const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr, countArr = []) {
		let counter = 0;

		if (Array.isArray(arr)) {

			for (let key of arr) {

				let result = this.calculateDepth(key);
				switch (true) {
					case result > counter:
						counter = result
						break

				}


			}
			return counter + 1

		} else {
			return 0
		}
	}
}

module.exports = {
	DepthCalculator,
};



