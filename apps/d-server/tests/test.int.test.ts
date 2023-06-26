import request from 'supertest';
import { app } from '../src/app';
import { API_PREFIX, API_VERSION } from '../src/constants';

describe('Test Routes', () => {
    const URL_PREFIX = `${API_PREFIX}${API_VERSION}`;
    describe('GET /test', () => {
        it('should return Hello World', async () => {
            const expectedResult = 'Hello, World!';

            const response = await request(app).get(`${URL_PREFIX}/test`);

            expect(response.status).toEqual(200);
            expect(response.text).toEqual(expectedResult);
        });
    });
});
