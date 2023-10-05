import { Movie } from "@prisma/client";
import { IGetMoviesByReleaseRepository } from "../../controllers/get-movies-by-release/protocols";
import { prisma } from "../../prisma/client";

export class PostgresGetMoviesByRelease
  implements IGetMoviesByReleaseRepository
{
  async getMoviesByRelease(): Promise<Movie[]> {
    const movies = await prisma.movie.findMany({
      orderBy: {
        release_date: "desc",
      },
      include: {
        movie_rent: {
          select: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });
    return movies;
  }
}
