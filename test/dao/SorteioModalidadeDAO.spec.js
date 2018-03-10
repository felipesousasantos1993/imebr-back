const rewire = require("rewire");
const chai = require("chai");
const assert = chai.assert;
let SorteioModalidadeDAO;

describe("Iniciar serviço Sorteio Modalidade DAO", function() {
  describe("Testar SorteioModalidadeDAO", function() {
    before(function(done) {
      setTimeout(function() {
        SorteioModalidadeDAO = require("../../app/dao/SorteioModalidadeDAO");
        done();
      }, 1000);
    });
    it("deve ser uma função", function(done) {
      setTimeout(function() {
        assert.isFunction(SorteioModalidadeDAO);
        done();
      }, 3000);
    });
    it(
      "deve conter uma funcão verificarSeExisteSorteioModalidade",
      function(done) {
        const sorteioModalidadeDAO = new SorteioModalidadeDAO();
        const param = { idSorteio: 143, idModalidade: 1 };
        assert.isFunction(
          sorteioModalidadeDAO.verificarSeExisteSorteioModalidade
        );
        setTimeout(function() {
          sorteioModalidadeDAO.verificarSeExisteSorteioModalidade(param);
        }, done());
        // this.timeout(1050);
      },
      14000
    );
    it(
      "deve conter uma funcão incluir",
      function(done) {
        const sorteioModalidadeDAO = new SorteioModalidadeDAO();
        assert.isFunction(sorteioModalidadeDAO.incluir);
        setTimeout(function(done) {
          sorteioModalidadeDAO.incluir(
            {
              idSorteio: 144,
              idModalidade: 1
            },
            function(erro, resultado) {
              //
            }
          );
        }, done());
      },
      14000
    );
    /*  it('Deve verificar os parâmetros na função verificarSeExisteSorteioModalidade', function (done) {
      const sorteioModalidadeDAO = new SorteioModalidadeDAO();
      const param = {idSorteio: 143, idModalidade: 1};
      const resultado = sorteioModalidadeDAO.verificarSeExisteSorteioModalidade(param,
        function (erro, resultado) {
          //
        });
      assert.equal(resultado.idSorteio, param.idSorteio);
      assert.equal(resultado.idModalidade, param.idModalidade);
    }, 14000); */
    /*
     ## A validação da parametrização da função incluir será realizada em outro ponto
    */
    /*  it('deve verificar os parâmetros na função incluir', function (done) {
      const sorteioModalidadeDAO = new SorteioModalidadeDAO();
      const param = {idSorteio: 143, idModalidade: 1};
      const resultado = sorteioModalidadeDAO.incluir(param,
        function (erro, resultado) {
        // console.log(erro);
        });
      console.log(resultado);
      // verificar como realizar a validação do retorno da query
      // assert.equal('', '');
    }); */
    /*  it('deve retornar o resultado da função verificarSeExisteSorteioModalidade', function (done) {
      const sorteioModalidadeDAO = new SorteioModalidadeDAO();
      const param = {idSorteio: 143, idModalidade: 1};
      const resultado = sorteioModalidadeDAO.verificarSeExisteSorteioModalidade(param);
      assert.equal(resultado.idModalidade, param.idModalidade);
      assert.equal(resultado.idSorteio, param.idSorteio);
    }, 14000); */
    /* it('deve verificar o tratamento de erro da funcao verificarSeExisteSorteioModalidade', function (done) {
      const sorteioModalidadeDAO = new SorteioModalidadeDAO();
      const param = {idSorteio: null, idModalidade: null};
      const resultado = sorteioModalidadeDAO.verificarSeExisteSorteioModalidade(param,
        function (erro, resultado) {
          //
        });
      assert.isNull(resultado.idSorteio);
      assert.isNull(resultado.idModalidade);
      
    }, 14000); */
  });
});
