import app from '../app';
import supertest from 'supertest'

describe('resize endpoint test', () => {
    it('should test the /resize endpoint', async() => {
        const request = supertest(app);
        const response = await request.get('/');
        expect(response.status).toEqual(200);
    })
})
