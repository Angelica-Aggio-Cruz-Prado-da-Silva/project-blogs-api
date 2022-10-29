const userService = require('../services/user.service');
const { User } = require('../models');
const jwtUtil = require('../utils/jwt.util');

const createUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (user) {
        return res.status(409).json({ message: 'User already registered' });
    }

    const newUser = await userService.createUser(req.body);

    const { password: _, ...userWithoutPassword } = newUser.dataValues;

    const token = jwtUtil.createToken(userWithoutPassword);

    return res.status(201).json({ token });
};

module.exports = {
    createUser,
};