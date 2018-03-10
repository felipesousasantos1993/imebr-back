var assert = require('assert');
var http = require('http');
var request = require('request');
var app  = require('./config/express')();
var MensagemDTO = require('./app/dto/MensagemDTO');
var logger = global.log4js.getLogger("[test]");
var  Utils = require('./app/helper/Utils')();
var DateDiff = require('date-diff');
var server;

var modalidade;
var objFila;


before(function() {
    server = app.listen(8081, function(){
        logger.debug("Servidor iniciado...");
    });

    app.use(function(req, res) {
        res.status(404);
        res.send(new MensagemDTO(404, 1, "Not found", "Serviço não mapeado no servidor."));
    });
});

after(function() {
    server.close(function() {
        logger.debug('Finalizando HTTP Server');
    });
});