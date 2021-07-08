import { classToPlain } from "class-transformer";
import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";


class CreateComplimentController {

  async handle(req: Request, res: Response){
    const createComplimentService = new CreateComplimentService();
    const { tag_id, user_receiver, message } = req.body;
    const user_sender = req.user_id;

    const compliment = await createComplimentService.execute({
      tag_id,
      user_receiver,
      user_sender,
      message
    });

    return res.json(classToPlain(compliment));
  }
}

export { CreateComplimentController };