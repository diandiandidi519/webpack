module.exports = content => {
	console.log("b loader");
	return content;
};

module.exports.pitch = (remainingRequest, precedingRequest, data) => {
	console.log(remainingRequest, precedingRequest, data);
	console.log("b pitching");
	return content;
};
