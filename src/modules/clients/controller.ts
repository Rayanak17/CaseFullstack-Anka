import { FastifyRequest, FastifyReply } from 'fastify';

type ClientPayload = {
  name: string;
  email: string;
  age: number;
  status: boolean;
  profile: string;
};

type ClientUpdate = Partial<ClientPayload>;

type Params = {
  id: string;
};

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const { name, email, age, status, profile } = request.body as ClientPayload;

  const newClient = {
    id: Math.random().toString(36).substring(2, 9),
    name,
    email,
    age,
    status,
    profile
  };

  reply.code(201).send(newClient);
}

export async function list(request: FastifyRequest, reply: FastifyReply) {
  reply.send([{ id: 'abc123', name: 'Rayana', email: 'rayana@example.com' }]);
}

export async function get(request: FastifyRequest<{ Params: Params }>, reply: FastifyReply) {
  const { id } = request.params;
  reply.send({ id, name: 'Rayana', email: 'rayana@example.com' });
}

export async function update(
  request: FastifyRequest<{ Params: Params; Body: ClientUpdate }>,
  reply: FastifyReply
) {
  const { id } = request.params;
  const updates = request.body;

  reply.send({ id, ...updates });
}

export async function remove(request: FastifyRequest<{ Params: Params }>, reply: FastifyReply) {
  const { id } = request.params;
  reply.code(204).send();
}
