import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export class GoalService {
  async createGoal(clientId: string, type: string, targetDate: string, targetValue: number) {
    return prisma.goal.create({
      data: {
        clientId,
        type,
        targetDate: new Date(targetDate),
        targetValue,
      },
    });
  }

  async getGoalsByClient(clientId: string) {
    return prisma.goal.findMany({
      where: { clientId },
    });
  }

  async updateGoal(goalId: string, data: Partial<{ type: string; targetDate: string; targetValue: number }>) {
    return prisma.goal.update({
      where: { id: goalId },
      data: {
        ...data,
        targetDate: data.targetDate ? new Date(data.targetDate) : undefined,
      },
    });
  }

  async deleteGoal(goalId: string) {
    return prisma.goal.delete({
      where: { id: goalId },
    });
  }
}
