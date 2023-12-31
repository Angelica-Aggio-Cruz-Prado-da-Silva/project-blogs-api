const postService = require('../services/post.service');

const getPosts = async (req, res) => {
  const posts = await postService.getAllPosts();

  return res.status(200).json(posts);
};

module.exports = {
  getPosts,
};