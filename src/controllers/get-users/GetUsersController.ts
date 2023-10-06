import { IGetUsersController, IGetUsersRepository } from "./protocols";
import { Response } from "express";

export class GetUsersController implements IGetUsersController {
  getUsersRepository: IGetUsersRepository;

  constructor(getUsersRepository: IGetUsersRepository) {
    this.getUsersRepository = getUsersRepository;
  }

  async handle(res: Response): Promise<Response> {
    const users = await this.getUsersRepository.getUser();
    return res.status(201).json(users);
  }
}
