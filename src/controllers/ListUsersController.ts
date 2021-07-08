import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";
import { classToPlain } from "class-transformer";


class ListUsersController {

  async handle(req: Request, res: Response) {
    const listUserService = new ListUserService();

    const users = await listUserService.execute();

    return res.json(classToPlain(users));
  }
}

export { ListUsersController };