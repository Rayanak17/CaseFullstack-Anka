import { FastifyInstance } from "fastify";
import { GoalController } from "./controller";
import { createGoalSchema, updateGoalSchema } from "./schema";

const goalController = new GoalController();

export default async function goalRoutes(fastify: FastifyInstance) {
  fastify.post(
    "/clients/:id/goals",
    {
      preHandler: async (req, reply) => {
        createGoalSchema.parse({
          body: req.body,
          params: req.params,
        });
      }
    },
    goalController.createGoal
  );

  fastify.get(
    "/clients/:id/goals",
    goalController.getGoals
  );

  fastify.put(
    "/goals/:goalId",
    {
      preHandler: async (req, reply) => {
        updateGoalSchema.parse({
          body: req.body,
          params: req.params,
        });
      }
    },
    goalController.updateGoal
  );

  fastify.delete(
    "/goals/:goalId",
    goalController.deleteGoal
  );
}
