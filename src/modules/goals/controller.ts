import { FastifyReply, FastifyRequest } from "fastify";
import { GoalService } from "./service";

const goalService = new GoalService();

export class GoalController {
  async createGoal(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as { id: string };
    const { type, targetDate, targetValue } = req.body as any;

    const goal = await goalService.createGoal(id, type, targetDate, targetValue);
    return reply.code(201).send(goal);
  }

  async getGoals(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as { id: string };
    const goals = await goalService.getGoalsByClient(id);
    return reply.send(goals);
  }

  async updateGoal(req: FastifyRequest, reply: FastifyReply) {
    const { goalId } = req.params as { goalId: string };
    const goal = await goalService.updateGoal(goalId, req.body as any);
    return reply.send(goal);
  }

  async deleteGoal(req: FastifyRequest, reply: FastifyReply) {
    const { goalId } = req.params as { goalId: string };
    await goalService.deleteGoal(goalId);
    return reply.code(204).send();
  }
}
