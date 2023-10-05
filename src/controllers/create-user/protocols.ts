import { User } from "@prisma/client";
import { Request, Response } from "express";

export interface ICreateUserParams {
  name: string;
  email: string;
}

export interface ICreateUserRepository {
  creatUser(params: ICreateUserParams): Promise<User>;
}

export interface ICreateUserController {
  handle(req: Request, res: Response): Promise<Response>;
}
