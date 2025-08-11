import fastify from 'fastify';
import clientsRoutes from './modules/clients/routes';
import { authPlugin } from './middleware/auth';

const app = fastify();

// Adiciona suporte ao JSON Web Token e ao campo `user`
app.register(authPlugin);

// Registra as rotas de clientes com prefixo
app.register(clientsRoutes, { prefix: '/clients' });

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log('🚀 Servidor rodando na porta 3000');
  } catch (err) {
    console.error('❌ Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
};

start();