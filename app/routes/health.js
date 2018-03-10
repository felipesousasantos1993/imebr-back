var express = require('express');
var app = express();
var conection = require('../infra/connectionFactory.js');
var Sequelize = require("sequelize");

module.exports = function (app) {
    // Responde status 200 (Ok) para monitoração do serviço
    app.get('/health', function (req, res) {
        res.status(200);        
        res.send('OK');
        return;
    });
};