class HelloPlugin {
	// 在构造函数中获取用户给该插件传入的配置
	constructor(options) {}
	// Webpack 会调用 HelloPlugin 实例的 apply 方法给插件实例传入 compiler 对象
	apply(compiler) {
		// 在emit阶段插入钩子函数，用于特定时机处理额外的逻辑；
		compiler.hooks.emit.tap("HelloPlugin", compilation => {
			// 在功能流程完成后可以调用 webpack 提供的回调函数；
		});
		// 如果事件是异步的，会带两个参数，第二个参数为回调函数，在插件处理完任务时需要调用回调函数通知webpack，才会进入下一个处理流程。
		compiler.hooks.emit.tapAsync("emit", function (compilation, callback) {
			// 支持处理逻辑
			// 处理完毕后执行 callback 以通知 Webpack
			// 如果不执行 callback，运行流程将会一直卡在这不往下执行
			callback();
		});
	}
}

module.exports = HelloPlugin;
