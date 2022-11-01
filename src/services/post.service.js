const { BlogPost, User, Category } = require('../models');

const getAllPosts = async () => BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, 
        as: 'categories', 
        attributes: ['id', 'name'], 
        through: { attributes: [] } },
    ],
});

module.exports = {
    getAllPosts,
};