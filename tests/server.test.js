const request = require('supertest');
const app = require('../src/server');

describe('GET /', () => {
    it('deve retornar status 200', async () => {
        const response = await request(app).get('/');

        expect(response.status).toBe(200);
    });
});