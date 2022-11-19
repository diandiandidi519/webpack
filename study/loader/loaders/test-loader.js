const { getOptions } = require("loader-utils");
module.exports = function (source) {
	debugger;
	// 加载 options
	const options = getOptions(this) || {};
	console.log("options", options);
	console.log("source", source);
	// console.log(this);

	return source;
};

module.exports.raw = true;
