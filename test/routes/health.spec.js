const request = require('supertest');

describe('Validar retorno de sucesso no Serviço Health', function () {
  it('deve retornar 200', function (done) {
    request(app)
      .get('/health')
      .expect(200, done);
  });
});
