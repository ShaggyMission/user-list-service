
const request = require('supertest');
const app = require('../app');
const sequelize = require('../config/database');
const userService = require('../services/userService');

jest.mock('../services/userService');

jest.setTimeout(10000);

describe('GET /users/list', () => {
  beforeEach(() => {
    userService.getPaginatedUsers.mockResolvedValue({
      users: [
        { id: '1', firstName: 'Test', lastName: 'User', email: 'test@example.com', phone: '1234567890' },
      ],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        totalItems: 1,
        totalPages: 1
      }
    });
  });

  it('should return paginated users', async () => {
    const res = await request(app).get('/users/list?page=1');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('users');
    expect(res.body).toHaveProperty('pagination');
    expect(Array.isArray(res.body.users)).toBe(true);
    expect(res.body.pagination.totalItems).toBe(1);
  });

  afterAll(async () => {
    await sequelize.close();
  });
});
