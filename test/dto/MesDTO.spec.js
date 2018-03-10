const chai = require('chai');
const assert = chai.assert;
const MesDTO = require('../../app/dto/MesDTO');

describe('Testar MesDTO', function () {
  // Instancia o objeto a ser testado
  const idPeriodicidadeMes = 0;
  const numeroMes = 0;
  const mesDTO = new MesDTO(idPeriodicidadeMes, numeroMes);

  // Validações unitárias da classe
  it('Deve ser uma função.', function () {
    assert.isFunction(MesDTO);
  });

  it('Deve instanciar um objeto corretamente.', function () {
    assert.instanceOf(mesDTO, MesDTO);
  });

  it('Deve atribuir os parâmetros recebidos corretamente.', function () {
    assert.equal(mesDTO.idPeriodicidadeMes, idPeriodicidadeMes);
    assert.equal(mesDTO.numeroMes, numeroMes);
  });
});
