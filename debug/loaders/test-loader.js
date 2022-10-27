const { getOptions } = require("loader-utils");
module.exports = function (source) {
  // 加载 options
  const options = getOptions(this) || {};
  console.log("options", options);
  console.log("source", source);

  return source;
};
