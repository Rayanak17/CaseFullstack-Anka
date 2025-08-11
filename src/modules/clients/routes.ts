import { FastifyInstance } from 'fastify';
import * as controller from './controller';
import { requireAuth } from '../../middleware/auth';

export default async function clientsRoutes(app: FastifyInstance) {
  app.route({
    method: 'GET',
    url: '/',
    preHandler: requireAuth(['advisor', 'viewer']),
    handler: controller.list
  });

  app.route({
    method: 'POST',
    url: '/',
    preHandler: requireAuth(['advisor']),
    handler: controller.create
  });

  app.route({
    method: 'GET',
    url: '/:id',
    preHandler: requireAuth(['advisor', 'viewer']),
    handler: controller.get
  });

  app.route({
    method: 'PUT',
    url: '/:id',
    preHandler: requireAuth(['advisor']),
    handler: controller.update
  });

  app.route({
    method: 'DELETE',
    url: '/:id',
    preHandler: requireAuth(['advisor']),
    handler: controller.remove
  });
}
