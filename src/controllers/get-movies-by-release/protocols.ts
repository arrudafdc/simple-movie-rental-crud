import { Movie } from "@prisma/client";
import { Response } from "express";

export interface IGetMoviesByReleaseRepository {
  getMoviesByRelease(): Promise<Movie[]>;
}

export interface IGetMoviesByReleaseController {
  handle(res: Response): Promise<Response>;
}
