import { FastifyInstance } from 'fastify';
import { SimulationController } from './controller';

export default async function simulationRoutes(app: FastifyInstance) {
  const simulationController = new SimulationController();

  app.post('/', simulationController.create.bind(simulationController));
  app.get('/client/:clientId', simulationController.listByClient.bind(simulationController));
  app.put('/:id', simulationController.update.bind(simulationController));
  app.delete('/:id', simulationController.delete.bind(simulationController));
}
