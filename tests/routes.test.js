const request = require('supertest');
const app = require('../server');

describe('User API', () => {
    it('should show all users', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('users');
    }) 
})