import moduleA from './a.mjs';

console.log(`b.js, import moduleA=${JSON.stringify(moduleA)}`);

export default "I'm B";
