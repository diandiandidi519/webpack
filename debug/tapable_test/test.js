// const { SyncHook } = require("tapable");


// // 创建实列
// const syncHook = new SyncHook(["name", "age"]);

// // 注册事件
// syncHook.tap("1", (name, age) => {
//   console.log("1", name, age);
// });
// syncHook.tap("2", (name, age) => {
//   console.log("2", name, age);
// });
// syncHook.tap("3", (name, age) => {
//   console.log("3", name, age);
// });

// // 触发事件，让监听函数执行
// syncHook.call("kongzhiEvent-1", 18);



// const { SyncBailHook } = require('tapable');

// // 创建实列

// const syncBailHook = new SyncBailHook(["name", "age"]);

// // 注册事件
// syncBailHook.tap("1", (name, age) => {
//   console.log("1", name, age);
// });

// syncBailHook.tap("2", (name, age) => {
//   console.log("2", name, age);
//   return '2';
// });

// syncBailHook.tap("3", (name, age) => {
//   console.log("3", name, age);
// });

// // 触发事件，让监听函数执行
// syncBailHook.call("kongzhiEvent-1", 18);


// const { SyncWaterfallHook } = require('tapable');

// // 创建实列
// const syncWaterfallHook = new SyncWaterfallHook(["name", "age"]);

// // 注册事件
// syncWaterfallHook.tap("1", (name, age) => {
//   console.log("第一个函数事件名称", name, age);
//   return '1';
// });

// syncWaterfallHook.tap("2", (data) => {
//   console.log("第二个函数事件名称", data);
//   return '2';
// });

// syncWaterfallHook.tap("3", (data) => {
//   console.log("第三个函数事件名称", data);
//   return '3';
// });

// // 触发事件，让监听函数执行
// const res = syncWaterfallHook.call("kongzhiEvent-1", 18);

// console.log(res);


// const { AsyncParallelHook } = require('tapable');

// // 创建实列
// const asyncParallelHook = new AsyncParallelHook(["name", "age"]);

// // 注册事件
// asyncParallelHook.tapAsync("1", (name, age, done) => {
//   setTimeout(() => {
//     console.log("1", name, age, new Date());
//     done();
//   }, 1000);
// });

// asyncParallelHook.tapAsync("2", (name, age, done) => {
//   setTimeout(() => {
//     console.log("2", name, age, new Date());
//     done();
//   }, 2000);
// });

// asyncParallelHook.tapAsync("3", (name, age, done) => {
//   setTimeout(() => {
//     console.log("3", name, age, new Date());
//     done();
//   }, 3000);
// });

// // 触发事件，让监听函数执行
// asyncParallelHook.callAsync("kongzhiEvent-1", 18, () => {
//   console.log('函数执行完毕');
// });



// const { AsyncParallelHook } = require('tapable');

// // 创建实列
// const asyncParallelHook = new AsyncParallelHook(["name", "age"]);

// // 注册事件
// asyncParallelHook.tapPromise("1", (name, age) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("1", name, age, new Date());
//     }, 1000);
//   });
// });

// asyncParallelHook.tapPromise("2", (name, age) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2", name, age, new Date());
//     }, 2000);
//   });
// });

// asyncParallelHook.tapPromise("3", (name, age) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("3", name, age, new Date());
//     }, 3000);
//   });
// });

// // 触发事件，让监听函数执行
// asyncParallelHook.promise("kongzhiEvent-1", 18);



const { AsyncSeriesHook } = require('tapable');

// 创建实列
const asyncSeriesHook = new AsyncSeriesHook(["name", "age"]);

// 注册事件
asyncSeriesHook.tapAsync("1", (name, age, done) => {
  setTimeout(() => {
    console.log("1", name, age, new Date());
    done();
  }, 1000);
});

asyncSeriesHook.tapAsync("2", (name, age, done) => {
  setTimeout(() => {
    console.log("2", name, age, new Date());
    done();
  }, 2000);
});

asyncSeriesHook.tapAsync("3", (name, age, done) => {
  setTimeout(() => {
    console.log("3", name, age, new Date());
    done();
  }, 3000);
});

// 触发事件，让监听函数执行
asyncSeriesHook.callAsync("kongzhiEvent-1", 18, () => {
  console.log('执行完成');
});
