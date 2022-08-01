import { Router } from 'express';
import ProductsController from '../controllers/products.controllers';

const router = Router();

const controller = new ProductsController();

router.get('/', controller.getAll);
router.post('/', controller.create);

export default router;