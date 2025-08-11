import Fastify from 'fastify';
const app = Fastify();

app.get('/', async (request, reply) => {
  reply.send({ hello: 'world' });
});

export default app;
