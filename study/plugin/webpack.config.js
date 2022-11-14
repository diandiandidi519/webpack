// // 导入node中内置的path模块
// const path = require("path");
// const HelloPlugin = require('./plugins/hello-plugin.js');
// // 导出webpack配置
// module.exports = {
// 	// 当前debug目录
// 	context: __dirname,
// 	// development模式
// 	mode: "development",
// 	// 配置source-map
// 	devtool: "source-map",
// 	// 入口文件设置为src文件下的index.js
// 	entry: "./src/index.js",
// 	// 出口文件在debug文件夹下dist文件夹
// 	output: {
// 		path: path.join(__dirname, "./dist")
// 	}
// 	// 配置loader
// 	module: {
// 	  rules: [
// 	    {
// 	      test: /\.js$/,
// 	      use: ["babel-loader"],
// 	      exclude: /node_modules/,
// 	    },
// 			{
// 			  test: /.js$/i,
//         use: [
//           {
//             loader: "test-loader",
//           },
//         ],
//       },
// 	  ],
// 	},
// 	resolveLoader: {
//     modules: ["node_modules", path.resolve(__dirname, "loaders")],
//   },
// 	plugins: [new HelloPlugin({ options: true })],
// };

// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const HelloPlugin = require("./plugins/hello-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
	entry: "./src/index.js",
	// devtool: "eval-source-map",
	mode: "none",
	output: {
		path: path.resolve(__dirname, "dist"),
		iife: false,
		pathinfo: "verbose"
	},
	// devServer: {
	//   open: true,
	//   host: "localhost",
	// },
	plugins: [
		new HtmlWebpackPlugin({
			// template: "index.html"
		}),
		new HelloPlugin()
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset"
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
