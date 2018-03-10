const chai = require('chai');
const assert = chai.assert;
const DataSorteioDTO = require('../../app/dto/DataSorteioDTO');

describe('Testar DataSorteioDTO', function () {
  // Instancia o objeto a ser testado 
  const dataAtual = Date.now;
  const idTipoSorteio = 0;
  const modalidadeID = 0;
  const multiplo = 0;
  const idTitulo = 0;
  const valor = 0.00;
  const ordem = 0;
  const dataSorteioDTO = new DataSorteioDTO(
    dataAtual,
    idTipoSorteio,
    modalidadeID,
    multiplo,
    idTitulo,
    valor,
    ordem);

    // Validações unitárias da classe.
  it('Deve ser uma função.', function () {
    assert.isFunction(DataSorteioDTO);
  });

  it('Deve instanciar um objeto corretamente.', function () {
    assert.instanceOf(dataSorteioDTO, DataSorteioDTO);
  });

  it('Deve atribuir os parâmetros recebidos corretamente.', function () {
    assert.equal(dataSorteioDTO.dataAtual, dataAtual);
    assert.equal(dataSorteioDTO.idTipoSorteio, idTipoSorteio);
    assert.equal(dataSorteioDTO.modalidadeID, modalidadeID);
    assert.equal(dataSorteioDTO.multiplo, multiplo);
    assert.equal(dataSorteioDTO.idTitulo, idTitulo);
    assert.equal(dataSorteioDTO.valor, valor);
    assert.equal(dataSorteioDTO.ordem, ordem);
  });
});
