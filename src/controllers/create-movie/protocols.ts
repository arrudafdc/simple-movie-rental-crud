import { Movie } from "@prisma/client";
import { Request, Response } from "express";

export interface ICreateMovieParams {
  title: string;
  duration: number;
  release_date: string;
}

export interface ICreateMovieRepository {
  creatMovie(params: ICreateMovieParams): Promise<Movie>;
}

export interface ICreateMovieController {
  handle(req: Request, res: Response): Promise<Response>;
}
