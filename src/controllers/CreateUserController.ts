import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';
import { classToPlain } from "class-transformer";
class CreateUserController {

  async handle(req: Request, res: Response) {
    const { name, email, password, admin  } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({name, email, password, admin});

    return res.json(classToPlain(user));
  }
}

export { CreateUserController };