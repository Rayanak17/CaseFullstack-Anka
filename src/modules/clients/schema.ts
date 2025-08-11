import { z } from 'zod';

export const createClientSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().int().min(18),
  status: z.boolean(),
  profile: z.enum(['conservative', 'moderate', 'aggressive']),
});

export const updateClientSchema = createClientSchema.partial();
