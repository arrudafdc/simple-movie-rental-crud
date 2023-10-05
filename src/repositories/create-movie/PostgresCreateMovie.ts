import { Movie } from "@prisma/client";
import {
  ICreateMovieParams,
  ICreateMovieRepository,
} from "../../controllers/create-movie/protocols";
import { prisma } from "../../prisma/client";
import { AppError } from "../../errors/AppError";

export class PostgresCreateMovies implements ICreateMovieRepository {
  async creatMovie(params: ICreateMovieParams): Promise<Movie> {
    const { title, duration, release_date } = params;

    const movieAlreadyExists = await prisma.movie.findUnique({
      where: {
        title,
      },
    });

    if (movieAlreadyExists) {
      throw new AppError("Movie already exists", 400);
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        release_date,
      },
    });

    return movie;
  }
}
