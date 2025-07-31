import mongoose from "mongoose";
import movieModel from "../models/movie.model.js";

export const readMovieByTitle = async (req, res) => {
  try {
    const { title } = req.params;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is missing",
      });
    }

    const movieAvailable = await movieModel.findOne({ title: title });

    if (!movieAvailable || movieAvailable.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Movie not exist",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Movie data fetch successsfully",
      data: movieAvailable,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const findAllMovies = async (req, res) => {
  try {
    const allMovies = await movieModel.find();

    if (!allMovies || allMovies.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No movies found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Data fetch successfully",
      data: allMovies,
    });
  } catch (error) {
    return res.status(
      (500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      })
    );
  }
};

export const readMovieByDirector = async (req, res) => {
  try {
    const { directorName } = req.params;

    if (!directorName) {
      return res.status(400).json({
        success: false,
        message: "Director name is missing",
      });
    }

    const directorByMovie = await movieModel.find({ director: directorName });

    if (!directorByMovie || directorByMovie.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No movies found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Data fetch successfully",
      data: directorByMovie,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const readMovieByGenres = async (req, res) => {
  try {
    const { genreName } = req.params;

    if (!genreName) {
      return res.status(400).json({
        success: false,
        message: "genre name is missing",
      });
    }

    const getAllGenreMovies = await movieModel.find({ genre: genreName });

    if (!getAllGenreMovies || getAllGenreMovies.length === 0) {
      return res.status(404).json({
        success: false,
        message: "no movie found from this genre",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Data fetch successfully",
      data: getAllGenreMovies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const addMovies = async (req, res) => {
  try {
    const {
      title,
      releaseYear,
      genre,
      director,
      actors,
      language,
      country,
      rating,
      plot,
      awards,
      posterUrl,
      trailerUrl,
    } = req.body;

    if (!title || !releaseYear || !director || !language) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const movie = new movieModel({
      title,
      releaseYear,
      genre,
      director,
      actors,
      language,
      country,
      rating,
      plot,
      awards,
      posterUrl,
      trailerUrl,
    });

    const data = await movie.save();

    return res.status(201).json({
      success: true,
      message: "Data created successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Id is missing",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }

    const deleteMovie = await movieModel.findByIdAndDelete(id);

    if (!deleteMovie) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Data deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
