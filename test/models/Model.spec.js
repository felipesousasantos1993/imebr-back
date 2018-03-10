const chai = require('chai');
const Model = require('../../app/models/Model');
const assert = chai.assert;

describe('Testar Modelo', function () {
  it('deve conter uma função getCliente', function () {
    assert.isFunction(Model.getTituloSorteioModalidade);
  });

  it('deve definir o modelo corretamente', function () {
    const model = Model.getTituloSorteioModalidade().rawAttributes;
    assert.property(model, 'idTituloSorteioModalidade', 'A propriedade idTituloSorteioModalidade existe');
    assert.property(model, 'idTitulo', 'A propriedade idTitulo existe');
    assert.property(model, 'idSorteioModalidade', 'A propriedade idSorteioModalidade existe');
    assert.property(model, 'valorPremio', 'A propriedade valorPremio existe');
    assert.property(model, 'flgApto', 'A propriedade flgApto existe');
    assert.property(model, 'flgPremiado', 'A propriedade flgPremiado existe');
    assert.property(model, 'ordem', 'A propriedade ordem existe');
  });
});
