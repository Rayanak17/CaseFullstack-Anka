import { CreateClientInput } from './model';
import { PrismaClient, Client } from '@prisma/client';

const prisma = new PrismaClient();

export const createClient = async (data: CreateClientInput) => {
  return prisma.client.create({ data });
};

export const getClients = async () => {
  return prisma.client.findMany();
};

export const getClientById = async (id: string) => {
  return prisma.client.findUnique({ where: { id } });
};

export const updateClient = async (id: string, data: Partial<Client>) => {
  return prisma.client.update({ where: { id }, data });
};

export const deleteClient = async (id: string) => {
  return prisma.client.delete({ where: { id } });
};
