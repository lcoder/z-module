
zdefine(function (zrequire) {
  const moduleA = zrequire('./a.js');
  console.log(moduleA);
  return "I'm B";
});
