const chai = require('chai');
const assert = chai.assert;
const ResultadoSorteioDTO = require('../../app/dto/ResultadoSorteioDTO');

describe('Testar ResultadoSorteioDTO', function () {
  // Instancia o objeto a ser testado
  const idPlano = 0;
  const nomePlano = 'Nome Plano';
  const prazoCapitalizacao = 0;
  const descPrazoCapitalizacao = 0;
  const prazoCarencia = 0;
  const qtdeParcelas = 0;
  const valorMinimoParcela = 0;
  const valorMaximoParcela = 0;
  const idTipoPlano = 0;
  const idBancaRisco = 0;
  const qtdTituloSerie = 0;
  const planoSusep = 0;
  const listaModalidades = 0;

  const resultadoSorteioDTO = new ResultadoSorteioDTO(idPlano,
    nomePlano,
    prazoCapitalizacao,
    descPrazoCapitalizacao,
    prazoCarencia,
    qtdeParcelas,
    valorMinimoParcela,
    valorMaximoParcela,
    idTipoPlano,
    idBancaRisco,
    qtdTituloSerie,
    planoSusep,
    listaModalidades);

    // Validações unitárias da classe
  it('Deve ser uma função.', function () {
    assert.isFunction(ResultadoSorteioDTO);
  });

  it('Deve instanciar um objeto corretamente.', function () {
    assert.instanceOf(resultadoSorteioDTO, ResultadoSorteioDTO);
  });

  it('Deve atribuir os parâmetros recebidos corretamente.', function () {
    assert.equal(resultadoSorteioDTO.idPlano, idPlano);
    assert.equal(resultadoSorteioDTO.nomePlano, nomePlano);
    assert.equal(resultadoSorteioDTO.prazoCapitalizacao, prazoCapitalizacao);
    assert.equal(resultadoSorteioDTO.descPrazoCapitalizacao, descPrazoCapitalizacao);
    assert.equal(resultadoSorteioDTO.prazoCarencia, prazoCarencia);
    assert.equal(resultadoSorteioDTO.qtdeParcelas, qtdeParcelas);
    assert.equal(resultadoSorteioDTO.valorMinimoParcela, valorMinimoParcela);
    assert.equal(resultadoSorteioDTO.valorMaximoParcela, valorMaximoParcela);
    assert.equal(resultadoSorteioDTO.idTipoPlano, idTipoPlano);
    assert.equal(resultadoSorteioDTO.idBancaRisco, idBancaRisco);
    assert.equal(resultadoSorteioDTO.qtdTituloSerie, qtdTituloSerie);
    assert.equal(resultadoSorteioDTO.planoSusep, planoSusep);
    assert.equal(resultadoSorteioDTO.listaModalidades, listaModalidades);
  });
});
