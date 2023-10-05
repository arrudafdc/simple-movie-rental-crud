import { Router } from "express";
import { CreateUserController } from "./controllers/create-user/CreateUserController";
import { PostgresCreateUser } from "./repositories/create-user/PostgresCreateUser";
import { PostgresCreateMovies } from "./repositories/create-movie/PostgresCreateMovie";
import { CreateMovieController } from "./controllers/create-movie/CreateMovieController";
import { GetMoviesByRelease } from "./controllers/get-movies-by-release/GetMoviesByRelease";
import { PostgresGetMoviesByRelease } from "./repositories/get-movies-by-release/PostgresGetMoviesByRelease";
import { PostgresCreateMovieRent } from "./repositories/create-movie-rent/PostgresCreateMovieRent";
import { CreateMovieRentController } from "./controllers/create-movie-rent/CreateMovieRentController";

const routes = Router();

routes.post("/users", (req, res) => {
  const postgresCreateUser = new PostgresCreateUser();
  const createUserController = new CreateUserController(postgresCreateUser);
  createUserController.handle(req, res);
});

routes.post("/movies", (req, res) => {
  const postgresCreateMovies = new PostgresCreateMovies();
  const createMovieController = new CreateMovieController(postgresCreateMovies);
  createMovieController.handle(req, res);
});

routes.post("/movies/rent", (req, res) => {
  const postgresCreateMovieRent = new PostgresCreateMovieRent();
  const createMovieRentController = new CreateMovieRentController(
    postgresCreateMovieRent
  );
  createMovieRentController.handle(req, res);
});

routes.get("/movies", (req, res) => {
  const postgresCreateMovies = new PostgresGetMoviesByRelease();
  const getMoviesByRelease = new GetMoviesByRelease(postgresCreateMovies);
  getMoviesByRelease.handle(res);
});

export default routes;
