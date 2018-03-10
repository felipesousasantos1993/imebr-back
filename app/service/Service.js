var request = require('request');
var logger = global.log4js.getLogger("[Service]");

function Service() { };

Service.prototype.get = function (urlParam, callback) {
    request({
        url: urlParam,
        method: 'GET'
    }, function (error, response, body) {

        if (error || response.statusCode != 200) {
            logger.error('Erro url: ', urlParam);
            logger.error('Error : ', (error ? error : ''));
            logger.error('statusCode : ', (response ? response.statusCode : ''));
        }

        callback(error, body)
    });

}

Service.prototype.post = function (urlParam, mensagem, topicArn, callback) {

    request({
        url: urlParam,
        method: 'POST',
        form: {
            topicArn: topicArn,
            message: JSON.stringify(mensagem)
        }
    }, function (error, response, body) {

        if (error || response.statusCode != 200) {
            logger.error('Erro url: ', urlParam);
            logger.error('Error : ', (error ? error : ''));
            logger.error('statusCode : ', (response ? response.statusCode : ''));

        }

        callback(error, body);
    });
}

Service.prototype.delete = function (filaRemove, receiptHandle, callback) {
    request({ 
        url: global.PropertiesDTO.removeFila,
        method: 'DELETE',
        form: {
            queue: filaRemove,
            ReceiptHandle: receiptHandle
        }
    }, function (error, response, body) {

        if (error || response.statusCode != 200) {
            logger.error('Erro url: ', urlParam);
            logger.error('Error : ', (error ? error : ''));
            logger.error('statusCode : ', (response ? response.statusCode : ''));
        }

        callback(error, body)
    });

}


module.exports = Service;