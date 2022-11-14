const { getOptions, urlToRequest } = require("loader-utils");
const { validate } = require("schema-utils");

const schema = {
  type: "object",
  properties: {
    test: {
      type: "string",
    },
  },
};

module.exports = function (source, map, meta) {
  console.log("map", map);
  console.log("meta", meta);
  // 加载 options
  const options = getOptions(this) || {};
  console.log("options1", options);
  console.log("source1", source);
  source = source += "export const c = 3;";

  console.log("The request path", urlToRequest(this.resourcePath));

  return source;
};
