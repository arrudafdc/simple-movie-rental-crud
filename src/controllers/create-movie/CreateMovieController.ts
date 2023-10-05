import { AppError } from "../../errors/AppError";
import { ICreateMovieController, ICreateMovieRepository } from "./protocols";
import { Request, Response } from "express";

export class CreateMovieController implements ICreateMovieController {
  createMovieRepository: ICreateMovieRepository;

  constructor(createMovieRepository: ICreateMovieRepository) {
    this.createMovieRepository = createMovieRepository;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body;
      const movie = await this.createMovieRepository.creatMovie(body);
      return res.status(201).json({ message: movie });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(400).json({ message: "Somethint went wrong!" });
    }
  }
}
