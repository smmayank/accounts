var modules = [];

function addModule(n, p) {
  if (!n) {
    return console.error(new Error('Add module failed name missing'));
  }
  if (!p) {
    return console.error(new Error('Add module failed path missing'));
  }
  var module = {
    name: n,
    path: p
  }
  modules.push(module);
}

addModule('config', './config');
addModule('utils', './utils');
addModule('models', './models');

module.exports = {
  load: function() {
    modules.forEach(function(module) {
      console.log('Loading module %s', module.name);
      if (!module.name) {
        return console.error(new Error(module + ' does noot contain name'));
      }
      if (!module.path) {
        return console.error(new Error('module ' + module.name + ' does noot contain path'));
      }
      global[module.name] = require(module.path);
    });
  }
}
