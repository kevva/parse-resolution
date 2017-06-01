'use strict';
module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	const ret = /(\d+)x(\d+)/i.exec(input);

	if (!ret || ret.length === 0) {
		return {};
	}

	return {
		height: parseInt(ret[2], 10),
		width: parseInt(ret[1], 10)
	};
};
