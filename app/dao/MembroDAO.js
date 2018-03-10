var conection = require('../infra/connectionFactory.js');
var Sequelize = require("sequelize");
var logger = global.log4js.getLogger("[MembroDAO.js]");

var model;
var conexao;

function MembroDAO() {
    model = require('../models/Membro');
}

MembroDAO.prototype.listarMembros = function (callback) {

    model.getMembro().findAll({})
        .then(function (resultado) {
            callback(null, resultado);
        }).catch(function (error) {
            logger.error('Erro ao consultar.', error);
            conection.testConexao();
            callback(error, null);
        });
}

MembroDAO.prototype.incluir = function (membro, callback) {

    conexao = conection.getSequelize();

    conexao.transaction({ autocommit: false }, function (t1) {
        return model.getMembro().create({
            nome: membro.nome,
            dataNascimento: membro.dataNascimento,
            telefone: membro.telefone,
            celular: membro.celular,
            endereco: membro.endereco,
            numero: membro.numero,
            bairro: membro.bairro,
            cidade: membro.cidade,
            uf: membro.uf

        }, { transaction: t1 })
            .then(function (membroSalvo) {
                callback(null, membroSalvo);
            }).catch(function (err) {
                logger.error('Erro ao incluir.', err);
                conection.testConexao();
                callback(null, null);
            });
    });
}

module.exports = MembroDAO;