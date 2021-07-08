import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";
import { classToPlain } from "class-transformer";

class ListUserSendComplimentsController {

  async handle(req: Request, res: Response) {
    const listUserSendComplimentsService = new ListUserSendComplimentsService();

    const compliments = await listUserSendComplimentsService.execute(req.user_id);

    return res.json(classToPlain(compliments))
  }
}

export { ListUserSendComplimentsController }