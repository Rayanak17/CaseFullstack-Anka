import { FastifyInstance } from 'fastify';
import { InsuranceController } from './controller';

export default async function insuranceRoutes(app: FastifyInstance) {
  const insuranceController = new InsuranceController();

  app.post('/', insuranceController.create.bind(insuranceController));
  app.get('/client/:clientId', insuranceController.listByClient.bind(insuranceController));
  app.put('/:id', insuranceController.update.bind(insuranceController));
  app.delete('/:id', insuranceController.delete.bind(insuranceController));
}
