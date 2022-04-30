const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	let arr = [];

	for (let key of names) {
		if (arr.includes(key)) {
			function recurs(n) {
				let i = n;

				if (arr.includes(key + `(${i})`)) {
					i += 1;
					return recurs(i);
				} else {
					arr.push(key + `(${i})`);
				}
			}
			recurs(1);
		} else {
			arr.push(key);
		}
	}
	return arr;
}

module.exports = {
	renameFiles,
};
