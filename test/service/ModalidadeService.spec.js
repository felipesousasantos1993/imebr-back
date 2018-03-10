const chai = require('chai');
const ModalidadeService = require('../../app/service/ModalidadeService');
const assert = chai.assert;

describe('Testar Retorno ModalidadeService', function () {
  it('deve ser uma função', function () {
    assert.isFunction(ModalidadeService);
  });
  it('deve definir a instância corretamente', function () {
    const modalidadeService = new ModalidadeService();
    assert.instanceOf(modalidadeService, ModalidadeService);
  });
});/*
  it('deve verificar obterModadlidade', function () {
    const modalidadeService = (new ModalidadeService()).obterModalidade(function(done, idPlano, error, response){  
    done();
  });
});*/