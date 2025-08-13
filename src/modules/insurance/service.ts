import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class InsuranceService {
  async createInsurance(data: { clientId: string; type: string; value: number }) {
    return prisma.insurance.create({
      data,
    });
  }

  async listByClient(clientId: string) {
    return prisma.insurance.findMany({
      where: { clientId },
    });
  }

  async updateInsurance(id: string, data: Partial<{ type: string; value: number }>) {
    return prisma.insurance.update({
      where: { id },
      data,
    });
  }

  async deleteInsurance(id: string) {
    return prisma.insurance.delete({
      where: { id },
    });
  }
}
