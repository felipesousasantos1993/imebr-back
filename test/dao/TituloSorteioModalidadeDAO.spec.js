const chai = require("chai");
const assert = chai.assert;
var TituloSorteioModalidadeDAO = require("../../app/dao/TituloSorteioModalidadeDAO");
var tituloSorteioModalidadeDAO;
var propertiesService;

describe("Teste da Classe TituloSorteioModalidadeDAO", function() {
  before(function(done) {
    setTimeout(function() {
      propertiesService = require("../../app/properties/PropertiesService");
      tituloSorteioModalidadeDAO = new TituloSorteioModalidadeDAO();
      done();
    }, 1000);
  });
  
  it("deve ser uma função", function(done) {
    setTimeout(function() {
      assert.isFunction(TituloSorteioModalidadeDAO);
      done();
    }, 1000);
  });

  it("deve possuir uma função verificarSeExisteTituloSorteioModalidade", function(done) {
    setTimeout(() => {
      assert.isFunction(tituloSorteioModalidadeDAO.verificarSeExisteTituloSorteioModalidade);
      done();
    }, 1000);
  });

  it("deve possuir uma função incluir", function(done) {
    setTimeout(() => {
      assert.isFunction(tituloSorteioModalidadeDAO.incluir);
      done();
    }, 1000);
  });
});
