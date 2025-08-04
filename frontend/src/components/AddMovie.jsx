import React, { useState } from "react";

export const AddMovie = () => {
  const [data, setData] = useState({
    title: "",
    releaseYear: "",
    genre: "",
    director: "",
    actors: "",
    language: "",
    country: "",
    rating: "",
    plot: "",
    awards: "",
    posterUrl: "",
    trailerUrl: "",
  });

  const [message, setMessage] = useState();

  const [error, setError] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:1000/movies/addmovie";
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      const { success, message } = result;

      if (success) {
        setMessage(message);
      } else {
        setError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}

      <h1>Add New Movie</h1>

      <form onSubmit={handleSubmit}>
        <p>Title:</p>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          value={data.title}
        />
        <p>Release Year:</p>
        <input
          type="number"
          onChange={handleChange}
          name="releaseYear"
          value={data.releaseYear}
        />
        <p>Genre:</p>
        <input
          type="text"
          onChange={handleChange}
          name="genre"
          value={data.genre}
        />
        <p>Director:</p>
        <input
          type="text"
          onChange={handleChange}
          name="director"
          value={data.director}
        />
        <p>Actors:</p>
        <input
          type="text"
          onChange={handleChange}
          name="actors"
          value={data.actors}
        />
        <p>Language:</p>
        <input
          type="text"
          onChange={handleChange}
          name="language"
          value={data.language}
        />
        <p>Country:</p>
        <input
          type="text"
          onChange={handleChange}
          name="country"
          value={data.country}
        />
        <p>Rating:</p>
        <input
          type="number"
          onChange={handleChange}
          name="rating"
          value={data.rating}
        />
        <p>Plot:</p>
        <input
          type="text"
          onChange={handleChange}
          name="plot"
          value={data.plot}
        />
        <p>Awards:</p>
        <input
          type="text"
          onChange={handleChange}
          name="awards"
          value={data.awards}
        />
        <p>PosterUrl:</p>
        <input
          type="text"
          onChange={handleChange}
          name="posterUrl"
          value={data.posterUrl}
        />
        <p>TrailerUrl:</p>
        <input
          type="text"
          onChange={handleChange}
          name="trailerUrl"
          value={data.trailerUrl}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
