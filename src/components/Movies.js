import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
  <h1>Movies Page</h1>
   {
    movies.map((movie) => (
      <div key={movie.title}>
        <h3>Title:<span>{movie.title}</span></h3>
        <p>Time:<span>{movie.time}</span></p>
        <ul>
          <li>{movie.genres}</li>
        </ul>
      </div>  
    ))
    }</div>;
}

export default Movies;
