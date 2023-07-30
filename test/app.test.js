// test/app.test.js

const request = require('supertest');
const app = require('../app');

describe('GET /fib', () => {
  it('should return the correct Fibonacci number for a valid input', async () => {
    const response = await request(app).get('/fib?n=10');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(34);
  });

  it('should handle n=1 correctly', async () => {
    const response = await request(app).get('/fib?n=1');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(0);
  });

  it('should handle n=2 correctly', async () => {
    const response = await request(app).get('/fib?n=2');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(1);
  });

  it('should return an error for invalid input', async () => {
    const response = await request(app).get('/fib?n=invalid');
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Bad request.');
  });

  it('should return an error for negative n', async () => {
    const response = await request(app).get('/fib?n=-10');
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Bad request.');
  });

  it('should return an error when no parameters are specified.', async () => {
    const response = await request(app).get('/fib?n=');
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Bad request.');
  });
});
