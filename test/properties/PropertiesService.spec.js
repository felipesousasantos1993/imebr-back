const chai = require('chai');
const request = require('request');
const PropertiesService = require('../../app/properties/PropertiesService');
const assert = chai.assert;

describe('Testar Retorno da Função PropertiesService', function () {
  it('deve conter uma função PropertiesService', function () {
    assert.isFunction(PropertiesService);
  });
  it('deve definir a instância corretamente', function () {
    const propertiesService = new PropertiesService();
    assert.instanceOf(propertiesService, PropertiesService);
  });

  describe('Testar Consulta de Sucesso no Retorno do serviço da Função - PropertiesService',
    function () {
      var statusCode;
      var resultado;
      before(function (done) {
        this.timeout(15000);
        request({
          url: 'http://util/properties?key=sor-gera-agenda',
          method: 'GET'
        }, function (body, error, response) {
          statusCode = response.statusCode;
          resultado = body;
          done();
        });
      });
    });
});
