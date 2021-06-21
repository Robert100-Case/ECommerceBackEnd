// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});


Product.belongsTo(Tag, {
  foreignKey: 'tag_id',
});


// The association can also be created from the Car side
/*Tag.belongsTo(Product, {
  foreignKey: 'product_id',
});*/



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
