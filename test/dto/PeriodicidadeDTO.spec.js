const chai = require('chai');
const assert = chai.assert;
const PeriodicidadeDTO = require('../../app/dto/PeriodicidadeDTO');

describe('Testar MensagemDTO', function () {
  // Instancia o objeto a ser testado
  const descricao = 'Descrição Periodicidade';
  const diaSemana = 0;
  const frequencia = 0;
  const quantidadeFrequencia = 0;
  const numeroInicioMesVigencia = 0;
  const numeroFimMesVigencia = 0;
  const listaMes = 0;
  const periodicidadeDTO = new PeriodicidadeDTO(descricao,
    diaSemana,
    frequencia,
    quantidadeFrequencia,
    numeroInicioMesVigencia,
    numeroFimMesVigencia,
    listaMes);

    // Validações unitárias da classe
  it('Deve ser uma função.', function () {
    assert.isFunction(PeriodicidadeDTO);
  });

  it('Deve instanciar um objeto corretamente.', function () {
    assert.instanceOf(periodicidadeDTO, PeriodicidadeDTO);
  });

  it('Deve atribuir os parâmetros recebidos corretamente.', function () {
    assert.equal(periodicidadeDTO.descricao, descricao);
    assert.equal(periodicidadeDTO.diaSemana, diaSemana);
    assert.equal(periodicidadeDTO.frequencia, frequencia);
    assert.equal(periodicidadeDTO.quantidadeFrequencia, quantidadeFrequencia);
    assert.equal(periodicidadeDTO.numeroInicioMesVigencia, numeroInicioMesVigencia);
    assert.equal(periodicidadeDTO.numeroFimMesVigencia, numeroFimMesVigencia);
  });
});
