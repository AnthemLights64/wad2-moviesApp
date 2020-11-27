import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
//import useMovie from "../hooks/useMovie";
import { getSimilarMovies } from "../api/tmdb-api";
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const SimilarMoviesPage = props => {
  const { id } = props.match.params;
  //const [movie] = useMovie(id);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(id).then(similarMovies => {
      setSimilarMovies(similarMovies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <PageTemplate 
      title="Similar Movies of that One "
      movies={similarMovies}
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} /> 
      }}
    />
);
};

export default SimilarMoviesPage;