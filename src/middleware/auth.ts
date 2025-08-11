import type { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';

declare module 'fastify' {
  interface FastifyRequest {
    user: {
      sub: string;
      role: string;
      [key: string]: any;
    } | null;
  }
}

const secret = 'seuSegredoAqui';

export const authPlugin: FastifyPluginAsync = async (app) => {
  app.decorateRequest('user', null as {
  sub: string;
  role: string;
  [key: string]: any;
} | null);

  app.addHook('onRequest', async (request, reply) => {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      reply.code(401).send({ error: 'Token ausente ou inválido' });
      return;
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, secret);
      console.log('Token decodificado:', decoded);
      request.user = decoded as { sub: string; role: string };
      console.log('✅ Campo user decorado:', request.user);

    } catch (err) {
      console.error('Erro ao verificar token:', err);
      reply.code(401).send({ error: 'Token inválido' });
    }
  });
};

export function requireAuth(roles: string[]) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log('👤 Usuário autenticado:', request.user);
    return;
  };
}


