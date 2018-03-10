var request = require('request');
global.log4js = require('log4js')
global.log4js.configure('./config/log4js.json');
var logger = global.log4js.getLogger("[PropertiesService]");

global.jaConectou = false;

function PropertiesService() {
};

module.exports = function () {};
