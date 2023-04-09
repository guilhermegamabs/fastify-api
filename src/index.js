const fastify = require('fastify');
const Fastify = require('fastify');
const app = Fastify();

app.register(require('@fastify/mysql'), {
  connectionString: 'mysql://root:1290@localhost:3306/fastifynode'
});

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

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  };

  console.log('Server running on port: ', address);
});