const Fastify = require('fastify');
const app = Fastify();

app.get('/products', (req, reply) => {
  reply.send({ hello: 'World!'});
});


app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  };

  console.log('Server running on port: ', address);
});