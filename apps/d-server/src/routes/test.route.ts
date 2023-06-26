import { Router } from 'express';
import { testController } from '../controllers/test.controller';
import { testMiddleware } from '../middlewares/test.middleware';
const router = Router();

router.get('/', testMiddleware, testController);

export { router as testRoutes };
