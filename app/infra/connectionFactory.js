var Sequelize = require("sequelize");
var sequelize = new Sequelize();
var logger = global.log4js.getLogger("[getSequelize]");


module.exports.getSequelize = function () {


  if (!global.jaConectou) {

    sequelize = new Sequelize('imebr', 'root', 'root', {
      host: 'localhost',
      port: '3306',
      dialect: 'mysql',
      logging: false,
      benchmark: true,
      username: 'root',
      password: 'root'
    });
    global.jaConectou = true;

  }

  // logger.debug('ja existe conexao ativa, nao carregar nova conexao');

  return sequelize;
}

module.exports.testConexao = function () {
  this.getSequelize()
    .authenticate()
    .then(function (err) {
      logger.debug('A conexão foi estabelecida com êxito.');
    })
    .catch(function (err) {
      logger.error('Não foi possível conectar ao banco de dados:', err.message);
      logger.error('** Servidor parado! **');
      process.exit();
    });
}
