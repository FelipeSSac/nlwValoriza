import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiverController';
import { ListUsersController } from './controllers/ListUsersController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplementsController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUsersController = new ListUsersController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiverComplimentsController();
const listTagsController = new ListTagsController();

router.get('/', (req, res) => {
  res.json({ message: 'fala fio, tabao?'})
});

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);

router.get('/users', ensureAuthenticated, listUsersController.handle)
router.get('/users/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle);
router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get('/tags', listTagsController.handle);

export { router };