import { Request, Response } from "express";

export interface ICreateMovieRentParams {
  movieId: string;
  userId: string;
}

export interface ICreateMovieRentController {
  handle(req: Request, res: Response): Promise<Response>;
}

export interface ICreateMovieRentRepository {
  createMovieRent(params: ICreateMovieRentParams): Promise<void>;
}
