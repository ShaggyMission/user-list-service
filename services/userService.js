const userRepository = require('../repositories/userRepository');

const getPaginatedUsers = async (page = 1, pageSize = 10) => {
  const offset = (page - 1) * pageSize;
  const { users, totalItems } = await userRepository.findPaginatedUsers(pageSize, offset);

  return {
    users,
    pagination: {
      currentPage: page,
      pageSize,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
    },
  };
};

module.exports = {
  getPaginatedUsers,
};
