import { prisma } from '../../prisma'; // ou onde você exporta seu prisma client

export class EventController {
  async create(data: { clientId: string; type: string; value: number; frequency: string }) {
    return prisma.event.create({ data });
  }

  async listByClient(clientId: string) {
    return prisma.event.findMany({ where: { clientId } });
  }

  async update(id: string, data: Partial<{ type: string; value: number; frequency: string }>) {
    return prisma.event.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.event.delete({
      where: { id },
    });
  }
}
