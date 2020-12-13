import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'
import {Link} from "react-router-dom";

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const favorites = context.movies.filter( m => m.favorite );
  const user = context.user;

  if(!user){
    return <div style={{fontSize:35, textAlign:"center"}}><p>Please <span className="signIn"><Link to={'/signIn'}>Sign In</Link></span> first!</p></div>
  }

  return (
    <MovieListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;