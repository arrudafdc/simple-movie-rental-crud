import {
  ICreateMovieRentParams,
  ICreateMovieRentRepository,
} from "../../controllers/create-movie-rent/protocols";
import { prisma } from "../../prisma/client";
import { AppError } from "../../errors/AppError";

export class PostgresCreateMovieRent implements ICreateMovieRentRepository {
  async createMovieRent({
    movieId,
    userId,
  }: ICreateMovieRentParams): Promise<void> {
    const movieExist = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movieExist) {
      throw new AppError("Movie does not exists!", 400);
    }

    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movieId,
      },
    });

    if (movieAlreadyRented) {
      throw new AppError("Movie already rented!", 400);
    }

    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError("User already exists!", 400);
    }

    await prisma.movieRent.create({
      data: {
        movieId,
        userId,
      },
    });
  }
}
