
zdefine(function (zrequire) {
  const moduleB = zrequire('./b.js')
  console.log(`a.js, import moduleB=${JSON.stringify(moduleB)}`);
  return "I'm A";
});
