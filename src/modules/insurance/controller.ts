import { FastifyReply, FastifyRequest } from 'fastify';
import { InsuranceService } from './service';

export class InsuranceController {
  private insuranceService = new InsuranceService();

  async create(request: FastifyRequest, reply: FastifyReply) {
    try {
      const data = request.body as { clientId: string; type: string; value: number };
      const insurance = await this.insuranceService.createInsurance(data);
      reply.code(201).send(insurance);
    } catch (error: any) {
      reply.code(400).send({ error: error.message });
    }
  }

  async listByClient(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { clientId } = request.params as { clientId: string };
      const insurances = await this.insuranceService.listByClient(clientId);
      reply.send(insurances);
    } catch (error: any) {
      reply.code(400).send({ error: error.message });
    }
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };
      const data = request.body as Partial<{ type: string; value: number }>;
      const updatedInsurance = await this.insuranceService.updateInsurance(id, data);
      reply.send(updatedInsurance);
    } catch (error: any) {
      reply.code(400).send({ error: error.message });
    }
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };
      await this.insuranceService.deleteInsurance(id);
      reply.code(204).send();
    } catch (error: any) {
      reply.code(400).send({ error: error.message });
    }
  }
}
