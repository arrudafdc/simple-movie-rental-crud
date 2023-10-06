import { Response } from "express";
import { User } from "@prisma/client";

export interface IGetUsersController {
  handle(res: Response): Promise<Response>;
}

export interface IGetUsersRepository {
  getUser(): Promise<User[]>;
}
