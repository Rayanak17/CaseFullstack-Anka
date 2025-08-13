import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class SimulationService {
  async createSimulation(clientId: string, result: any) {
    return prisma.simulation.create({
      data: {
        clientId,
        result,
      },
    });
  }

  async listByClient(clientId: string) {
    return prisma.simulation.findMany({
      where: { clientId },
    });
  }

  async updateSimulation(id: string, data: Partial<{ result: any }>) {
    return prisma.simulation.update({
      where: { id },
      data,
    });
  }

  async deleteSimulation(id: string) {
    return prisma.simulation.delete({
      where: { id },
    });
  }
}
