const chai = require('chai');
const assert = chai.assert;
const MensagemDTO = require('../../app/dto/MensagemDTO');

describe('Testar MensagemDTO', function () {
  // Instancia o objeto a ser testado
  const codHttp = 200;
  const codigo = 0;
  const mensagem = 0;
  const mensagemDetalhada = 0;
  const mensagemDTO = new MensagemDTO(codHttp, codigo, mensagem, mensagemDetalhada);

  // Validações unitárias da classe
  it('Deve ser uma função.', function () {
    assert.isFunction(MensagemDTO);
  });

  it('Deve instanciar um objeto corretamente.', function () {
    assert.instanceOf(mensagemDTO, MensagemDTO);
  });

  it('Deve atribuir os parâmetros recebidos corretamente.', function () {
    assert.equal(mensagemDTO.codigoHttp, codHttp);
    assert.equal(mensagemDTO.codigo, codigo);
    assert.equal(mensagemDTO.mensagem, mensagem);
    assert.equal(mensagemDTO.mensagemDetalhada, mensagemDetalhada);
  });
});
