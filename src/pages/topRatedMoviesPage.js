import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import TopRatedButton from '../components/buttons/topRatedButton'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const topRated = context.topRated;
  return (
      <PageTemplate 
        title='Top Rated Movies'
        movies={topRated}
        action={(movie) => {
          return <TopRatedButton movie={movie} /> 
        }}
      />
  );
};

export default MovieListPage;