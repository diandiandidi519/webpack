const { getOptions, urlToRequest } = require("loader-utils");
const { validate } = require("schema-utils");
module.exports = (source, map, meta) => {
	const callback = this.async();
	const options = getOptions(this) || {};
	// 异步 loader
	allback(null, someSyncOperation(content), map, meta);
	return;
};
