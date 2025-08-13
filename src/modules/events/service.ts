import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class EventService {
  async createEvent(clientId: string, type: string, value: number, frequency: string) {
    return prisma.event.create({
      data: {
        clientId,
        type,
        value,
        frequency,
      },
    });
  }

  async getEventsByClient(clientId: string) {
    return prisma.event.findMany({
      where: { clientId },
    });
  }

  async updateEvent(eventId: string, data: Partial<{ type: string; value: number; frequency: string }>) {
    return prisma.event.update({
      where: { id: eventId },
      data,
    });
  }

  async deleteEvent(eventId: string) {
    return prisma.event.delete({
      where: { id: eventId },
    });
  }
}
