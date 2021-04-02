const stackTrace = require('stack-trace');
const path = require('path');

const stack = [];

globalThis.stack = stack;

globalThis.zrequire = function (relativePath) {
  const trace = stackTrace.get();
  const zModulePath = trace[1].getFileName();
  const zModuleDir = path.dirname(zModulePath);
  const resolvedPath = path.resolve(zModuleDir, relativePath);
  const target = stack.find(i => i.path === resolvedPath);
  if (target) {
    return target.exports;
  }
  require(resolvedPath);
  return stack.find(i => i.path === resolvedPath)?.exports;
}

globalThis.zdefine = function(moduleCallback) {
  const trace = stackTrace.get();
  const zModulePath = trace[1].getFileName();
  const exports = moduleCallback(zrequire);

  const module = {
    path: zModulePath,
    exports,
  }

  stack.push(module)
}
