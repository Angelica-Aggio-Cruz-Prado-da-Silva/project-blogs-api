const express = require('express');
const loginValidation = require('../middlewares/login.middleware');
const validateLogin = require('../services/login.service');

const loginRoutes = express.Router();

loginRoutes.post('/', loginValidation, validateLogin);

module.exports = loginRoutes;