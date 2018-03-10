var conection = require('../infra/connectionFactory.js');
var Sequelize = require("sequelize");
var logger = global.log4js .getLogger("[TituloSorteioModalidadeDAO]");

var model;

var conexao;

function TituloSorteioModalidadeDAO() {
    model = require('../models/Model');
}

TituloSorteioModalidadeDAO.prototype.verificarSeExisteTituloSorteioModalidade = function (param, callback) {

    model.getTituloSorteioModalidade().find({
        where: {
            idTitulo: param.idTitulo,
            idSorteioModalidade: param.idSorteioModalidade
        }
    }).then(function (resultado) {
            callback(null, resultado);
        }).catch(function (error) {
            logger.error('request: ' , param);
            logger.error('Erro: ' , error);
            conection.testConexao();
             callback(error, null);
        });
}

TituloSorteioModalidadeDAO.prototype.incluir = function (param, callback) {

    conexao = conection.getSequelize();

    conexao.transaction({ autocommit: false }, function (t1) {
        return model.getTituloSorteioModalidade().create({
            idTitulo: param.idTitulo,
            idSorteioModalidade: param.idSorteioModalidade,
            valorPremio: param.valorPremio,
            flgApto: param.flgApto,
            ordem: param.ordem
        }, { transaction: t1 })
            .then(function (tituloSorteioModalidadeSaved) {
                callback(null, tituloSorteioModalidadeSaved);
             }).catch(function (err) {
                logger.error('request: ' ,param);
                logger.error('Erro ao criar Titulo Sorteio Modalidade: ', err);
                conection.testConexao();
                callback('titulo_sorteio_modalidade_cadastrado',null);
            });
    });
}

module.exports = TituloSorteioModalidadeDAO;