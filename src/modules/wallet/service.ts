import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class WalletService {
  async createWallet(clientId: string, totalValue: number, allocations: any) {
    return prisma.wallet.create({
      data: {
        clientId,
        totalValue,
        allocations,
      },
    });
  }

  async getWalletByClient(clientId: string) {
    return prisma.wallet.findUnique({
      where: { clientId },
    });
  }

  async updateWallet(clientId: string, data: Partial<{ totalValue: number; allocations: any }>) {
    return prisma.wallet.update({
      where: { clientId },
      data,
    });
  }

  async deleteWallet(clientId: string) {
    return prisma.wallet.delete({
      where: { clientId },
    });
  }
}
