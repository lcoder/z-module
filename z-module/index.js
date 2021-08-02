const stackTrace = require('stack-trace');
const path = require('path');

const cache = [];

globalThis.stack = cache;

globalThis.zrequire = function (relativePath) {
  const trace = stackTrace.get();
  const zModulePath = trace[1].getFileName();
  const zModuleDir = path.dirname(zModulePath);
  const resolvedPath = path.resolve(zModuleDir, relativePath);
  const target = cache.find(i => i.path === resolvedPath);
  if (target) {
    return target.exports;
  }
  require(resolvedPath);
  return cache.find(i => i.path === resolvedPath)?.exports;
}

globalThis.zdefine = function(moduleCallback) {
  const trace = stackTrace.get();
  const zModulePath = trace[1].getFileName();
  const innerModule = {
    path: zModulePath,
    exports: {},
  }
  cache.push(innerModule)
  innerModule.exports = moduleCallback(zrequire);
}
