const request = require('supertest');
const app = require('../index');

describe.only('Routers', function () {
  describe('When /iecho', function () {
    it('It should return 200 in case of sending a text', (done) => {
      request(app)
        .get('/iecho?text=oso')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('Should reply 400 in case of not sending a text message', (done) => {
      request(app)
        .get('/iecho?text=1234')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400, done);
    });
  });
});
