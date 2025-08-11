import { Router } from 'express';
import * as controller from './controller';
import { requireAuth } from '../../middleware/auth';

const router = Router();

router.post('/', requireAuth(['advisor']), controller.create);
router.get('/', requireAuth(['advisor', 'viewer']), controller.list);
router.get('/:id', requireAuth(['advisor', 'viewer']), controller.get);
router.put('/:id', requireAuth(['advisor']), controller.update);
router.delete('/:id', requireAuth(['advisor']), controller.remove);

export default router;
