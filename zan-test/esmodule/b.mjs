import moduleA from './a.mjs';

try {
  console.log(`b.mjs, import moduleA=${moduleA}`);
} catch (e) {
  console.log(e.toString());
  console.log(`b.mjs, import moduleA=${undefined}`);
}

// setTimeout(() => {
//   console.log(`after 1000ms!!!b.mjs, import moduleA=${moduleA}`);
// }, 1000);

export default "I'm B";
