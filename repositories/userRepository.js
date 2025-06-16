const User = require('../models/user');

const findPaginatedUsers = async (limit, offset) => {
  const { count, rows } = await User.findAndCountAll({
    limit,
    offset,
    attributes: { exclude: ['password'] }, 
    order: [['createdAt', 'DESC']],         
  });

  return {
    users: rows,
    totalItems: count,
  };
};

module.exports = {
  findPaginatedUsers,
};
