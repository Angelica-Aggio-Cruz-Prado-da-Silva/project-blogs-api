const express = require('express');
const { createUser } = require('../controllers/user.controller');
const userValidations = require('../middlewares/user.middleware');

const userRoutes = express.Router();

userRoutes.post('/', userValidations, createUser);

module.exports = userRoutes;