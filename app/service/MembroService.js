var request = require('request');
var MembroDAO = require('../dao/MembroDAO')

function MembroService() { }


MembroService.prototype.listarMembro = function (callback) {
    var membroDAO = new MembroDAO();
    membroDAO.listarMembros(function (erros, resultado) {
        if (erros) {
            callback(erros, null)
        } else {
            callback(null, resultado);
        }
    });
};

MembroService.prototype.incluir = function (membro, callback) {
    var membroDAO = new MembroDAO();
    membroDAO.incluir(membro, function (erros, resultado) {
        if (erros) {
            callback(erros, null)
        } else {
            callback(null, resultado);
        }
    });
};

module.exports = MembroService;