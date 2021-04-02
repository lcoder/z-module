


CommonJS 模块加载过程是同步阻塞性地加载，在模块代码被运行前就已经写入了 cache，同一个模块被多次 require 时只会执行一次，重复的 require 得到的是相同的 exports 引用

https://juejin.cn/post/6844904080955932680


https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/