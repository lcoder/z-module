require('./z-module');



console.log(`
---------------commonjs演示开始---------------
`);
require('./zan-test/commonjs/a');
console.log(`
---------------commonjs演示执行完毕---------------\n\n\n
`);


console.log(`
---------------zmodule演示开始---------------
`);
require('./zan-test/z-module/a');
console.log(`
---------------zmodule演示结束---------------\n
执行完，stack的结果：\n
`, stack);