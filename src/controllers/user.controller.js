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

const getAll = async (_req, res) => {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
};

const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    
    if (!user) {
        return res.status(404).json({ message: 'User does not exist' }); 
    }

    return res.status(200).json(user);
};

module.exports = {
    createUser,
    getAll,
    getUser,
};