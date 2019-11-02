import React, { useState, useEffect } from "react";
import axios from "axios";
// Imported Link
import { Link } from "react-router-dom";

const MovieList = props => {
  console.log(props);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  // Destructured to pull out the first four of movie object.. added ID for movie
  const { title, director, metascore, stars, id } = movie;
  // console.log(id);
  return (
    <Link to={`/movies/${id}`}>
      {/* Comes from movie object being passed down from MovieList id on 38 is same as seeing props.movie.id */}
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </Link>
  );
}

export default MovieList;
