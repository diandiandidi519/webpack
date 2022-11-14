const { AsyncSeriesHook, SyncHook } = require("tapable");
//创建类
class Compiler {
	constructor() {
		this.hooks = {
			run: new AsyncSeriesHook(["compiler"]), //异步钩子
			compile: new SyncHook(["params"]) //同步钩子
		};
	}
	run() {
		//执行异步钩子
		this.hooks.run.callAsync(this, err => {
			this.compile(onCompiled);
		});
	}
	compile() {
		//执行同步钩子 并传参
		this.hooks.compile.call(params);
	}
}
module.exports = Compiler;
