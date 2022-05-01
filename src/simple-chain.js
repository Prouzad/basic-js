const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	array: [],
	getLength() {
		return this.array.length;
	},
	addLink(value) {
		let str = String(value);
		this.array.push(str);
		return this;
	},
	removeLink(position) {
		if (typeof position != "number" || !(position > 0 && position < this.array.length)
		) {
			this.deleteChain();
			throw new Error(`You can't remove incorrect link!`);
		}
		this.array.splice(position - 1, 1);
		return this;
	},
	reverseChain() {
		this.array.reverse();
		return this;
	},
	deleteChain() {
		return this.array = [];
	},
	finishChain() {
		array2 = this.array.map(item => `( ${item} )`);
		this.deleteChain();
		return array2.join('~~');
	}
};

module.exports = {
	chainMaker
};
