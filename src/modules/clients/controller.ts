import { Request, Response, NextFunction } from 'express';
import * as service from './service';
import { createClientSchema, updateClientSchema } from './schema';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsed = createClientSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.format() });
    }

    const client = await service.createClient(parsed.data);
    res.status(201).json(client);
  } catch (err) {
    next(err);
  }
};

export const list = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const clients = await service.getClients();
    res.json(clients);
  } catch (err) {
    next(err);
  }
};

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const client = await service.getClientById(req.params.id);
    if (!client) return res.status(404).json({ error: 'Client not found' });
    res.json(client);
  } catch (err) {
    next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parsed = updateClientSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.format() });
    }

    const client = await service.updateClient(req.params.id, parsed.data);
    res.json(client);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await service.deleteClient(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
