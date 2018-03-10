var conection = require('../infra/connectionFactory.js');
var Sequelize = require("sequelize");
var logger = global.log4js .getLogger("[SorteioModalidadeDAO]");

var model;

var conexao;

function SorteioModalidadeDAO() {
    model = require('../models/Model');
}

SorteioModalidadeDAO.prototype.verificarSeExisteSorteioModalidade = function (param, callback) {
    var retorno = {};
    retorno.isErro = false;
    model.getSorteioModalidade().find({
        where: {
            idSorteio: param.idSorteio,
            idModalidade: param.modalidadeID
        }
    })
        .then(function (resultado) {
            retorno.isOk = true;
            retorno.body = resultado;
            callback(retorno);
        }).catch(function (error) {
            retorno.isErro = true;
            callback(retorno);
            logger.error('Erro ao verificar Se Existe Sorteio Modalidade: ', error);
            conection.testConexao();
        });
}

SorteioModalidadeDAO.prototype.incluir = function (param, callback) {

    conexao = conection.getSequelize();

    conexao.transaction({ autocommit: false }, function (t1) {
        return model.getSorteioModalidade().create({
            idSorteio: param.idSorteio,
            idModalidade: param.modalidadeID,
        }, { transaction: t1 })
            .then(function (sorteioModalidadeSaved) {

               /* if (sorteioModalidadeSaved != null) {
                    logger.info('Registro incluído na base de dados!')
                }*/

                callback(null, sorteioModalidadeSaved);
            }).catch(function (error) {
                logger.error('Erro ao incluir Sorteio Modalidade: ', error);
                conection.testConexao();
                callback(null, 'sorteio_modalidade_cadastrado');
            });
    });
}

module.exports = SorteioModalidadeDAO;