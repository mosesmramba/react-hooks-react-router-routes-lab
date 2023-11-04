import React from "react";
import { directors } from "../data";

function Directors() {
  console.log()
  return (
    <div>
      <h1>Directors Page</h1>
      {
        directors.map((director) => (
        <div>
          <p>Director:<span>{director.name}</span></p>
          <ul>
            {
              director.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))
            }
          </ul>
        </div>
         ))
      }
    </div>

  )
}

export default Directors;