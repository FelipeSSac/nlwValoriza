import { Request, Response } from 'express';
import { CreateTagServices } from '../services/CreateTagServices';

class CreateTagController {

  async handle(req: Request, res: Response) {
    const createTagService = new CreateTagServices();
    const { name } = req.body;

    const tag = await createTagService.execute(name);

    return res.json(tag);
  }
}

export { CreateTagController };