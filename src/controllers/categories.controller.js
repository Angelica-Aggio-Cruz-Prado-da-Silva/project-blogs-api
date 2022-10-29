const categoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const newCategory = await categoriesService.createCategory(req.body);

  return res.status(201).json(newCategory);
};

const getAll = async (_req, res) => {
  const categories = await categoriesService.getCategories();
  return res.status(200).json(categories);
};

module.exports = {
    createCategory,
    getAll,
};