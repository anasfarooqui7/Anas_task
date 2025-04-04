const request = require('supertest');
const app = require('../app'); // update this to export the app without listening

describe('Auth API', () => {
  it('should register a user', async () => {
    const res = await request(app).post('/api/register').send({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toBe('User registered successfully');
  });

  // Add login, get profile, update, and delete tests...
});
