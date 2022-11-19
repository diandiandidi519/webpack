module.exports = content => {
	console.log("a loader");
	return content;
};

module.exports.pitch = (remainingRequest, precedingRequest, data) => {
	console.log(remainingRequest, precedingRequest, data);
	console.log("a pitching");
};
