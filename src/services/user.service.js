const { User } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const createUser = async ({ displayName, email, password, image }) => 
User.create({ displayName, email, password, image });

const validateToken = (token) => {
    if (!token) {
      const e = new Error('Token é obrigatório');
      throw e;
    }
  
    const user = jwtUtil.validateToken(token);
    return user;
};

module.exports = {
    createUser,
    validateToken,
};