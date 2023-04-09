const { productsRoutes } = require('./products');

module.exports = app => {
  productsRoutes(app);
};