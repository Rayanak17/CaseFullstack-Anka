import { FastifyReply, FastifyRequest } from 'fastify';
import { SimulationService } from './service';

export class SimulationController {
  private simulationService = new SimulationService();

  async create(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { clientId, result } = request.body as { clientId: string; result: any };
      const simulation = await this.simulationService.createSimulation(clientId, result);
      reply.code(201).send(simulation);
    } catch (error: any) {
      reply.code(400).send({ error: error.message });
    }
  }

  async listByClient(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { clientId } = request.params as { clientId: string };
      const simulations = await this.simulationService.listByClient(clientId);
      reply.send(simulations);
    } catch (error: any) {
      reply.code(400).send({ error: error.message });
    }
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };
      const data = request.body as Partial<{ result: any }>;
      const updatedSimulation = await this.simulationService.updateSimulation(id, data);
      reply.send(updatedSimulation);
    } catch (error: any) {
      reply.code(400).send({ error: error.message });
    }
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };
      await this.simulationService.deleteSimulation(id);
      reply.code(204).send();
    } catch (error: any) {
      reply.code(400).send({ error: error.message });
    }
  }
}
