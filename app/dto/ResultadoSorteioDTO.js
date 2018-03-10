function ResultadoSorteioDTO(idPlano, 				
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
                            listaModalidades
                            ){

this.idPlano = idPlano;
this.nomePlano=nomePlano;
this.prazoCapitalizacao=prazoCapitalizacao;
this.descPrazoCapitalizacao = descPrazoCapitalizacao;
this.prazoCarencia = prazoCarencia;
this.qtdeParcelas = qtdeParcelas;
this.valorMinimoParcela = valorMinimoParcela;
this.valorMaximoParcela = valorMaximoParcela;
this.idTipoPlano = idTipoPlano;
this.idBancaRisco = idBancaRisco;
this.qtdTituloSerie = qtdTituloSerie;
this.planoSusep = planoSusep;
this.listaModalidades = listaModalidades;

}

module.exports = ResultadoSorteioDTO;

