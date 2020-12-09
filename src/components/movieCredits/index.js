import React, { useEffect, useState } from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import "./movieCredits.css";
import { Link } from "react-router-dom";

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
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {cast.map(c => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.character}</td>
            <td>
              <Link to={{
                  pathname: `/credit/${c.credit_id}`
                }}>
                  Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div>{cast.profile_path}</div>

    </>
  );
};