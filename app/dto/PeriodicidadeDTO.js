
function PeriodicidadeDTO(descricao, 
                          diaSemana, 
                          frequencia,
                          quantidadeFrequencia,
                          numeroInicioMesVigencia,
                          numeroFimMesVigencia, 
                          listaMes){
    this.descricao = descricao;
    this.diaSemana = diaSemana;
    this.frequencia = frequencia;
    this.quantidadeFrequencia = quantidadeFrequencia;
    this.numeroInicioMesVigencia = numeroInicioMesVigencia;
    this.numeroFimMesVigencia = numeroFimMesVigencia;
    this.listaMes = listaMes;
    
}

module.exports = PeriodicidadeDTO;