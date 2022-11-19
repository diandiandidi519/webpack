const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const config = {
	entry: "./src/index.js",
	mode: "none",
	output: {
		path: path.resolve(__dirname, "dist"),
		iife: false
		// pathinfo: "verbose"
	},

	module: {
		rules: [
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset"
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
			{
				test: /.js$/i,
				use: [
					// {
					// 	loader: "test-loader",
					// 	options: {
					// 		params: {
					// 			test: "123"
					// 		}
					// 	}
					// }
					// {
					// 	loader: "sync-loader",
					// 	options: {
					// 		params: {
					// 			test: "456"
					// 		}
					// 	}
					// }
					"a-loader",
					"b-loader"
					// "c-loader"
				]
			}
		]
	},
	resolveLoader: {
		modules: ["node_modules", path.resolve(__dirname, "loaders")]
	},
	optimization: {
		usedExports: true
	}
};

module.exports = config;
