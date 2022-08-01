import { Router } from 'express';
import OrdersController from '../controllers/orders.controllers';

const router = Router();

const controller = new OrdersController();

router.get('/', controller.getAll);

export default router;