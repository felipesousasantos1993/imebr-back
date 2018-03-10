var conection = require('../infra/connectionFactory.js');
var Sequelize = require("sequelize");
var conexao = conection.getSequelize();

var Membro = conexao.define('Membro',{
  idMembro:{
     type: Sequelize.BIGINT,
     autoIncrement: true,
     primaryKey:true,
     field:'ID_MEMBRO'
  },
  nome:{
      type:Sequelize.STRING,
      field:'NOME'
  },
  dataNascimento:{
    type: Sequelize.DATE,
    field: 'DATA_NASCIMENTO'
  },
  telefone:{
     type: Sequelize.STRING,
     field:'TELEFONE'
  },
  celular:{
    type: Sequelize.STRING,
    field: 'CELULAR'
  } ,
  endereco:{
    type: Sequelize.STRING,
    field: 'ENDERECO'
  },
  numero:{
    type: Sequelize.STRING,
    field: 'NUMERO'
  },
  bairro:{
    type: Sequelize.STRING,
    field: 'BAIRRO'
  },
  cidade:{
    type: Sequelize.STRING,
    field: 'CIDADE'
  },
  uf:{
    type: Sequelize.STRING,
    field: 'UF'
  },
  
},
{
  freezeTableName: true,
  timestamps: false,
  tableName: 'CRM_MEMBRO'
});



// Relacionamentos
//TituloSorteioModalidade.hasMany(SorteioModalidade,{foreignKey: 'ID_SORTEIO_MODALIDADE_SORTEIO', as: 'SorteioModalidade'});
//SorteioModalidade.belongsTo(Sorteio,{foreignKey: 'ID_SORTEIO'});


exports.getMembro = function() {
  return Membro;
}

/*exports.getSorteioModalidade = function() {
  return SorteioModalidade;
}

exports.getSorteio = function() {
  return Sorteio;
}*/


