const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
} = require("tapable");

// // 初始化同步钩子
// const hook = new SyncHook(["contry", "city", "people"]);

// // 注册/订阅事件
// hook.tap("event-1", (contry, city, people) => {
// 	console.log("event-1:", contry, city, people);
// });

// hook.tap("event-2", (contry, city, people) => {
// 	console.log("event-2:", contry, city, people);
// });

// // 执行订阅事件回调
// // 钩子上目前注册了 2 个回调，它们会按顺序被触发
// hook.call("China", "Shenzhen", "VJ");

// 初始化同步钩子
const hook = new SyncHook(["contry", "city", "people"]);

// 注册/订阅事件
hook.tap("event-1", (contry, city, people) => {
	console.log("event-1:", contry, city, people);
});

hook.tap("event-2", (contry, city, people) => {
	console.log("event-2:", contry, city, people);
});

// 执行订阅事件回调
// 钩子上目前注册了 2 个回调，它们会按顺序被触发
hook.call("China", "Shenzhen", "VJ");

//
// const hook = new SyncBailHook(["arg1", "arg2", "arg3"]);
// hook.tap("flag1", (...args) => {
// 	console.log("flag1", ...args);
// 	return true;
// });
// hook.tap("flag2", (...args) => {
// 	console.log("flag2", ...args);
// });

// hook.call("123", "456", "789");

//
// const hook = new SyncWaterfallHook(["arg1", "arg2", "arg3"]);
// hook.tap("flag1", (...args) => {
// 	console.log("flag1", ...args);
// 	return true;
// });
// hook.tap("flag2", (...args) => {
// 	console.log("flag2", ...args);
// 	return "two";
// });
// hook.tap("flag3", (...args) => {
// 	console.log("flag3", ...args);
// 	return "second";
// });

// hook.call("123", "456", "789");

// (function anonymous(contry, city, people) {
// 	"use strict";
// 	var _context;
// 	var _x = this._x;
// 	var _fn0 = _x[0];
// 	_fn0(contry, city, people);
// 	var _fn1 = _x[1];
// 	_fn1(contry, city, people);
// });

// hook.tap("event-3", (contry, city, people) => {
// 	console.log("event-3:", contry, city, people);
// });

// hook.tap("event-4", (contry, city, people) => {
// 	console.log("event-4:", contry, city, people);
// });

// // 执行订阅事件回调
// // 钩子上目前注册了 4 个回调，它们会按顺序被触发
// hook.call("USA", "NYC", "Trump");

// const hook = new SyncBailHook(["arg1", "arg2", "arg3"]);

// // 注册事件
// hook.tap("flag1", (arg1, arg2, arg3) => {
// 	console.log("flag1:", arg1, arg2, arg3);
// 	// 存在返回值 阻断flag2事件的调用
// 	// return true;
// });

// hook.tap("flag2", (arg1, arg2, arg3) => {
// 	console.log("flag2:", arg1, arg2, arg3);
// });

// // 调用事件并传递执行参数
// hook.call("19Qingfeng", "wang", "haoyu");

// const hook = new AsyncParallelHook(["arg1", "arg2", "arg3"]);
// hook.tapAsync("fn1", (arg1, arg2, arg3, callback) => {
// 	setTimeout(() => {
// 		console.log("fn1", arg1, arg2, arg3, callback);
// 		callback();
// 	});
// });
// hook.tapPromise("fn2", (...args) => {
// 	return new Promise((rs, rj) => {
// 		console.log("fn2", args);
// 		rs(args);
// 	});
// });

// // hook.callAsync(1, 2, 3, () => {
// // 	console.log("全部执行完毕 done");
// // });
// hook.promise(1, 2, 3).then(() => {
// 	console.log("全部执行完毕 done");
// });

// const hook = new AsyncSeriesHook(["arg1", "arg2", "arg3"]);
// hook.tapAsync("fn1", (arg1, arg2, arg3, callback) => {
// 	setTimeout(() => {
// 		console.log("fn1", arg1, arg2, arg3, callback);
// 		callback();
// 	});
// });
// hook.tapPromise("fn2", (...args) => {
// 	return new Promise((rs, rj) => {
// 		console.log("fn2", args);
// 		rs(args);
// 	});
// });

// hook.callAsync(1, 2, 3, () => {
// 	console.log("全部执行完毕 done");
// });
// hook.promise(1, 2, 3).then(() => {
// 	console.log("全部执行完毕 done");
// });

// class Car {
// 	constructor() {
// 		this.hooks = {
// 			syncHook: new SyncHook(),
// 			asyncParallelHook: new AsyncParallelHook([
// 				"source",
// 				"target",
// 				"routesList"
// 			]),
// 			asyncSeriesHook: new AsyncSeriesHook(["source", "target", "routesList"])
// 		};
// 	}
// 	/* ... */
// }

// const myCar = new Car();

// myCar.hooks.syncHook.intercept({
// 	call: (...arg) => {
// 		console.log("Starting to call hooks");
// 	},
// 	register: tapInfo => {
// 		console.log(`${tapInfo?.name} is doing its job`, tapInfo);
// 		return tapInfo;
// 	}
// });

// // Use the tap method to add a consument
// myCar.hooks.syncHook.tap("WarningLampPlugin", () => {
// 	console.log("WarningLampPlugin is call");
// });
// myCar.hooks.syncHook.tap("WarningLampPlugin2", () => {
// 	console.log("WarningLampPlugin2 is call");
// });
// myCar.hooks.syncHook.call();

// console.time("timer");

// myCar.hooks.asyncParallelHook.tapPromise("GoogleMapsPlugin", (...args) => {
// 	console.log(args);
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(true);
// 		}, 1000);
// 	});
// });
// myCar.hooks.asyncParallelHook.tapAsync(
// 	"BingMapsPlugin",
// 	(arg1, arg2, arg3, callback) => {
// 		console.log(arg1, arg2, arg3);
// 		setTimeout(() => {
// 			callback();
// 		}, 1000);
// 	}
// );

// myCar.hooks.asyncParallelHook.callAsync(
// 	"source",
// 	"target",
// 	"routesList",
// 	() => {
// 		console.log("全部执行完毕 done");
// 		console.timeEnd("timer");
// 	}
// );

// console.time("timer");

// myCar.hooks.asyncSeriesHook.tapPromise("GoogleMapsPlugin", (...args) => {
// 	console.log(args);
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(true);
// 		}, 1000);
// 	});
// });
// myCar.hooks.asyncSeriesHook.tapAsync(
// 	"BingMapsPlugin",
// 	(arg1, arg2, arg3, callback) => {
// 		console.log(arg1, arg2, arg3);
// 		setTimeout(() => {
// 			callback();
// 		}, 1000);
// 	}
// );

// myCar.hooks.asyncSeriesHook.callAsync("source", "target", "routesList", () => {
// 	console.log("全部执行完毕 done");
// 	console.timeEnd("timer");
// });
