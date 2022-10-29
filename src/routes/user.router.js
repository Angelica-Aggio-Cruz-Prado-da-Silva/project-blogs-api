const express = require('express');
const { createUser, getAll, getUser } = require('../controllers/user.controller');
const userValidations = require('../middlewares/user.middleware');
const validateJWT = require('../middlewares/validateJWT');

const userRoutes = express.Router();

userRoutes.post('/', userValidations, createUser);
userRoutes.get('/', validateJWT, getAll);
userRoutes.get('/:id', validateJWT, getUser);

module.exports = userRoutes;