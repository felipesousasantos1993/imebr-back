var app = require('./config/express')();
var MensagemDTO = require('./app/dto/MensagemDTO');
var logger = global.log4js.getLogger("[app]");

var port = process.env.NODE_PORT_DEV || 5000

app.listen(port, function () {
	logger.info("Servidor iniciado na porta ", port);
});

app.use(function (req, res) {
	res.status(404);
	res.send(new MensagemDTO(404, 0, "Not found", "Serviço não mapeado no servidor."));
});
