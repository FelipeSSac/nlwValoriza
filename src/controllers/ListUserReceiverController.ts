import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from '../services/ListUserReceiveComplimentsService';
import { classToPlain } from "class-transformer";

class ListUserReceiverComplimentsController {

  async handle(req: Request, res: Response) {
    const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiveComplimentsService.execute(req.user_id);

    return res.json(classToPlain(compliments))
  }
}

export { ListUserReceiverComplimentsController }