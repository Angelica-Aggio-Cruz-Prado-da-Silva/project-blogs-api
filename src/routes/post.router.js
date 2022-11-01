const express = require('express');
const validateJWT = require('../middlewares/validateJWT');

const { getPosts } = require('../controllers/post.controller');

const postRoutes = express.Router();

postRoutes.get('/', validateJWT, getPosts);

module.exports = postRoutes;