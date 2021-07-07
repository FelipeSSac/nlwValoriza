import { Router } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.get('/', (req, res) => {
  res.json({ message: 'falafiotabao?'})
})

router.post('/users', createUserController.handle);
router.post('/tags', ensureAdmin, createTagController.handle);

export { router };