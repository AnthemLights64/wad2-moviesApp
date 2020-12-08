import React, { useEffect, useState } from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import "./movieCredits.css";

export default ({ movie }) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCredits(movie.id).then(credits => {
      setCast(credits.cast);
    }); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const [crew, setCrew] = useState([]);
  // console.log(crew);
  // useEffect(() => {
  //   getMovieCredits(movie.id).then(credits => {
  //     setCrew(credits.crew);
  //   }); 
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>Cast name</th>
          <th>Character</th>
        </tr>
      </thead>
      <tbody>
        {cast.map(c => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.character}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </>
  );
};