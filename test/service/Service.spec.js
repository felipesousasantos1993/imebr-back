const chai = require("chai");
const assert = chai.assert;
const Service = require("../../app/service/Service");
var service;

describe("Testar classe Service", function() {
  before(function(done) {
    setTimeout(() => {
      service = new Service();
      done();
    }, 1000);
  });
  it("deve ser uma função", function(done) {
    setTimeout(() => {
      assert.isFunction(Service);
      done();
    }, 1000);
  });
  it("deve definir a instância corretamente", function(done) {
    setTimeout(() => {
      assert.instanceOf(service, Service);
      done();
    }, 1000);
  });

  it('deve possuir uma funçaõ "get"', function(done) {
    setTimeout(() => {
      assert.isFunction(service.get);
      done();
    }, 1000);
  });

  it('deve possuir uma funcao "post"', function (done) {
    setTimeout(() => {
      assert.isFunction(service.post);
      done();
    }, 1000);
  });

  it('deve possuir uma funcao "delete"', function (done) {
    setTimeout(() => {
      assert.isFunction(service.delete);
      done();
    }, 1000);
  });
});
