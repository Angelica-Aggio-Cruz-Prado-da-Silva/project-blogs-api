module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: {
        type:DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type:DataTypes.INTEGER,
        primaryKey: true,
      },
    }, {
      underscored: true,
      timestamps: false,
      tableName: 'posts_categories'
    });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          foreignKey: 'post_id',
          otherKey: 'category_id',
          through: PostCategory,
        });
    
        models.Category.belongsToMany(models.BlogPost, {
          as: 'post',
          foreignKey: 'category_id',
          otherKey: 'post_id',
          through: PostCategory,
        });
    }
    
    return PostCategory;
};