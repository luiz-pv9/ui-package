// Make sure we don't override the existing 'UI' global.
let noConflict = window.UI;

window.UI = {
  version: '0.0.1', 
  noConflict
};

UI.configProperties = {};

UI.setConfig = function(key, value) {
  UI.configProperties[key] = value;
  return value;
};

UI.getConfig = function(key, defaultValue) {
  return UI.configProperties[key] || defaultValue;
};

UI.Button = require('./components/ui-button');