const { Category } = require('../models');

const createCategory = async ({ name }) => 
  Category.create({ name });

const getCategories = async () => {
  const categories = await Category.findAll();
  
  return categories;
};  

module.exports = {
  createCategory,
  getCategories,
};