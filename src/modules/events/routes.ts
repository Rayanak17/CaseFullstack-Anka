import { FastifyInstance } from 'fastify';
import { EventController } from './controller';

export default async function eventRoutes(app: FastifyInstance) {
  const eventController = new EventController();

  app.post('/', async (request, reply) => {
    const { clientId, type, value, frequency } = request.body as any;
    try {
      const event = await eventController.create({ clientId, type, value, frequency });
      return reply.status(201).send(event);
    } catch (error: any) {
      return reply.status(400).send({ error: error.message });
    }
  });

  app.get('/client/:clientId', async (request, reply) => {
    const { clientId } = request.params as any;
    try {
      const events = await eventController.listByClient(clientId);
      return reply.send(events);
    } catch (error: any) {
      return reply.status(400).send({ error: error.message });
    }
  });

  app.put('/:id', async (request, reply) => {
    const { id } = request.params as any;
    const data = request.body as any;
    try {
      const updatedEvent = await eventController.update(id, data);
      return reply.send(updatedEvent);
    } catch (error: any) {
      return reply.status(400).send({ error: error.message });
    }
  });

  app.delete('/:id', async (request, reply) => {
    const { id } = request.params as any;
    try {
      await eventController.delete(id);
      return reply.status(204).send();
    } catch (error: any) {
      return reply.status(400).send({ error: error.message });
    }
  });
}
