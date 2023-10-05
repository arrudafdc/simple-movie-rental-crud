import { Request, Response } from "express";
import { ICreateUserController, ICreateUserRepository } from "./protocols";
import { AppError } from "../../errors/AppError";

export class CreateUserController implements ICreateUserController {
  createUserRepository: ICreateUserRepository;

  constructor(createUserRepository: ICreateUserRepository) {
    this.createUserRepository = createUserRepository;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body;
      const user = await this.createUserRepository.creatUser(body);
      return res.status(201).json({ message: user });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: "Somethint went wrong!" });
    }
  }
}
