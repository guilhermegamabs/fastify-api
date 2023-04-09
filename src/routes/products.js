const app = require('fastify');

exports.productsRoutes = (app) => {
  app.get('/products', (req, reply) => {
    app.mysql.query(
      "SELECT id, product_name, product_price FROM products",
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });

  app.post('/products/:name/:price', (req, reply) => {
    app.mysql.query(
      `INSERT INTO products (product_name, product_price) VALUES ('${req.params.name}', ${req.params.price})`,
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });

  app.get('/products/:id', (req, reply) => {
    app.mysql.query(
      `SELECT id, product_name, product_price FROM products WHERE (id = ${Number(req.params.id)})`,
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });

  app.put('/products/:id', (req, reply) => {
    app.mysql.query(
      `UPDATE products SET product_name = '${req.body.name}', product_price = '${req.body.price}' WHERE (id = ${Number(req.params.id)})`,
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });

  app.delete('/products/:id', (req, reply) => {
    app.mysql.query(
      `DELETE FROM products WHERE (id = ${req.params.id})`,
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });

};