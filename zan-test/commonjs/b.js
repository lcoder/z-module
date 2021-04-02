const moduleA = require('./a.js');

console.log(`b.js, import moduleA=${JSON.stringify(moduleA)}`);

module.exports = "I'm B";
