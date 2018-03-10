const chai = require('chai');
const MensagemDTO = require('../../app/dto/MensagemDTO');
const assert = chai.assert;

describe('Testar Mensagem DTO', function () {
  it('deve ser uma função', function () {
    assert.isFunction(MensagemDTO);
  });
  it('deve definir a instância corretamente', function () {
    const mensagemdto = new MensagemDTO(0, 0, 0, 'mensagem de erro');
    assert.instanceOf(mensagemdto, MensagemDTO);
  });
  it('deve setar as propriedades da instância corretamente', function () {
    const mensagemdto = new MensagemDTO(0, 0, 0, 'mensagem detalhada');
    assert.equal(mensagemdto.codigoHttp, 0);
    assert.equal(mensagemdto.codigo, 0);
    assert.equal(mensagemdto.mensagem, 0);
    assert.equal(mensagemdto.mensagemDetalhada, 'mensagem detalhada');
  });
});
