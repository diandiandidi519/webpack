const { getOptions, urlToRequest } = require("loader-utils");
const { validate } = require("schema-utils");
module.exports = (source, map, meta) => {
	const options = getOptions(this) || {};
	// 同步 loader 返回多个值
	this.callback(null, someSyncOperation(content), map, meta);
	return;
};
