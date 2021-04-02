
zdefine(function (zrequire) {
  const moduleA = zrequire('./a.js');
  console.log(`b.js, import moduleA=${JSON.stringify(moduleA)}`);
  return "I'm B";
});
