const fastify = require('fastify');
const Fastify = require('fastify');
const app = Fastify();

app.register(require('@fastify/mysql'), {
  connectionString: 'mysql://root:1290@localhost:3306/fastifynode'
});

require('./routes/routes')(app);

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  };

  console.log('Server running on port: ', address);
});