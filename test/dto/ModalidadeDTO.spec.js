const chai = require('chai');
const assert = chai.assert;
const ModalidadeDTO = require('../../app/dto/ModalidadeDTO');

describe('Testar ModalidadeDTO', function () {
  // Instancia o objeto a ser testado
  const idModalidade = 0;
  const descModalidade = 'Descrição modalidade';
  const quantidadeSorteios = 0;
  const valorMultiplo = 0;
  const valorPremio = 0;
  const descValorPremio = 'Descricao valor premio';
  const selecao = 0;
  const quantidadeNumerosContemplados = 0;
  const operacao = 0;
  const valorOperacao = 0;
  const tipoSorteio = 0;
  const Periodicidade = 0;

  const modalidadeDTO = new ModalidadeDTO(idModalidade,
    descModalidade,
    quantidadeSorteios,
    valorMultiplo,
    valorPremio,
    descValorPremio,
    selecao,
    quantidadeNumerosContemplados,
    operacao,
    valorOperacao,
    tipoSorteio,
    Periodicidade);

    // Validações unitárias da classe
  it('Deve ser uma função.', function () {
    assert.isFunction(ModalidadeDTO);
  });

  it('Deve instanciar um objeto corretamente.', function () {
    assert.instanceOf(modalidadeDTO, ModalidadeDTO);
  });

  it('Deve atribuir os parâmetros recebidos corretamente.', function () {
    assert.equal(modalidadeDTO.idModalidade, idModalidade);
    assert.equal(modalidadeDTO.descModalidade, descModalidade);
    assert.equal(modalidadeDTO.quantidadeSorteios, quantidadeSorteios);
    assert.equal(modalidadeDTO.valorMultiplo, valorMultiplo);
    assert.equal(modalidadeDTO.valorPremio, valorPremio);
    assert.equal(modalidadeDTO.descValorPremio, descValorPremio);
    assert.equal(modalidadeDTO.selecao, selecao);
    assert.equal(modalidadeDTO.quantidadeNumerosContemplados, quantidadeNumerosContemplados);
    assert.equal(modalidadeDTO.operacao , operacao);
    assert.equal(modalidadeDTO.valorOperacao, valorOperacao);
    assert.equal(modalidadeDTO.tipoSorteio, tipoSorteio);
    assert.equal(modalidadeDTO.Periodicidade, Periodicidade);
  });
});
