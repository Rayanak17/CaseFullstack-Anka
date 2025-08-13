import { FastifyInstance } from 'fastify';
import { WalletController } from './controller';

export default async function walletRoutes(app: FastifyInstance) {
  const walletController = new WalletController();

  app.post('/', async (request, reply) => {
    const { clientId, totalValue, allocations } = request.body as any;
    try {
      const wallet = await walletController.create({ clientId, totalValue, allocations });
      return reply.status(201).send(wallet);
    } catch (error: any) {
      return reply.status(400).send({ error: error.message });
    }
  });

  app.get('/client/:clientId', async (request, reply) => {
    const { clientId } = request.params as any;
    try {
      const wallet = await walletController.getByClient(clientId);
      return reply.send(wallet);
    } catch (error: any) {
      return reply.status(400).send({ error: error.message });
    }
  });

  app.put('/client/:clientId', async (request, reply) => {
    const { clientId } = request.params as any;
    const data = request.body as any;
    try {
      const updatedWallet = await walletController.update(clientId, data);
      return reply.send(updatedWallet);
    } catch (error: any) {
      return reply.status(400).send({ error: error.message });
    }
  });

  app.delete('/client/:clientId', async (request, reply) => {
    const { clientId } = request.params as any;
    try {
      await walletController.delete(clientId);
      return reply.status(204).send();
    } catch (error: any) {
      return reply.status(400).send({ error: error.message });
    }
  });
}
