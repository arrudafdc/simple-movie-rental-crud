import { Response, Request } from "express";
import {
  ICreateMovieRentController,
  ICreateMovieRentRepository,
} from "./protocols";
import { AppError } from "../../errors/AppError";

export class CreateMovieRentController implements ICreateMovieRentController {
  createMovieRentRepository: ICreateMovieRentRepository;

  constructor(createMovieRenteRepository: ICreateMovieRentRepository) {
    this.createMovieRentRepository = createMovieRenteRepository;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body;
      await this.createMovieRentRepository.createMovieRent(body);
      return res.status(201).json({ message: "Create Rent!" });
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: "Somethint went wrong!" });
    }
  }
}
