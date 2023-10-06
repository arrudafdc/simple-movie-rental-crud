import { User } from "@prisma/client";
import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { prisma } from "../../prisma/client";

export class PostgresGetUsers implements IGetUsersRepository {
  async getUser(): Promise<User[]> {
    const user = await prisma.user.findMany({});
    return user;
  }
}
