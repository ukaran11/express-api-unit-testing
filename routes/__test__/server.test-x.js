
const request = require('supertest');
const app = require('../../server');

describe('register', () => {
    it('returns hello', async () => {
        const res = await request(app).get('/api/');

        expect(res.statusCode).toEqual(200);
    });
});
