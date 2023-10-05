import {
  IGetMoviesByReleaseController,
  IGetMoviesByReleaseRepository,
} from "./protocols";
import { Response } from "express";

export class GetMoviesByRelease implements IGetMoviesByReleaseController {
  getMoviesByReleaseRepository: IGetMoviesByReleaseRepository;

  constructor(getMoviesByRelease: IGetMoviesByReleaseRepository) {
    this.getMoviesByReleaseRepository = getMoviesByRelease;
  }

  async handle(res: Response): Promise<Response> {
    const movies = await this.getMoviesByReleaseRepository.getMoviesByRelease();
    return res.status(201).json(movies);
  }
}
