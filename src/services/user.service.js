const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => 
User.create({ displayName, email, password, image });

const getAllUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
  
    return users;
};

const getUserById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  
    return user;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
};