var express = require('express');
var app = express();
var conection = require('../infra/connectionFactory.js');
var Sequelize = require("sequelize");

var MembroService = require("../service/MembroService");

module.exports = function (app) {


    app.get('/listar-membros', function (req, res) {
        var membroService = new MembroService();
        membroService.listarMembro(function (erros, resultado) {
            if (erros) {
                res.status(500);
            } else {
                res.status(200);
                res.send(resultado);
            }
        });
    });

    app.post('/incluir-membro', function (req, res) {
        var membro = req.body;
        if (!membro) {
            res.status(204).send('Membro não informado.');
            return;
        }
        var membroService = new MembroService();
        membroService.incluir(membro, function (erros, resultado) {
            if (erros) {
                res.status(500);
            } else {
                res.status(200);
                resultado.mensagem = 'Membro incluído com sucesso!';
                res.send(resultado);
            }
        });
    });
};