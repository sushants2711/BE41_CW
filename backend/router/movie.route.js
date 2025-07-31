import express from "express";
import { addMovies, deleteMovie, findAllMovies, readMovieByDirector, readMovieByGenres, readMovieByTitle, updateData } from "../controllers/movie.controller.js";

const movieRouter = express.Router();

movieRouter.route("/:title").get(readMovieByTitle);
movieRouter.route("/").get(findAllMovies);
movieRouter.route("/director/:directorName").get(readMovieByDirector);
movieRouter.route("/genres/:genreName").get(readMovieByGenres);
movieRouter.route("/addmovie").post(addMovies);
movieRouter.route("/delete/:id").delete(deleteMovie);
movieRouter.route("/update/:id").put(updateData)

export default movieRouter;