const express = require('express');
const validateJWT = require('../middlewares/validateJWT');
const categoriesValidation = require('../middlewares/categories.middlewares');
const { createCategory, getAll } = require('../controllers/categories.controller');

const categoriesRoutes = express.Router();

categoriesRoutes.post('/', validateJWT, categoriesValidation, createCategory);
categoriesRoutes.get('/', validateJWT, getAll);

module.exports = categoriesRoutes;