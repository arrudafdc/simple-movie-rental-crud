import { User } from "@prisma/client";
import {
  ICreateUserParams,
  ICreateUserRepository,
} from "../../controllers/create-user/protocols";
import { prisma } from "../../prisma/client";
import { AppError } from "../../errors/AppError";

export class PostgresCreateUser implements ICreateUserRepository {
  async creatUser({ name, email }: ICreateUserParams): Promise<User> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!", 400);
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return user;
  }
}
