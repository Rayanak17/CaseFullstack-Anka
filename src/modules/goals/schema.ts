import { z } from "zod";

export const createGoalSchema = z.object({
  body: z.object({
    type: z.string().min(1, "Tipo é obrigatório"),
    targetDate: z.string().refine(val => !isNaN(Date.parse(val)), {
      message: "Data inválida",
    }),
    targetValue: z.number().positive("Valor-alvo deve ser positivo"),
  }),
  params: z.object({
    id: z.string().uuid("ID do cliente inválido"),
  }),
});

export const updateGoalSchema = z.object({
  params: z.object({
    goalId: z.string().uuid("ID da meta inválido"),
  }),
  body: z.object({
    type: z.string().optional(),
    targetDate: z.string().optional(),
    targetValue: z.number().optional(),
  }),
});
