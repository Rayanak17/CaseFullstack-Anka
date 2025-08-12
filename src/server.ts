import fastify from 'fastify';
import clientsRoutes from './modules/clients/routes';
import { authPlugin } from './middleware/auth';
import goalRoutes from "./modules/goals/routes";
import eventRoutes from './modules/events/routes';
import simulationRoutes from './modules/simulations/routes';
import walletRoutes from './modules/wallet/routes';

const app = fastify();

app.register(authPlugin);
app.register(clientsRoutes, { prefix: '/clients' });
app.register(walletRoutes, { prefix: '/wallets' });
app.register(eventRoutes, { prefix: '/events' });
app.register(goalRoutes, { prefix: '/goals' }); 
app.register(simulationRoutes, { prefix: '/simulations' }); 

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log('Servidor rodando na porta 3000');
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
};

start();