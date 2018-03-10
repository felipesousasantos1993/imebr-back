 function ModalidadeDTO(idModalidade, 
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
                        Periodicidade){
    this.idModalidade = idModalidade;
    this.descModalidade = descModalidade;
    this.quantidadeSorteios = quantidadeSorteios;
    this.valorMultiplo = valorMultiplo;
    this.valorPremio = valorPremio;
    this.descValorPremio = descValorPremio;
    this.selecao = selecao;
    this.quantidadeNumerosContemplados = quantidadeNumerosContemplados;
    this.operacao = operacao;
    this.valorOperacao = valorOperacao;
    this.tipoSorteio = tipoSorteio;
    this.Periodicidade =Periodicidade;
    
}
 
module.exports = ModalidadeDTO;
 
 
 