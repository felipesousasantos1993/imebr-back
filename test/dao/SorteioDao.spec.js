const chai = require("chai");
const assert = chai.assert;
let SorteioDAO;
var sorteioDAO;

describe("Iniciar serviço SorteioDAO", function() {
  describe("Testar SorteioDAO", function() {
    before(function(done) {
      setTimeout(function() {
        SorteioDAO = require("../../app/dao/SorteioDAO");
        sorteioDAO = new SorteioDAO();
        done();
      }, 1000);
    });
    it("deve ser uma função", function(done) {
      setTimeout(function() {
        assert.isFunction(SorteioDAO);
        done();
      }, 1000);
    });
    it("deve possuir função consultarSorteioPorData", function(done) {
      setTimeout(function() {
        assert.isFunction(sorteioDAO.consultarSorteioPorData);
        done();
      }, 3000);
    });
    it("deve possuir funcao incluir", function(done) {
      setTimeout(function() {
        assert.isFunction(sorteioDAO.incluir);
        done();
      }, 3000);
    });
    /* it('deve verificar parâmetros na função consultarSorteioPorData', function (done) {
      const sorteioDAO = new SorteioDAO();
      sorteioDAO.consultarSorteioPorData({
        dataSorteio: '2014-02-01',
        idTipoSorteio: 1
      }, function (erro, resultSet) {
        // console.log('erro');
      });
      // this.timeout(1050);
    }, 14000); */
    it("deve verificar parametros na funcao incluir", function() {
      const sorteioDAO = new SorteioDAO();
      sorteioDAO.incluir(
        {
          idTipoSorteio: 1
        },
        function(erro, resultSet) {
          // console.log('erro');
        }
      );
      this.timeout(1050);
    });
    it("deve retornar o resultado da funcao consultarSorteioPorData", function() {
      const sorteioDAO = new SorteioDAO();
      sorteioDAO.consultarSorteioPorData(
        {
          dataSorteio: "2014-02-01",
          idTipoSorteio: 1
        },
        function(erro, resultSet) {
          // console.log('erro');
        }
      );
    });
    it("deve verificar tratamento de erro na funcao consultarSorteioPorData", function() {
      const sorteioDAO = new SorteioDAO();
      sorteioDAO.consultarSorteioPorData(
        {
          dataSorteio: "0000-00-00",
          idTipoSorteio: 0
        },
        function(erro, resultSet) {
          console.log("erro");
        }
      );
    });
    /* it('Deve verificar tratamento de erro na funcao incluir', function () {
      const sorteioDAO = new SorteioDAO();
      sorteioDAO.incluir(
        
        {
          idTipoSorteio: 0
        }, function (erro, resultSet) {
          console.log('erro');
        });
    }); */
  });
});
