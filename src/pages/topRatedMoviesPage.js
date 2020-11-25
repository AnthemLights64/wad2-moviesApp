import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const topRated = context.topRated.filter((m) => {  // New
    return !("favorite" in m);
  });
  return (
      <PageTemplate 
        title='Top Rated Movies'
        movies={topRated}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
  );
};

export default MovieListPage;